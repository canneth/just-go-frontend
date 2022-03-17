import { useEffect, useState } from 'react';

export default function usePromise<T, U extends unknown[]>(promiseCreator: (...args: U) => Promise<T>) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const [resolvedValue, setResolvedValue] = useState<T>();
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>();

  async function run(...args: Parameters<typeof promiseCreator>) {
    setPendingCount(x => x + 1);
    setError(undefined);
    setResolvedValue(undefined);
    try {
      const promise = promiseCreator(...args);
      const resolvedValue = await promise;
      if (isMounted) setResolvedValue(resolvedValue);
    } catch (error) {
      if (isMounted) setError(error);
    }
    if (isMounted) setPendingCount(x => x - 1);
  }

  useEffect(() => {
    setIsLoading(pendingCount > 0);
  }, [pendingCount]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return { isLoading, error, resolvedValue, run };
}