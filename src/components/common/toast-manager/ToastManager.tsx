
import styles from './ToastManager.module.css';

export default function ToastManager() {
  return (
    <div className={styles.overallContainer}>
      <div id='toast-container' className={styles.toastContainer}>
        {/* This is where toasts will be portal'd in */}
      </div>
    </div>
  );
}