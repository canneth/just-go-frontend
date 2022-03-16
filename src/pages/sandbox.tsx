
import { MouseEvent } from 'react';
import Button from '@/components/common/button/Button';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './sandbox.module.css';
import usePromise from '@/hooks/usePromise';

export default function Sandbox() {

  const selfRef = usePageFadeInOut();

  const { isLoading, data, error, run } = usePromise(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('This is the data!');
      }, 3000);
    });
  });

  function clickHandler(e: MouseEvent) {

  }

  return (
    <>
      <div ref={selfRef} className={styles.overallContainer}>
        <Button text={`Run async callback!`} clickHandler={run} />
        <p>Loading state: {`${isLoading}`}</p>
        <p>Error: {error ? 'ERROR OCCURRED!!' : 'no error'}</p>
        <p>Data: {data ? JSON.stringify(data) : 'no data'}</p>
      </div>
    </>
  );
}