
import { observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export type ToastId = string;

interface ToastData {
  text: string;
  duration?: number; // in ms.
}

// Store
export const toastList = observable<ToastId, ToastData>(new Map<ToastId, ToastData>());

// Actions
export const addNewToast = action((toastData: ToastData) => {
  const newToastId = uuidv4();
  toastList.set(newToastId, toastData);
  return newToastId;
});
export const clearToastById = action((id: ToastId) => toastList.delete(id));
export const clearOldestToast = action(() => toastList.delete(Array.from(toastList.keys())[0]));