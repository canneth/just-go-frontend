
import { action, autorun } from 'mobx';
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

export default observer(function ToastManager(props: ToastManagerProps) {

  autorun(() => {
    if (!props.maxConcurrentToastCount) return;
    if (toastStore.getToastList().length <= props.maxConcurrentToastCount) return;
    action(() => toastStore.clearOldestToast())();
  });

  return (
    <ol className={styles.toastContainer}>
      {
        toastStore.getToastList().map(toastData => {
          return (
            <li key={toastData.id}>
              <Toast
                id={toastData.id}
                text={toastData.text}
                duration={toastData.duration ? toastData.duration : props.defaultToastDuration}
              />
            </li>
          );
        })
      }
    </ol>
  );
});