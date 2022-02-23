
import styles from './Toast.module.css';

interface ToastProps {
  text: string;
  show: boolean;
}

export default function Toast(props: ToastProps) {
  return (
    <div className={styles.overallContainer}>
      <div className={`${styles.toast} ${props.show ? styles.show : null}`}>
        {props.text}
      </div>
    </div>
  );
}