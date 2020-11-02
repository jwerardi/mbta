import {useEffect, useState} from 'react';

export const useFetch = (url, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    } else {
      throw new Error(response.statusText);
    }
  };


  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await checkStatus(response);
        setData(json);
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();

  }, []);
  return {isLoading, data, error};

};