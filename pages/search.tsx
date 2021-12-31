
import ScrollableList from '@/components/place-card/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './revisit.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>I&apos;ve changed my mind, take me back!</a>
        <p className={styles.prefix}>I have a place in mind! I think it was...</p>
        <input type='text' className={styles.searchBox} />
      </header>
      <ScrollableList placeList={[]} />
    </div>
  );
}