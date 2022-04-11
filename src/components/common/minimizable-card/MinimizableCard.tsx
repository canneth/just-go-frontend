
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './MinimizableCard.module.css';

interface MinimizableCardProps {
  minimizedDiameter: number; // in px
  minimizedContentJsx: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function MinimizableCard(props: MinimizableCardProps) {

  const [minimized, setMinimized] = useState<boolean>();
  const [minimizing, setMinimizing] = useState<boolean>();
  const [expanding, setExpanding] = useState<boolean>();
  const selfRef = useRef<HTMLDivElement>(null);
  const animationDuration = 200; // in ms

  function clickHandlerMinimizeButton(_: MouseEvent) {
    if (minimized) {
      setExpanding(true);
      setTimeout(() => {
        setMinimized(false);
        setExpanding(false);
      }, animationDuration);
    } else {
      selfRef.current?.style.setProperty('--expanded-max-height', `${selfRef.current!.offsetHeight}px`);
      selfRef.current?.style.setProperty('--expanded-max-width', `${selfRef.current!.offsetWidth}px`);
      setMinimizing(true);
      setTimeout(() => {
        setMinimized(true);
        setMinimizing(false);
      }, animationDuration);
    }
  }

  useEffect(() => {
    selfRef.current!.style.setProperty('--minimized-max-height', `${props.minimizedDiameter}px`);
    selfRef.current!.style.setProperty('--minimized-max-width', `${props.minimizedDiameter}px`);
    selfRef.current!.style.setProperty('--animation-duration', `${animationDuration}ms`);
  }, [props.minimizedDiameter]);

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
      <div className={styles.minimizedContentContainer}>
        {props.minimizedContentJsx}
      </div>
      <div className={styles.expandedContentContainer}>
        {props.children}
        <button className={styles.minimizeButton} onClick={clickHandlerMinimizeButton} />
      </div>
    </div>
  );
}