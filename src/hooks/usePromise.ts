import { useState } from 'react';

export default function usePromise<T, U extends unknown[]>(promiseCreator: (...args: U) => Promise<T>) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const [resolvedValue, setResolvedValue] = useState<T>();

  async function run(...args: Parameters<typeof promiseCreator>) {
    setIsLoading(true);
    setError(undefined);
    setResolvedValue(undefined);
    try {
      const promise = promiseCreator(...args);
      const resolvedValue = await promise;
      setResolvedValue(resolvedValue);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return { isLoading, error, resolvedValue, run };
}