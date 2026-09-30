import { supabase, isSupabaseConfigured } from '../lib/supabase';

// Demo-mode activity log (localStorage), used when Supabase isn't configured.
const DEMO_ACTIVITIES_KEY = 'bmcc-demo-activities';
const DEMO_MAX_ACTIVITIES = 1000;
const GUEST_ACTIVITIES_KEY = 'bmcc-guest-activities';
const GUEST_MAX_ACTIVITIES = 30;

const readDemoActivities = () => {
  try { return JSON.parse(localStorage.getItem(DEMO_ACTIVITIES_KEY)) || []; } catch { return []; }
};
const writeDemoActivities = (items) =>
  localStorage.setItem(DEMO_ACTIVITIES_KEY, JSON.stringify(items.slice(-DEMO_MAX_ACTIVITIES)));

export const readGuestActivities = () => {
  try { return JSON.parse(sessionStorage.getItem(GUEST_ACTIVITIES_KEY)) || []; } catch { return []; }
};
export const clearGuestActivities = () => {
  try { sessionStorage.removeItem(GUEST_ACTIVITIES_KEY); } catch { /* noop */ }
};
const writeGuestActivities = (items) => {
  try {
    sessionStorage.setItem(GUEST_ACTIVITIES_KEY, JSON.stringify(items.slice(-GUEST_MAX_ACTIVITIES)));
  } catch { /* noop */ }
};

const isUUID = (str) => typeof str === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);

/**
 * Records a user action (card viewed, compare, eligibility check, etc.).
 * When nobody is signed in, stores temporarily in guest session so that
 * once they sign in or create an account, their recent journey is preserved.
 */
