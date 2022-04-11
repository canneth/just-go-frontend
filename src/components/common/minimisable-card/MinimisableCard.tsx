
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './MinimisableCard.module.css';

interface MinimisableCardProps {
  minimisedDiameter: number; // in px
  minimisedContentJsx: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function MinimisableCard(props: MinimisableCardProps) {

  const [minimized, setMinimised] = useState<boolean>();
  const [minimizing, setMinimizing] = useState<boolean>();
  const [expanding, setExpanding] = useState<boolean>();
  const selfRef = useRef<HTMLDivElement>(null);
  const animationDuration = 200; // in ms

  function clickHandlerMinimiseButton(_: MouseEvent) {
    if (minimized) {
      setExpanding(true);
      setTimeout(() => {
        setMinimised(false);
        setExpanding(false);
      }, animationDuration);
    } else {
      selfRef.current?.style.setProperty('--expanded-max-height', `${selfRef.current!.offsetHeight}px`);
      selfRef.current?.style.setProperty('--expanded-max-width', `${selfRef.current!.offsetWidth}px`);
      setMinimizing(true);
      setTimeout(() => {
        setMinimised(true);
        setMinimizing(false);
      }, animationDuration);
    }
  }

  useEffect(() => {
    selfRef.current!.style.setProperty('--minimized-max-height', `${props.minimisedDiameter}px`);
    selfRef.current!.style.setProperty('--minimized-max-width', `${props.minimisedDiameter}px`);
    selfRef.current!.style.setProperty('--animation-duration', `${animationDuration}ms`);
  }, [props.minimisedDiameter]);

  return (
    <div
      ref={selfRef}
      className={`
        ${styles.overallContainer}
        ${props.className}
        ${minimized ? styles.minimized : styles.expanded}
        ${minimizing ? styles.minimizing : null}
        ${expanding ? styles.expanding : null}
      `}
    >
      <div className={styles.minimisedContentContainer}>
        {props.minimisedContentJsx}
      </div>
      <div className={styles.expandedContentContainer}>
        {props.children}
        <button className={styles.minimiseButton} onClick={clickHandlerMinimiseButton} />
      </div>
    </div>
  );
}