import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

export default function useFetch(url: string) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchHandle = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url);

      setData(response);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchHandle();
  }, [fetchHandle]);

  return {data, loading, error};
}