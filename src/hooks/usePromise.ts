import { useState } from 'react';

export default function usePromise<T>(promiseCreator: (...args: any[]) => Promise<T>) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const [data, setData] = useState<T>();

  async function run() {
    setIsLoading(true);
    setError(undefined);
    setData(undefined);
    try {
      const promise = promiseCreator();
      const resolvedValue = await promise;
      setData(resolvedValue);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return { isLoading, error, data, run };
}