
import { CurrPageContext } from '@/components/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useContext, MouseEventHandler, MouseEvent } from 'react';

export default function usePageChangeClickHandler(destinationURL: string): MouseEventHandler {
  const router = useRouter();
  const [currPageEl, _] = useContext(CurrPageContext);

  useEffect(() => {
    router.prefetch(destinationURL)
  }, [router, destinationURL]);

  function handleClick(_: MouseEvent) {
    if (router.pathname === destinationURL) return;
    currPageEl?.classList.add('pageFadeOut');
    setTimeout(() => {
      router.push(destinationURL);
    }, 250);
  }

  return handleClick;
}