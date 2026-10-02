import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  faqs as fallbackFaqs,
  interestRates as fallbackRates,
  reviews as fallbackReviews,
  eligibilityCriteria as fallbackEligibility,
  categoryPages as fallbackCategoryPages,
  cibilSections as fallbackCibilSections,
  cibilScoreBands as fallbackScoreBands,
  bestCardPicks as fallbackBestPicks,
} from '../data/content';

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

export async function fetchFaqs(page = 'home') {
  return withFallback(
    `fetchFaqs(${page})`,
    async () => {
      const { data, error } = await supabase
        .from('faqs')
        .select('question, answer, page, position')
        .eq('page', page)
        .order('position');
      return {
        data,
        error,
        mapped: data?.map(f => ({ q: f.question, a: f.answer, page: f.page })),
      };
    },
    () => fallbackFaqs.filter(f => f.page === page),
  );
}

export async function fetchInterestRates() {
  return withFallback(
    'fetchInterestRates',
    async () => {
      const { data, error } = await supabase
        .from('interest_rates')
        .select('bank_name, monthly_rate, annual_rate, position')
        .order('position');
      return {
        data,
        error,
        mapped: data?.map(r => ({ bank: r.bank_name, monthly: r.monthly_rate, annual: r.annual_rate })),
      };
    },
    () => fallbackRates,
  );
}

export async function fetchReviews() {
  return withFallback(
    'fetchReviews',
    async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('name, location, review_text, rating')
        .order('id');
      return {
        data,
        error,
        mapped: data?.map(r => ({ name: r.name, location: r.location, text: r.review_text, rating: r.rating })),
      };
    },
    () => fallbackReviews,
  );
}

export async function fetchEligibilityCriteria() {
  return withFallback(
    'fetchEligibilityCriteria',
    async () => {
      const { data, error } = await supabase
        .from('eligibility_criteria')
        .select('criterion, salaried, self_employed, position')
        .order('position');
      return {
        data,
        error,
        mapped: data?.map(e => ({ criterion: e.criterion, salaried: e.salaried, selfEmployed: e.self_employed })),
      };
    },
    () => fallbackEligibility,
  );
}

export async function fetchCategoryPages() {
  return withFallback(
    'fetchCategoryPages',
    async () => {
      const { data, error } = await supabase
        .from('category_pages')
        .select('slug, title, category_id, description, is_bank, bank_id')
        .order('slug');
      return {
        data,
        error,
        mapped: data?.map(p => ({
          slug: p.slug,
          title: p.title,
          categoryId: p.category_id,
          description: p.description,
          isBank: p.is_bank || false,
          bankId: p.bank_id || null,
        })),
      };
    },
    () => fallbackCategoryPages,
  );
}

export async function fetchCibilSections() {
  return withFallback(
    'fetchCibilSections',
    async () => {
      const { data, error } = await supabase
        .from('page_sections')
        .select('title, body, position')
        .eq('page', 'cibil-score')
        .order('position');
      return { data, error };
    },
    () => fallbackCibilSections,
  );
}

export async function fetchScoreBands() {
  return withFallback(
    'fetchScoreBands',
    async () => {
      const { data, error } = await supabase
        .from('cibil_score_bands')
        .select('score_range, rating, approval, position')
        .order('position');
      return {
        data,
        error,
        mapped: data?.map(b => ({ range: b.score_range, rating: b.rating, approval: b.approval })),
      };
    },
    () => fallbackScoreBands,
  );
}

export async function fetchBestCardPicks() {
  return withFallback(
    'fetchBestCardPicks',
    async () => {
      const { data, error } = await supabase
        .from('best_card_picks')
        .select('card_id, tagline, position')
        .order('position');
      return {
        data,
        error,
        mapped: data?.map(p => ({ cardId: p.card_id, tagline: p.tagline })),
      };
    },
    () => fallbackBestPicks,
  );
}
