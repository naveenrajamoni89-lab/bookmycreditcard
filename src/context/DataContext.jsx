import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchBanks, fetchCategories, fetchCards, fetchCollections, fetchCardNetworks } from '../services/cardsService';
import { fetchCategoryPages } from '../services/contentService';

const DataContext = createContext(null);

/**
 * Loads the core catalog (banks, categories, cards, collections, category
 * page configs) once for the whole app. Services already fall back to seed
 * data on failure, so `error` only reflects unexpected programming errors.
 */
export function DataProvider({ children }) {
  const [state, setState] = useState({
    banks: [],
    categories: [],
    cards: [],
    collections: [],
    categoryPages: [],
    cardNetworks: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [banks, categories, cards, collections, categoryPages, cardNetworks] = await Promise.all([
          fetchBanks(),
          fetchCategories(),
          fetchCards(),
          fetchCollections(),
          fetchCategoryPages(),
          fetchCardNetworks(),
        ]);
        if (!cancelled) {
          setState({ banks, categories, cards, collections, categoryPages, cardNetworks, loading: false, error: null });
        }
      } catch (err) {
        console.error('Failed to load catalog data:', err);
        if (!cancelled) {
          setState(prev => ({ ...prev, loading: false, error: 'Unable to load credit card data. Please try again.' }));
        }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const value = useMemo(() => ({
    ...state,
    getCardsById: (ids) => ids.map(id => state.cards.find(c => c.id === id)).filter(Boolean),
    getCardsByCategory: (categoryId) => state.cards.filter(c => (c.categories || []).includes(categoryId)),
    getCardsByNetwork: (networkId) => state.cards.filter(c => (c.networks || [c.network]).includes(networkId)),
  }), [state]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}
