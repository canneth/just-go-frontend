
import { act, render, screen } from '@testing-library/react';
import Toast from './Toast';
import { toastStore } from '../ToastManager';
import styles from './Toast.module.css';

describe('Toast', () => {
  afterEach(() => {
    // Cleanups
    jest.useRealTimers();
    jest.restoreAllMocks();
  });
  describe('on render', () => {
    it('renders a single element with the provided text content', () => {
      const toastText = 'Is toast';
      render(<Toast id='' text={toastText} duration={1} />);
      screen.getByText(toastText);
    });
    it('has the styles.show class', () => {
      const toastText = 'Is toast';
      render(<Toast id='' text={toastText} duration={1} />);
      const toastEl = screen.getByText(toastText);
      expect(toastEl).toHaveClass(styles.show);
    });
    it('removes the styles.show class after the provided duration', () => {
      jest.useFakeTimers();
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
      const toastText = 'Is toast';
      const duration = 5000;
      render(<Toast id='' text={toastText} duration={duration} />);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), duration);
      act(() => {
        jest.runAllTimers();
      });
      const toastEl = screen.getByText(toastText);
      expect(toastEl).not.toHaveClass(styles.show);
    });
    it('calls toastStore.clearToastById() to clear its corresponding entry after the provided duration', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      const clearToastByIdSpy = jest.spyOn(toastStore, 'clearToastById');
      const toast = { id: '1', text: 'Toasty', duration: 5 };
      render(<Toast {...toast} />);
      act(() => {
        jest.runAllTimers();
      });
      expect(clearToastByIdSpy).toHaveBeenCalledWith(toast.id);
    });
  });
});