export async function logActivity(user, activityType, details = {}) {
  try {
    // If guest, capture to session storage
    if (!user || !user.id) {
      const guestItems = readGuestActivities();
      guestItems.push({
        id: `guest-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        activity_type: activityType,
        details,
        created_at: new Date().toISOString(),
      });
      writeGuestActivities(guestItems);
      return;
    }

    // Always record locally so current session/browser has immediate access
    const demoItems = readDemoActivities();
    demoItems.push({
      id: Date.now() + Math.random(),
      user_id: user.id,
      user_name: user.fullName || '',
      user_email: user.email || '',
      activity_type: activityType,
      details,
      created_at: new Date().toISOString(),
    });
    writeDemoActivities(demoItems);

    // If Supabase is configured AND this is a real authenticated Supabase user with a valid UUID
    if (isSupabaseConfigured && !user.isDemo && isUUID(user.id)) {
      const { error } = await supabase.from('user_activities').insert({
        user_id: user.id,
        activity_type: activityType,
        details,
      });
      if (error) console.warn('[supabase] logActivity failed:', error.message);
    }
  } catch (err) {
    console.warn('logActivity failed:', err);
  }
}

/**
 * Syncs any guest activities recorded before sign-in to the newly signed-in user's account.
 */
export async function syncGuestActivitiesToUser(user) {
  if (!user?.id) return;
  const guestItems = readGuestActivities();
  if (!guestItems.length) return;

  clearGuestActivities();

  for (const item of guestItems) {
    // Exclude noise like sign-in page visits
    if (item.activity_type === 'page_visited' && ['/sign-in', '/my-account', '/admin'].includes(item.details?.path)) {
      continue;
    }
    await logActivity(user, item.activity_type, item.details);
  }
}

const EXCLUDED_PROFILE_ACTIVITIES = new Set(['signed_in', 'signed_out']);

/** Recent activity for the signed-in user (newest first, excluding routine login/logout events). */
export async function fetchMyActivities(user, limit = 50) {
  if (!user || !user.id) return [];

  const filterProfileActivities = (items) =>
    (items || [])
      .filter(a => a.user_id === user.id && !EXCLUDED_PROFILE_ACTIVITIES.has(a.activity_type))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, limit);

  // If user is demo or not a valid UUID, retrieve from local store directly
  if (!isSupabaseConfigured || user.isDemo || !isUUID(user.id)) {
    return filterProfileActivities(readDemoActivities());
  }

  // Real authenticated Supabase user with valid UUID
  try {
    const { data, error } = await supabase
      .from('user_activities')
      .select('id, activity_type, details, created_at')
      .eq('user_id', user.id)
      .not('activity_type', 'in', '("signed_in","signed_out")')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.warn('[supabase] fetchMyActivities failed, falling back to local store:', error.message);
      return filterProfileActivities(readDemoActivities());
    }

    if (data && data.length > 0) return data;

    // If Supabase has 0 records, check if local store has recent activities
    return filterProfileActivities(readDemoActivities());
  } catch (err) {
    console.warn('fetchMyActivities error:', err);
    return filterProfileActivities(readDemoActivities());
  }
}

/** All activities across users - admin dashboard only (RLS enforces admin). */
export async function fetchAllActivities(limit = 300) {
  if (!isSupabaseConfigured) {
    return readDemoActivities()
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, limit);
  }

  // Fetch activities directly (avoid PostgREST PGRST200 join error between user_activities and profiles)
  const { data: activities, error } = await supabase
    .from('user_activities')
    .select('id, user_id, activity_type, details, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.warn('[supabase] fetchAllActivities failed:', error.message);
    return [];
  }

  // Fetch profiles to map user names and emails
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, full_name, email');

  const profileMap = new Map((profiles || []).map(p => [p.id, p]));

  return (activities || []).map(a => {
    const prof = profileMap.get(a.user_id);
    return {
      ...a,
      user_name: prof?.full_name || '',
      user_email: prof?.email || '',
    };
  });
}

/** All registered users - admin dashboard only (RLS enforces admin). */
export async function fetchAllProfiles() {
  if (!isSupabaseConfigured) {
    try {
      const users = JSON.parse(localStorage.getItem('bmcc-demo-users')) || [];
      return users.map(u => ({
        id: u.id,
        full_name: u.fullName,
        email: u.email,
        mobile: u.mobile || '',
        is_admin: !!u.isAdmin,
        created_at: u.createdAt,
      }));
    } catch {
      return [];
    }
  }
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, email, mobile, is_admin, created_at')
    .order('created_at', { ascending: false });
  if (error) {
    console.warn('[supabase] fetchAllProfiles failed:', error.message);
    return [];
  }
  return data || [];
}

/** Human-readable label + description for an activity row. */
export function describeActivity(activity) {
  const d = activity.details || {};
  const cardWithBank = d.bank ? `${d.card} · ${d.bank}` : (d.card || '');

  switch (activity.activity_type) {
    case 'signed_up':
      return { label: 'Account Created', detail: 'Joined Book My Credit Card' };
    case 'signed_in':
      return { label: 'Signed In', detail: 'Logged into your account' };
    case 'page_visited':
      return { label: 'Visited Page', detail: d.title || d.path || '' };
    case 'card_viewed':
    case 'card_detail_view':
      return { label: 'Viewed Card Details', detail: cardWithBank };
    case 'apply_now_click':
      return { label: 'Started Card Application', detail: cardWithBank ? `Application initiated for ${cardWithBank}` : 'Application link clicked' };
    case 'eligibility_click':
      return { label: 'Checked Card Eligibility', detail: cardWithBank ? `Checked criteria for ${cardWithBank}` : '' };
    case 'eligibility_checked':
      return {
        label: 'Used Eligibility Calculator',
        detail: `Age ${d.age || '—'}, Income ₹${d.income ? Number(d.income).toLocaleString('en-IN') : '—'}, ${d.employment || 'Salaried'} → ${d.eligible ? 'Likely Eligible' : 'Needs Review'}`,
      };
    case 'compare_added':
      return { label: 'Added Card to Compare', detail: d.card || '' };
    case 'compare_removed':
      return { label: 'Removed Card from Compare', detail: d.card || '' };
    case 'cards_compared':
      return { label: 'Compared Credit Cards', detail: (d.cards || []).join(' vs ') };
    case 'lead_submitted':
      return { label: 'Requested Card Assistance', detail: d.mobile ? `Application assistance for mobile ending ${String(d.mobile).slice(-4)}` : '' };
    case 'calculator_used':
      return { label: 'Used Financial Calculator', detail: d.calculator || '' };
    default: {
      const cleanLabel = (activity.activity_type || '')
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      return { label: cleanLabel, detail: d.card || d.title || '' };
    }
  }
}

