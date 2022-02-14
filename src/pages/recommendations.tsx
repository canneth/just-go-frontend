
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { ACTIVITIES } from '@/globals/constants';
import styles from './recommendations.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>I&apos;ve changed my mind, take me back!</a>
        <div className={styles.choiceSentence}>
          <p className={styles.prefix}>I&apos;m looking for a good place to</p>
          <select className={styles.selectBox}>
            {
              ACTIVITIES.map((x, i) => (<option key={i} value={x}>{x}</option>))
            }
          </select>
        </div>
      </header>
    </div>
  );
}