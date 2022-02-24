
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import Toast from '@/components/common/toast/Toast';
import styles from './Test.module.css';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';

export default function Test() {

  const selfRef = usePageFadeInOut();

  const [showToast1, setShowToast1] = useState<boolean>(false);
  const [showToast2, setShowToast2] = useState<boolean>(false);
  const [showToast3, setShowToast3] = useState<boolean>(false);

  return (
    <>
      <div ref={selfRef} className={styles.overallContainer}>
        <Button text={`Toggle toast 1`} clickHandler={() => setShowToast1(trigger => !trigger)} />
        <Button text={`Toggle toast 2`} clickHandler={() => setShowToast2(trigger => !trigger)} />
        <Button text={`Toggle toast 3`} clickHandler={() => setShowToast3(trigger => !trigger)} />
      </div>
      <Toast text='Toast 1' trigger={showToast1} />
      <Toast text='Toast 2' trigger={showToast2} />
      <Toast text='Toast 3' trigger={showToast3} />
    </>
  );
}