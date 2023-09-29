import { useState, useEffect } from 'react';

export function usePersistedState<T = unknown>(key: string, initialState: T) {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return { state, setState };
}
