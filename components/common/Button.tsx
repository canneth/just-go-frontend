
import { useRouter } from 'next/router';
import { useEffect, MouseEvent, RefObject } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  destinationURL: string;
  pageEl: HTMLDivElement;
  extRoute?: boolean;
  noBackground?: true;
}

export default function Button(props: ButtonProps) {

  const router = useRouter();

  useEffect(() => {
    router.prefetch(props.destinationURL)
  }, [router, props.destinationURL]);

  function handleClick(_: MouseEvent) {
    if (!props.extRoute) {
      props.pageEl.classList.add('pageFadeOut');
      setTimeout(() => {
        router.push(props.destinationURL);
      }, 200);
    } else {
      router.push(props.destinationURL);
    }
  }

  return (
    <a
      className={`${styles.overallContainer} ${props.noBackground ? styles.noBackground : null}`}
      onClick={handleClick}
    >
      {props.text}
    </a>
  );
}