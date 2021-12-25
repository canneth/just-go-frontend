
import { useEffect, useRef } from 'react';

export default function usePageFadeInOut() {

  const selfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    selfRef.current?.classList.add('pageFadeIn');
  }, []);

  return selfRef;
}