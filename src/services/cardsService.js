import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { banks as fallbackBanks, categories as fallbackCategories, cardNetworks as fallbackCardNetworks, normalizeCards } from '../data/cards';
import { cardCollections as fallbackCollections } from '../data/content';

/**
 * Every fetcher follows the same contract: query Supabase when configured,
 * and transparently fall back to the bundled seed data when Supabase is not
 * configured or the query fails. Errors are logged, never thrown, so the UI
 * always has data to render.
 */
async function withFallback(label, query, fallback) {
  if (!isSupabaseConfigured) return fallback();
  try {
    const result = await query();
    if (result.error) throw result.error;
    if (!result.data || result.data.length === 0) return fallback();
    return result.mapped ? result.mapped : result.data;
  } catch (err) {
    console.warn(`[supabase] ${label} failed, using local data:`, err.message || err);
    return fallback();
  }
}

export async function fetchBanks() {
  return withFallback(
    'fetchBanks',
    async () => {
      const { data, error } = await supabase
        .from('banks')
        .select('id, name, logo_url')
        .order('name');
      return {
        data,
        error,
        mapped: data?.map(b => ({ id: b.id, name: b.name, logo: b.logo_url })),
      };
    },
    () => fallbackBanks,
  );
}

export async function fetchCategories() {
  return withFallback(
    'fetchCategories',
    async () => {
      const { data, error } = await supabase
        .from('card_categories')
        .select('id, name, icon_url, show_in_filter, sort_order')
        .order('sort_order');
      return {
        data,
        error,
        mapped: data?.map(c => ({
          id: c.id,
          name: c.name,
          icon: c.icon_url,
          showInFilter: c.show_in_filter,
        })),
      };
    },
    () => fallbackCategories,
  );
}

export async function fetchCards() {
  const localCards = normalizeCards();
  const localById = new Map(localCards.map(c => [c.id, c]));
  const localByName = new Map(localCards.map(c => [c.name.toLowerCase().trim(), c]));

  const result = await withFallback(
    'fetchCards',
    async () => {
      const { data, error } = await supabase
        .from('credit_cards')
        .select(`
          id, name, bank_id, image_url, joining_fee, annual_fee, sort_order,
          banks ( name ),
          card_category_map ( category_id ),
          card_benefits ( icon_url, benefit_text, position )
        `)
        .order('sort_order');
      return {
        data,
        error,
        mapped: data?.map(card => {
          const name = (card.name || '').replace(/\\u00ae/gi, '');
          const match = localById.get(card.id) || localByName.get(name.toLowerCase().trim());
          return {
            id: card.id,
            name,
            bank: card.bank_id,
            bankName: card.banks?.name || match?.bankName || '',
            image: card.image_url || match?.image || '',
            joiningFee: card.joining_fee ?? match?.joiningFee ?? 500,
            annualFee: card.annual_fee ?? match?.annualFee ?? 500,
            categories: (card.card_category_map && card.card_category_map.length > 0)
              ? card.card_category_map.map(m => m.category_id)
              : (match?.categories || ['rewards']),
            benefits: (card.card_benefits && card.card_benefits.length > 0)
              ? card.card_benefits
                .sort((a, b) => a.position - b.position)
                .map(b => ({ icon: b.icon_url, text: b.benefit_text }))
              : (match?.benefits || []),
            route: match?.route || '',
            detailRoute: match?.detailRoute || '',
            knowMore: match?.knowMore || '',
            checkEligibility: match?.checkEligibility || '/credit-card-eligibility',
            networks: match?.networks || ['visa'],
            network: match?.network || 'visa',
          };
        }),
      };
    },
    () => localCards,
  );

  // If Supabase returned a partial list, merge missing cards from local catalogue
  if (Array.isArray(result) && result.length < localCards.length) {
    const existingIds = new Set(result.map(c => c.id));
    const existingNames = new Set(result.map(c => c.name.toLowerCase().trim()));
    const missing = localCards.filter(c => !existingIds.has(c.id) && !existingNames.has(c.name.toLowerCase().trim()));
    return [...result, ...missing];
  }

  return result;
}


export async function fetchCollections() {
  return withFallback(
    'fetchCollections',
    async () => {
      const { data, error } = await supabase
        .from('card_collections')
        .select(`
          id, title, show_all_link, sort_order,
          card_collection_items ( card_id, position )
        `)
        .order('sort_order');
      return {
        data,
        error,
        mapped: data?.map(col => ({
          id: col.id,
          title: col.title,
          showAllLink: col.show_all_link,
          cardIds: (col.card_collection_items || [])
            .sort((a, b) => a.position - b.position)
            .map(item => item.card_id),
        })),
      };
    },
    () => fallbackCollections,
  );
}

export async function fetchCardNetworks() {
  return fallbackCardNetworks;
}
