
import ToastStore from './ToastStore';

describe('ToastStore', () => {
  describe('each instance', () => {
    it('starts with an empty toasts collection', () => {
      const toastStore = new ToastStore;
      expect(toastStore.getToastList()).toHaveLength(0);
    });
  });
  describe('getToastList()', () => {
    it('returns an array representing the toasts collection', () => {
      const toastStore = new ToastStore;
      expect(toastStore.getToastList()).toBeInstanceOf(Array);
    });
  });
  describe('getToastById(toastId: ToastId)', () => {
    it('returns undefined if the toast does not exist', () => {
      const toastStore = new ToastStore;
      expect(toastStore.getToastById('1')).toBeUndefined();
    });
    it('returns the correct toastData if the toast exists', () => {
      const toastStore = new ToastStore;
      const toastId = '1';
      const toastData = { id: toastId, text: '', duration: 10 };
      toastStore.addNewToast(toastData);
      expect(toastStore.getToastById(toastId)).toStrictEqual(toastData);
    });
  });
  describe('hasToastId(toastId: ToastId)', () => {
    it('returns true if toastId is in the toasts collection', () => {
      const toastStore = new ToastStore;
      const toastIdToCheck = '1';
      toastStore.addNewToast({ id: toastIdToCheck, text: '', duration: 1 });
      expect(toastStore.hasToastId(toastIdToCheck)).toBe(true);
    });
    it('returns false if toastId is not in the toasts collection', () => {
      const toastStore = new ToastStore;
      const toastIdToCheck = '1';
      expect(toastStore.hasToastId(toastIdToCheck)).toBe(false);
    });
  });
  describe('addNewToast(toastData: ToastData)', () => {
    it('adds the toast to the toast collection', () => {
      const toastStore = new ToastStore;
      const toastId = '1';
      const toast = { id: toastId, text: 'New text', duration: 100 };
      toastStore.addNewToast(toast);
      expect(toastStore.getToastById(toastId)).toStrictEqual(toast);
    });
    it('if a toast with the same toastId already exists, replaces it', () => {
      const toastStore = new ToastStore;
      const toastId = '1';
      const existingToast = { id: toastId, text: 'Existing text', duration: 10 };
      toastStore.addNewToast(existingToast);
      const newToast = { id: toastId, text: 'New text', duration: 100 };
      toastStore.addNewToast(newToast);
      expect(toastStore.getToastById(toastId)).not.toStrictEqual(existingToast);
      expect(toastStore.getToastById(toastId)).toStrictEqual(newToast);
    });
  });
  describe('clearToastById(toastId: ToastId)', () => {
    it('removes the correct toast if the toast exists', () => {
      const toastStore = new ToastStore;
      const toastIdToClear = '2';
      const toastList = [
        { id: '1', text: 'Hello', duration: 10 },
        { id: toastIdToClear, text: 'Stuff', duration: 12 },
        { id: '3', text: 'More stuff', duration: 15 }
      ];
      toastList.forEach(x => toastStore.addNewToast(x));
      toastStore.clearToastById(toastIdToClear);
      expect(toastStore.getToastById(toastIdToClear)).toBeUndefined();
      expect(toastStore.getToastList()).toHaveLength(toastList.length - 1);
    });
    it('does not change toasts collection if the toast does not exist', () => {
      const toastStore = new ToastStore;
      const toastIdToClear = '1';
      const toastList = [
        { id: '2', text: 'Stuff', duration: 12 },
        { id: '3', text: 'More stuff', duration: 15 }
      ];
      toastList.forEach(x => toastStore.addNewToast(x));
      toastStore.clearToastById(toastIdToClear);
      expect(toastStore.getToastList()).toStrictEqual(toastList);
    });
  });
  describe('clearOldestToast()', () => {
    it('does not change toasts collection if it is empty', () => {
      const toastStore = new ToastStore;
      toastStore.clearOldestToast();
      expect(toastStore.getToastList()).toStrictEqual([]);
    });
    it('removes only the toast at index 0 (which is the oldest)', () => {
      const toastStore = new ToastStore;
      const toastExpectedToBeCleared = { id: '1', text: 'Hello', duration: 10 };
      const toastList = [
        toastExpectedToBeCleared,
        { id: '2', text: 'Stuff', duration: 12 },
        { id: '3', text: 'More stuff', duration: 15 }
      ];
      toastList.forEach(x => toastStore.addNewToast(x));
      toastStore.clearOldestToast();
      expect(toastStore.getToastById(toastExpectedToBeCleared.id)).toBeUndefined();
      expect(toastStore.getToastList()).toHaveLength(toastList.length - 1);
    });
  });
});