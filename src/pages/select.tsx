
import { MouseEvent, useRef, useState } from 'react';
import Toast from '@/components/common/toast-manager/toast/Toast';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './select.module.css';

export default function SelectPage() {

  const selfRef = usePageFadeInOut();
  const clickHandlerRevisit = usePageChangeClickHandler('/revisit');
  const clickHandlerRecommendations = usePageChangeClickHandler('/recommendations');
  const clickHandlerSearch = usePageChangeClickHandler('/search');

  const [showToast, setShowToast] = useState<boolean>(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout>();
  const toastDuration = 2000;

  function clickHandlerWithNotImplementedToast(_: MouseEvent) {
    if (showToast) return;
    const existingTimeout = toastTimeoutRef.current;
    if (existingTimeout) clearTimeout(existingTimeout);
    setShowToast(true);
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), toastDuration);
  }

  return (
    <>
      <div ref={selfRef} className={styles.overallContainer}>
        <h1 className={styles.prompt}>What would you like to do?</h1>
        <ol className={styles.optionsList}>
          <li className={styles.option} onClick={clickHandlerWithNotImplementedToast}><a>I want to revisit a favourite spot...</a></li>
          <p className={styles.divider}>or</p>
          <li className={styles.option} onClick={clickHandlerWithNotImplementedToast}><a>I&apos;m looking for a good place...</a></li>
          <p className={styles.divider}>or</p>
          <li className={styles.option} onClick={clickHandlerSearch}><a>I have a place in mind!</a></li>
        </ol>
      </div>
      {showToast && <Toast text='Sorry! This feature has yet to be implemented. ):' duration={toastDuration} />}
    </>
  );
}