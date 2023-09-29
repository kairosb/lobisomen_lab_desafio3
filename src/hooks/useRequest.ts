import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function useRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const request = async () => {
      const response = await api.get(url);
      setData(response.data);
    };

    request();
  }, []);

  return { data };
}
