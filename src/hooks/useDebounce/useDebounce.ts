import { useEffect, useState } from 'react';

export type UseDebounceParams = {
  delay?: number;
};

function useDebounce<T>({ delay = 500 }: UseDebounceParams) {
  const [debouncedValue, setDebouncedValue] = useState<T>();
  const [currentValue, setCurrentValue] = useState<T>();

  const debounce = (value: T) => {
    setCurrentValue(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(currentValue), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [currentValue, delay]);

  return { debounce, debouncedValue };
}

export default useDebounce;
