import { supabase, isSupabaseConfigured } from '../lib/supabase';

/**
 * Stores a card-offer lead (name + mobile) in the `leads` table.
 * Without Supabase configured the submission is accepted locally so the
 * form flow still works end-to-end in development.
 */
export async function submitLead({ name, mobile, userId = null }) {
  if (!isSupabaseConfigured) {
    console.info('[supabase] not configured - lead accepted locally:', { name, mobile });
    return { ok: true };
  }
  const { error } = await supabase.from('leads').insert({ full_name: name, mobile, user_id: userId });
  if (error) {
    console.error('Lead submission failed:', error);
    return { ok: false, message: 'Could not submit your details. Please try again.' };
  }
  return { ok: true };
}
