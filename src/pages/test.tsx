
import Button from '@/components/common/button/Button';
import styles from './Test.module.css';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import { toast } from '@/components/common/toast-manager/ToastManager';

export default function Test() {

  const selfRef = usePageFadeInOut();

  return (
    <>
      <div ref={selfRef} className={styles.overallContainer}>
        <Button text={`Trigger toast`} clickHandler={() => toast('Hello am toast!')} />
      </div>
    </>
  );
}