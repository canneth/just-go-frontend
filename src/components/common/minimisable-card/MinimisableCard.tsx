
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './MinimisableCard.module.css';

interface MinimisableCardProps {
  minimisedDiameter: number; // in px
  children?: ReactNode;
  className?: string;
}

export default function MinimisableCard(props: MinimisableCardProps) {

  const [minimised, setMinimised] = useState<boolean>();
  const [hideContent, setHideContent] = useState<boolean>(false);
  const selfRef = useRef<HTMLDivElement>(null);
  const animationDuration = 200; // in ms
  const contentFadeDuration = 100; // in ms

  function clickHandlerMinimiseButton(_: MouseEvent) {
    if (minimised) {
      setMinimised(false);
      setTimeout(() => {
        setHideContent(false);
      }, animationDuration);
    } else {
      selfRef.current?.style.setProperty('--expanded-max-height', `${selfRef.current!.offsetHeight}px`);
      selfRef.current?.style.setProperty('--expanded-max-width', `${selfRef.current!.offsetWidth}px`);
      setHideContent(true);
      setMinimised(true);
    }
  }

  useEffect(() => {
    selfRef.current!.style.setProperty('--minimised-max-height', `${props.minimisedDiameter}px`);
    selfRef.current!.style.setProperty('--minimised-max-width', `${props.minimisedDiameter}px`);
    selfRef.current!.style.setProperty('--animation-duration', `${animationDuration}ms`);
    selfRef.current!.style.setProperty('--content-fade-duration', `${contentFadeDuration}ms`);
  }, [props.minimisedDiameter]);

  return (
    <div ref={selfRef} className={`${styles.overallContainer} ${props.className} ${minimised === undefined ? null : (minimised ? styles.minimised : styles.expanded)}`}>
      <div className={`${styles.expandedContentContainer} ${hideContent ? styles.hide : null}`}>
        {props.children}
      </div>
      <button className={styles.minimiseButton} onClick={clickHandlerMinimiseButton} />
    </div>
  );
}