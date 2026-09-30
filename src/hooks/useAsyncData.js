import { useEffect, useState } from 'react';

/**
 * Small helper for page-level data fetching with loading/error states.
 * `fetcher` must be a stable function reference (module-level service fn or
 * one wrapped in useCallback).
 */
export function useAsyncData(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetcher()
      .then(result => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Data fetch failed:', err);
        if (!cancelled) {
          setError('Something went wrong while loading data. Please try again.');
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
