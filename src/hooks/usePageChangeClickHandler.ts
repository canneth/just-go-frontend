
import { CurrPageContext } from '@/components/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useContext, MouseEventHandler, MouseEvent, useCallback } from 'react';

interface usePageChangeClickHandlerOptions {
  toExternal?: boolean;
}

export default function usePageChangeClickHandler(destinationURL: string, options?: usePageChangeClickHandlerOptions): MouseEventHandler {
  const router = useRouter();
  const [currPageEl, _] = useContext(CurrPageContext);

  useEffect(() => {
    if (options?.toExternal) return;
    router.prefetch(destinationURL)
  }, [router, destinationURL, options?.toExternal]);

  const handleClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (router.pathname === destinationURL) return;
    currPageEl?.classList.add('pageFadeOut');
    setTimeout(() => {
      router.push(destinationURL);
    }, 250);
  }, [router, currPageEl?.classList, destinationURL]);

  return handleClick;
}