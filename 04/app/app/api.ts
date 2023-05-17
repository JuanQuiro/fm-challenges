import { useState, useEffect } from 'react';
import axios from 'axios';

interface Advice {
  id: number;
  advice: string;
}

const useAdviceApi = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios('https://api.adviceslip.com/advice');
        setAdvice(result.data.slip);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { advice, isLoading, error };
};

export default useAdviceApi;