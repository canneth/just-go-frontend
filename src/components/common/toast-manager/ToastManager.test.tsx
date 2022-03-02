
import { act, render, screen } from '@testing-library/react';
import ToastManager, { toast, toastStore } from './ToastManager';

describe('ToastManager', () => {
  afterEach(() => {
    // Cleanups
    toastStore.reset();
    jest.restoreAllMocks();
  });
  describe('on render', () => {
    it('renders a single (ordered) list element', () => {
      render(<ToastManager defaultToastDuration={10} />);
      screen.getByRole('list');
    });
  });
  describe('on toastStore changes', () => {
    it('renders as many toasts as there are in the toastStore', () => {
      render(<ToastManager defaultToastDuration={10} />);
      const toastManagerEl = screen.getByRole('list');
      expect(toastManagerEl.childNodes).toHaveLength(0);
      const toastList = [
        { id: '1', text: 'browned baguette', duration: 10 },
        { id: '2', text: 'crisp ciabatta', duration: 12 },
        { id: '3', text: 'fluffy focaccia', duration: 15 }
      ];
      toastList.forEach(x => toastStore.addNewToast(x));
      expect(toastManagerEl.childNodes).toHaveLength(toastList.length);
    });
    it('uses defaultToastDuration for toasts whose durations are undefined', () => {
      jest.useFakeTimers();
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
      const defaultDuration = 10;
      render(<ToastManager defaultToastDuration={defaultDuration} />);
      const toastList = [
        { id: '1', text: 'browned baguette' },
        { id: '2', text: 'crisp ciabatta', duration: 12 },
        { id: '3', text: 'fluffy focaccia', duration: 15 }
      ];
      toastList.forEach(x => toastStore.addNewToast(x));
      act(() => {
        jest.runAllTimers();
      });
      expect(setTimeoutSpy).toHaveBeenCalledTimes(toastList.length * 2);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), defaultDuration);
    });
  });
});

describe('toast(text: string, duration?: number)', () => {
  it('adds the toast to the toastStore', () => {
    const prevToastList = [...toastStore.getToastList()];
    const newToast = {
      id: expect.any(String),
      text: 'charred croissant',
      duration: 500
    }
    toast(newToast.text, newToast.duration);
    expect(toastStore.getToastList()).toHaveLength(prevToastList.length + 1);
    expect(toastStore.getToastList()).toStrictEqual([...prevToastList, newToast]);
  });
  it('triggers the rendering of a new Toast with the provided text content', () => {
    render(<ToastManager defaultToastDuration={10} />);
    const newToast = {
      id: expect.any(String),
      text: 'pliable pita',
      duration: 500
    }
    expect(screen.queryByText(newToast.text)).not.toBeInTheDocument();
    toast(newToast.text, newToast.duration);
    screen.getByText(newToast.text);
  });
});