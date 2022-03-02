
import { useEffect, useRef, useState } from 'react';
import { toastStore } from '../ToastManager';
import styles from './Toast.module.css';

export interface ToastProps {
  id: string;
  text: string;
  duration: number; // in ms.
}

export default function Toast(props: ToastProps) {

  const selfRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(true);

  const transitionDuration = 100; // in ms. Ensure this corresponds to counterpart in css.

  useEffect(() => {
    const timeout = setTimeout(() => toastStore.clearToastById(props.id), props.duration);
    return () => clearTimeout(timeout);
  }, [props.id, props.duration]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), props.duration - 2 * transitionDuration);
    return () => clearTimeout(timeout);
  }, [props.duration]);

  return (
    <div ref={selfRef} className={`${styles.toast} ${show ? styles.show : null}`}>
      {props.text}
    </div>
  );
}