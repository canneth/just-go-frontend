
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

interface ToastProps {
  text: string;
  duration: number; // in ms.
}

export default function Toast(props: ToastProps) {

  const selfRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(true);
  const [documentReady, setDocumentReady] = useState<boolean>();

  const transitionDuration = 100; // in ms. Ensure this corresponds to counterpart in css.

  useEffect(() => {
    setDocumentReady(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, props.duration - 2 * transitionDuration);
    return () => clearTimeout(timeout);
  }, [props.duration]);

  return documentReady ? createPortal(
    <div ref={selfRef} className={`${styles.toast} ${show ? styles.show : null}`}>
      {props.text}
    </div>,
    document.getElementById('toast-container')!
  ) : null;
}