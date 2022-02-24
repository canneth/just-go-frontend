
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

interface ToastProps {
  text: string;
  trigger: boolean;
}

export default function Toast(props: ToastProps) {

  const selfRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [documentReady, setDocumentReady] = useState<boolean>();

  useEffect(() => {
    setDocumentReady(true);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (!props.trigger) {
      setShow(false);
    } else {
      setShow(true);
      timeout = setTimeout(() => setShow(false), 2000);
    }
    return () => { timeout && clearTimeout(timeout) };
  }, [props.trigger]);

  return documentReady ? createPortal(
    <>
      {
        show &&
        <div ref={selfRef} className={styles.toast}>
          {props.text}
        </div>
      }
    </>,
    document.getElementById('toast-container')!
  ) : null;
}