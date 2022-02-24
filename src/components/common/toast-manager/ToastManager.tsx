
import styles from './ToastManager.module.css';
import Toast from './toast/Toast';

export default function ToastManager() {
  return (
    <div className={styles.overallContainer}>
      <div id='toast-container' className={styles.toastContainer}>
        {/* This is where toasts will be portal'd in */}
        {/* <Toast text='Toast 1' trigger={true} />
        <Toast text='Toast 2 I am a longer toast' trigger={true} />
        <Toast text='Toast 3' trigger={true} /> */}
      </div>
    </div>
  );
}