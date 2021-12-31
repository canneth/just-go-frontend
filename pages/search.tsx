
import axios from 'axios';
import { useState, useRef, MouseEvent } from 'react';
import ScrollableList from '@/components/place-card/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { PlaceData } from '@/models/place-data';
import styles from './search.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [placeList, setPlaceList] = useState<PlaceData[]>([]);

  function clickHandlerSearch(e: MouseEvent) {
    // TODO: Implement a call to own backend to execute the actual API call.
    const rawParamsString = searchInputRef.current!.value;
    if (!rawParamsString) return;
    const formattedParamsString = encodeURIComponent(rawParamsString);
    console.log(formattedParamsString);
    (async function () {
      const searchResults = (await axios.get<PlaceData[]>(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=sg&addressdetails=1&extratags=1&q=${formattedParamsString}`)).data;
      setPlaceList(searchResults);
    })();
  }

  return (
    <div ref={selfRef} className={styles.overallContainer}>
      <header className={styles.header}>
        <a className={styles.returnText} onClick={clickHandlerBack}>
          I&apos;ve changed my mind, take me back!
        </a>
        <p className={styles.prefix}>I have a place in mind! I think it was...</p>
        <div className={styles.searchBoxContainer}>
          <input
            ref={searchInputRef}
            type='search'
            className={styles.searchBox}
            placeholder='...'
            aria-label="Search for a place"
          />
          <button className={styles.searchButton} onClick={clickHandlerSearch}>
            <span
              className='iconify'
              data-icon='akar-icons:search'
              data-width='auto'
              data-height='100%'
            />
          </button>
        </div>
      </header>
      <ScrollableList placeList={placeList} />
    </div>
  );
}