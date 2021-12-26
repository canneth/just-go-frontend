
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './revisit.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>I've changed my mind, take me back!</a>
        <div className={styles.choiceSentence}>
          <p className={styles.prefix}>I want to revisit a favourite spot to</p>
          <select className={styles.selectBox}>
            <option value='option 1'>chill</option>
            <option>jog</option>
            <option>work</option>
            <option>meet up</option>
            <option>dine</option>
            <option>snack</option>
            <option>drink</option>
            <option>chill</option>
          </select>
        </div>
      </header>
      <div className={styles.cardScrollViewport}>
        Hi I am a card scroll viewport
      </div>
    </div>
  );
}