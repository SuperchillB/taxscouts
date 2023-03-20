import { useEffect, useState } from 'react';

/**
 * Returns a debounced value based on the value and delay passed in as arguments
 * @param {string} value - The value to pass through the debounce
 * @param {number} delay - number - The delay in ms for debouncing
 * @returns The debounced value
 */
function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
