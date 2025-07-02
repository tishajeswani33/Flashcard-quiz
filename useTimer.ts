import { useState, useEffect, useRef } from 'react';

export const useTimer = (isActive: boolean) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  const reset = () => {
    setSeconds(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return { seconds, reset };
};