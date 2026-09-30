import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CompareContext = createContext(null);
const MAX_COMPARE = 3;
const STORAGE_KEY = 'pb-compare-cards';

/**
 * Holds the "compare" selection (max 3 cards) across all pages, persisted to
 * sessionStorage so the selection survives route changes and reloads.
 */
export function CompareProvider({ children }) {
  const [compareIds, setCompareIds] = useState(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(compareIds));
    } catch {
      // storage unavailable (private mode) - selection just won't persist
    }
  }, [compareIds]);

  const value = useMemo(() => ({
    compareIds,
    maxCompare: MAX_COMPARE,
    isCompared: (id) => compareIds.includes(id),
    isFull: compareIds.length >= MAX_COMPARE,
    toggleCompare: (id) => {
      setCompareIds(prev => {
        if (prev.includes(id)) return prev.filter(x => x !== id);
        if (prev.length >= MAX_COMPARE) return prev;
        return [...prev, id];
      });
    },
    clearCompare: () => setCompareIds([]),
  }), [compareIds]);

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare must be used within CompareProvider');
  return ctx;
}
