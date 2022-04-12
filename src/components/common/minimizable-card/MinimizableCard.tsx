
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './MinimizableCard.module.css';

interface MinimizableCardProps {
  minimizedDiameter: number; // in px
  minimizedContentJsx: ReactNode;
  tooltip?: string;
  children?: ReactNode;
  className?: string;
}

export default function MinimizableCard(props: MinimizableCardProps) {

  const [minimized, setMinimized] = useState<boolean>();
  const [minimizing, setMinimizing] = useState<boolean>();
  const [expanding, setExpanding] = useState<boolean>();
  const [expanded, setExpanded] = useState<boolean>();
  const selfRef = useRef<HTMLDivElement>(null);
  const animationDuration = 200; // in ms

  function clickHandlerMinimizeButton(_: MouseEvent) {
    if (minimized) return;
    selfRef.current?.style.setProperty('--expanded-max-height', `${selfRef.current!.offsetHeight}px`);
    selfRef.current?.style.setProperty('--expanded-max-width', `${selfRef.current!.offsetWidth}px`);
    setMinimizing(true);
    setExpanded(false);
    setTimeout(() => {
      setMinimized(true);
      setMinimizing(false);
    }, animationDuration);
  }

  function clickHandlerExpand(_: MouseEvent) {
    setExpanding(true);
    setMinimized(false);
    setTimeout(() => {
      setExpanded(true);
      setExpanding(false);
    }, animationDuration);
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
        ${minimizing ? styles.minimizing : null}
        ${minimized ? styles.minimized : null}
        ${expanding ? styles.expanding : null}
        ${expanded ? styles.expanded : null}
      `}
      onClick={minimized ? clickHandlerExpand : undefined}
    >
      {minimized && props.tooltip ? <aside className={styles.tooltip}>{props.tooltip}</aside> : null}
      <div className={styles.minimizedContentContainer}>
        {props.minimizedContentJsx}
      </div>
      <div className={styles.expandedContentContainer}>
        <button className={styles.minimizeButton} onClick={clickHandlerMinimizeButton} />
        {props.children}
      </div>
    </div>
  );
}