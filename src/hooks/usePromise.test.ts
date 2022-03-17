
import usePromise from './usePromise';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';

describe('usePromise(promiseCreator: (...args) => Promise)', () => {
  describe('return properties', () => {
    describe('isLoading', () => {
      it('is initially false', () => {
        function promiseCreator() {
          return new Promise((res, rej) => {
            setTimeout(() => res('Success!'), 0);
          });
        }
        const { result } = renderHook(() => usePromise(promiseCreator));
        expect(result.current.isLoading).toBe(false);
      });
    });
    describe('error', () => {
      it('is initially undefined', () => {
        function promiseCreator() {
          return new Promise((res, rej) => {
            setTimeout(() => res('Success!'), 0);
          });
        }
        const { result } = renderHook(() => usePromise(promiseCreator));
        expect(result.current.error).toBeUndefined();
      });
    });
    describe('resolvedValue', () => {
      it('is initially undefined', () => {
        function promiseCreator() {
          return new Promise((res, rej) => {
            setTimeout(() => res('Success!'), 0);
          });
        }
        const { result } = renderHook(() => usePromise(promiseCreator));
        expect(result.current.resolvedValue).toBeUndefined();
      });
    });
    describe('run', () => {
      it('is a function', () => {
        function promiseCreator() {
          return new Promise((res, rej) => {
            setTimeout(() => res('Success!'), 0);
          });
        }
        const { result } = renderHook(() => usePromise(promiseCreator));
        expect(result.current.run).toBeInstanceOf(Function);
      });
      describe('on invocation (and before promise returns)', () => {
        it('calls the provided promiseCreator callback exactly once', () => {
          const promiseCreator = jest.fn(() => {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          });
          const { result } = renderHook(() => usePromise(promiseCreator));
          act(() => { result.current.run(); });
          expect(promiseCreator).toHaveBeenCalledTimes(1);
        });
        it('calls the provided promiseCreator with the arguments provided', () => {
          const promiseCreator = jest.fn((...args: unknown[]) => {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          });
          const args = [5, 'some string', { someProp: 'am some prop' }];
          const { result } = renderHook(() => usePromise(promiseCreator));
          act(() => { result.current.run(...args); });
          expect(promiseCreator).toHaveBeenCalledWith(...args);
        });
        it('isLoading is set to true', () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          act(() => { result.current.run(); });
          expect(result.current.isLoading).toBe(true);
        });
        it('error is set to undefined', async () => {
          type ReturnStatus = 'reject' | 'fulfil';
          function promiseCreator(returnStatus: ReturnStatus) {
            return new Promise((res, rej) => {
              setTimeout(() => {
                switch (returnStatus) {
                  case 'reject': rej('Failure!');
                  case 'fulfil': res('Success!');
                }
              }, 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run('reject'));
          expect(result.current.error).toBeDefined();
          act(() => { result.current.run('fulfil') });
          expect(result.current.error).toBeUndefined();
        });
        it('resolvedValue is set to undefined', async () => {
          type ReturnStatus = 'reject' | 'fulfil';
          function promiseCreator(returnStatus: ReturnStatus) {
            return new Promise((res, rej) => {
              setTimeout(() => {
                switch (returnStatus) {
                  case 'reject': rej('Failure!');
                  case 'fulfil': res('Success!');
                }
              }, 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run('fulfil'));
          expect(result.current.resolvedValue).toBeDefined();
          act(() => { result.current.run('reject') });
          expect(result.current.resolvedValue).toBeUndefined();
        });
      });
      describe('when promise resolves successfully', () => {
        it('isLoading is set to false', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run());
          expect(result.current.isLoading).toBe(false);
        });
        it('error remains undefined', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run());
          expect(result.current.error).toBeUndefined();
        });
        it('resolvedValue is set to the resolved value of the promise', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => res('Success!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run());
          expect(result.current.resolvedValue).toStrictEqual(await promiseCreator());
        });
      });
      describe('when promise rejects', () => {
        it('isLoading is set to false', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => rej('Failure!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run());
          expect(result.current.isLoading).toBe(false);
        });
        it('error is set to the rejection value of the promise', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => rej('Failure!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          try {
            await act(async () => await result.current.run());
          } catch (error) {
            expect(result.current.error).toStrictEqual(error);
          }
        });
        it('resolvedValue remains undefined', async () => {
          function promiseCreator() {
            return new Promise((res, rej) => {
              setTimeout(() => rej('Failure!'), 0);
            });
          }
          const { result } = renderHook(() => usePromise(promiseCreator));
          await act(async () => await result.current.run());
          expect(result.current.resolvedValue).toBeUndefined();
        });
      });
    });
  });
});