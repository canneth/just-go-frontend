
import ScrollableList from '@/components/place-card/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './search.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>I&apos;ve changed my mind, take me back!</a>
        <p className={styles.prefix}>I have a place in mind! I think it was...</p>
        <div className={styles.searchBoxContainer}>
          <input type='text' className={styles.searchBox} placeholder='...' />
          <button className={styles.searchButton}>
            <span
              className='iconify'
              data-icon='akar-icons:search'
              data-width='auto'
              data-height='100%'
            />
          </button>
        </div>
      </header>
      <ScrollableList placeList={[]} />
    </div>
  );
}