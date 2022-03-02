
import { makeAutoObservable } from 'mobx';
import arrayFilterInPlace from '@/utils/arrayFilterInPlace';

type ToastId = string;

interface ToastData {
  id: ToastId;
  text: string;
  duration?: number; // in ms.
}

// Store
export default class ToastStore {
  toastList: Array<ToastData> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getToastList() {
    return this.toastList;
  }
  getToastById(toastId: ToastId) {
    return this.toastList.find(({ id, ..._ }) => toastId === id);
  }
  hasToastId(toastId: ToastId) {
    return this.toastList.findIndex(({ id, ..._ }) => toastId === id) !== -1;
  }
  addNewToast(toastData: ToastData) {
    if (this.hasToastId(toastData.id)) this.clearToastById(toastData.id);
    this.toastList.push(toastData);
  }
  clearToastById(toastId: ToastId) {
    if (!this.hasToastId(toastId)) return;
    arrayFilterInPlace(this.toastList, (toastData) => toastData.id !== toastId);
  }
  clearOldestToast() {
    return this.toastList.shift();
  }
  reset() {
    this.toastList = [];
  }
}