
import Toast from './toast/Toast';
import { addNewToast, clearOldestToast, clearToastById, toastList } from './ToastStore';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import styles from './ToastManager.module.css';

interface ToastManagerProps {
  defaultToastDuration: number;
  maxConcurrentToastCount?: number;
}

export function toast(text: string, duration?: number) {
  addNewToast({ text, duration });
}

const ToastManager = observer((props: ToastManagerProps) => {

  autorun(() => {
    if (!props.maxConcurrentToastCount) return;
    if (toastList.size <= props.maxConcurrentToastCount) return;
    clearOldestToast();
  });

  return (
    <div className={styles.overallContainer}>
      <div className={styles.toastContainer}>
        {
          Array.from(toastList).map(([toastKey, toastData]) => {
            return (
              <Toast
                key={toastKey}
                id={toastKey}
                text={toastData.text}
                duration={toastData.duration ? toastData.duration : props.defaultToastDuration}
              />
            );
          })
        }
      </div>
    </div>
  );
});

export default ToastManager;