import { useEffect, useState } from 'react';

export type UseDebounceParams<T> = {
  delay?: number;
  initialValue: T;
};

export function useDebounce<T>({
  delay = 500,
  initialValue,
}: UseDebounceParams<T>) {
  const [currentValue, setCurrentValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

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
