
import { useState, useEffect, ChangeEvent } from 'react';
import PlaceListViewport from '@/components/place-card-scroll-viewport/PlaceListViewport';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { ACTIVITIES } from '@/globals/constants';
import { PlaceData } from '@/models/place-data';
import styles from './revisit.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  const [favouritesList, setFavouritesList] = useState<PlaceData[]>([]);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const tag = e.currentTarget.value;
    // TODO: Implement actual fetching of data from API.
  }

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>
          I&apos;ve changed my mind, take me back!
        </a>
        <div className={styles.choiceSentence}>
          <p className={styles.prefix}>I want to revisit a favourite spot to</p>
          <select className={styles.selectBox} onChange={handleChange}>
            {
              ACTIVITIES.map((x, i) => (<option key={i} value={x}>{x}</option>))
            }
          </select>
        </div>
      </header>
      <PlaceListViewport
        className={styles.cardScrollViewport}
        placeList={favouritesList}
      />
    </div>
  );
}