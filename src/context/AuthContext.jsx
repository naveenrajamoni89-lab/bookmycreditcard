import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { logActivity, syncGuestActivitiesToUser } from '../services/activityService';

const AuthContext = createContext(null);

// ---- Demo-mode storage (used when Supabase env vars are missing or as local fallback) ----
const DEMO_USERS_KEY = 'bmcc-demo-users';
const DEMO_SESSION_KEY = 'bmcc-demo-session';

const INITIAL_DEMO_ACCOUNTS = [
  {
    id: 'demo-user-001',
    email: 'user@bookmycreditcard.com',
    fullName: 'Naveen Rajamoni',
    mobile: '9876543210',
    password: 'Password123!',
    isAdmin: false,
    isDemo: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'demo-admin-001',
    email: 'admin@bookmycreditcard.com',
    fullName: 'Platform Admin',
    mobile: '9876543211',
    password: 'Password123!',
    isAdmin: true,
    isDemo: true,
    createdAt: new Date().toISOString(),
  }
];

const readDemoUsers = () => {
  try {
    const raw = localStorage.getItem(DEMO_USERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed.map(u => ({ ...u, isDemo: u.isDemo !== undefined ? u.isDemo : true }));
    }
    localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(INITIAL_DEMO_ACCOUNTS));
    return INITIAL_DEMO_ACCOUNTS;
  } catch {
    return INITIAL_DEMO_ACCOUNTS;
  }
};
const writeDemoUsers = (users) => {
  try { localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users)); } catch { /* noop */ }
};

const demoIsAdmin = (email) => email.endsWith('@bookmycreditcard.com');
const isUUID = (str) => typeof str === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);

function toAppUser({ id, email, fullName, mobile, isAdmin, createdAt, isDemo }) {
  const isDemoUser = isDemo !== undefined ? !!isDemo : !isUUID(id);
  return { id, email, fullName: fullName || '', mobile: mobile || '', isAdmin: !!isAdmin, createdAt, isDemo: isDemoUser };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- session bootstrap ---
  useEffect(() => {
    let cancelled = false;

    // Check demo session first
    const checkDemoSession = () => {
      try {
        const demoSession = JSON.parse(sessionStorage.getItem(DEMO_SESSION_KEY));
        if (demoSession) {
          const account = readDemoUsers().find(u => u.id === demoSession.id);
          if (account) {
            const appUser = toAppUser(account);
            if (!cancelled) setUser(appUser);
            syncGuestActivitiesToUser(appUser);
            return true;
          }
        }
      } catch { /* noop */ }
      return false;
    };

    if (!isSupabaseConfigured) {
      checkDemoSession();
      setLoading(false);
      return;
    }

    const loadProfile = async (session) => {
      if (!session?.user) {
        // Fall back to checking demo session
        const hasDemo = checkDemoSession();
        if (!hasDemo && !cancelled) setUser(null);
        return;
      }
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, mobile, is_admin, created_at')
        .eq('id', session.user.id)
        .maybeSingle();
      if (!cancelled) {
        const appUser = toAppUser({
          id: session.user.id,
          email: session.user.email,
          fullName: profile?.full_name || session.user.user_metadata?.full_name,
          mobile: profile?.mobile || session.user.user_metadata?.mobile,
          isAdmin: profile?.is_admin,
          createdAt: profile?.created_at || session.user.created_at,
        });
        setUser(appUser);
        syncGuestActivitiesToUser(appUser);
      }
    };

    supabase.auth.getSession().then(({ data }) => {
      loadProfile(data.session).finally(() => { if (!cancelled) setLoading(false); });
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      loadProfile(session);
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    isSupabaseConfigured,

    async signUp({ fullName, email, mobile, password }) {
      if (!isSupabaseConfigured) {
        const users = readDemoUsers();
        if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
          return { ok: false, message: 'An account with this email already exists. Please sign in.' };
        }
        const account = {
          id: (crypto.randomUUID && crypto.randomUUID()) || `demo-${Date.now()}`,
          email,
          fullName,
          mobile,
          password,
          isAdmin: demoIsAdmin(email),
          createdAt: new Date().toISOString(),
        };
        writeDemoUsers([...users, account]);
        sessionStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ id: account.id }));
        const appUser = toAppUser(account);
        setUser(appUser);
        await logActivity(appUser, 'signed_up');
        await syncGuestActivitiesToUser(appUser);
        return { ok: true };
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName, mobile } },
      });
      if (error) return { ok: false, message: error.message };
      if (!data.session) {
        // Also register in local demo accounts so testing is never blocked
        const users = readDemoUsers().filter(u => u.email.toLowerCase() !== email.toLowerCase());
        const localAccount = {
          id: data.user?.id || `user-${Date.now()}`,
          email,
          fullName,
          mobile,
          password,
          isAdmin: demoIsAdmin(email),
          createdAt: new Date().toISOString(),
        };
        writeDemoUsers([...users, localAccount]);

        return {
          ok: true,
          needsConfirmation: true,
          message: 'Account created! Please confirm your email or sign in directly.',
        };
      }

      await logActivity({ id: data.session.user.id }, 'signed_up');
      return { ok: true };
    },

    async signIn({ email, password }) {
      if (!isSupabaseConfigured) {
        const account = readDemoUsers().find(
          u => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
        );
        if (!account) return { ok: false, message: 'Invalid email or password.' };
        sessionStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ id: account.id }));
        const appUser = toAppUser(account);
        setUser(appUser);
        await syncGuestActivitiesToUser(appUser);
        return { ok: true };
      }

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        // Local demo/unconfirmed account fallback so development and testing is smooth
        const account = readDemoUsers().find(
          u => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
        );
        if (account) {
          sessionStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ id: account.id }));
          const appUser = toAppUser(account);
          setUser(appUser);
          await syncGuestActivitiesToUser(appUser);
          return { ok: true };
        }

        if (error.message.toLowerCase().includes('email not confirmed')) {
          return { ok: false, message: 'Please confirm your email address or use demo credentials.' };
        }
        return { ok: false, message: error.message };
      }

      return { ok: true };
    },

    async signOut() {
      sessionStorage.removeItem(DEMO_SESSION_KEY);
      if (isSupabaseConfigured) {
        try { await supabase.auth.signOut(); } catch { /* noop */ }
      }
      setUser(null);
    },
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
