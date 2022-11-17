import {useEffect, useState} from 'react';

export const useDeboucedValue = (input: string = '', time: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
      console.log('useDeboucedValue', input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
