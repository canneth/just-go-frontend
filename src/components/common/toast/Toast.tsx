
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

interface ToastProps {
  text: string;
  show: boolean;
}

export default function Toast(props: ToastProps) {

  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toastJsx = (
    <div className={styles.overallContainer}>
      <div className={`${styles.toast} ${props.show ? styles.show : null}`}>
        {props.text}
      </div>
    </div>
  );

  return mounted ? createPortal(toastJsx, document.getElementById('main')!) : null;
}