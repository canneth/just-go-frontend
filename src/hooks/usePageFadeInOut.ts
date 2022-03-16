
import { useEffect, useRef, useContext } from 'react';
import { CurrPageContext } from '@/components/layout/Layout';

export default function usePageFadeInOut() {

  const [_, setCurrPageEl] = useContext(CurrPageContext);
  const selfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    selfRef.current?.classList.add('pageFadeIn');
  }, []);

  useEffect(() => {
    setCurrPageEl!(selfRef.current);
  }, [setCurrPageEl, selfRef]);

  return selfRef;
}