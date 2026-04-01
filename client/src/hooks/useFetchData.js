import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data with loading/error states.
 * @param {Function} fetchFn - Async function that returns data
 * @param {Array} deps - Dependency array for re-fetching
 */
export const useFetchData = (fetchFn, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn();
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load data');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, deps);

  return { data, loading, error };
};
