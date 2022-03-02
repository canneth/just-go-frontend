
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import { v4 as uuidv4 } from 'uuid';
import Toast from './toast/Toast';
import ToastStore from './ToastStore';
import styles from './ToastManager.module.css';

export const toastStore = new ToastStore;

export function toast(text: string, duration?: number) {
  toastStore.addNewToast({ id: uuidv4(), text, duration });
}

interface ToastManagerProps {
  defaultToastDuration: number;
  maxConcurrentToastCount?: number;
}


const ToastManager = observer((props: ToastManagerProps) => {

  autorun(() => {
    if (!props.maxConcurrentToastCount) return;
    if (toastStore.getToastList().length <= props.maxConcurrentToastCount) return;
    toastStore.clearOldestToast();
  });

  return (
    <div className={styles.overallContainer}>
      <div className={styles.toastContainer}>
        {
          toastStore.getToastList().map(toastData => {
            return (
              <Toast
                key={toastData.id}
                id={toastData.id}
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