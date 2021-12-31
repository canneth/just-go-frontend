
import axios from 'axios';
import { useState, useEffect, useRef, MouseEvent } from 'react';
import ScrollableList, { ScrollableListImperativeRef } from '@/components/place-card/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { PlaceData } from '@/models/place-data';
import styles from './search.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollableListRef = useRef<ScrollableListImperativeRef>(null);
  const [lastSearchInput, setLastSearchInput] = useState<string>('');
  const [placeList, setPlaceList] = useState<PlaceData[]>([]);

  const intersectionObserverRef = useRef<IntersectionObserver>();

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectionObserverRef.current!.unobserve(entry.target);
          const formattedParamsString = encodeURIComponent(lastSearchInput);
          const exclude_place_ids = placeList.map(x => x.place_id).join(',');
          (async function () {
            const searchResults = (await axios.get<PlaceData[]>(
              `https://nominatim.openstreetmap.org/search?
                format=json
                &countrycodes=sg
                &addressdetails=1
                &extratags=1
                &limit=10
                &exclude_place_ids=${exclude_place_ids}
                &q=${formattedParamsString}
              `.replaceAll(/\s/g, '')
            )).data;
            if (searchResults.length <= 0) return;
            setPlaceList(placeList => [...placeList, ...searchResults]);
          })();
        }
      });
    }
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersection,
      { root: scrollableListRef.current!.viewportElement }
    );
  }, [lastSearchInput, placeList]);

  useEffect(() => {
    const intersectionObserver = intersectionObserverRef.current!;
    const newListOfElements = scrollableListRef.current!.listElement.children;
    if (newListOfElements.length <= 0) return;
    const newLastElement = newListOfElements[newListOfElements.length - 1];
    intersectionObserver.observe(newLastElement);
  }, [placeList]);

  function clickHandlerSearch(_: MouseEvent) {
    // TODO: Implement a call to own backend to execute the actual API call.
    const rawParamsString = searchInputRef.current!.value;
    if (!rawParamsString) return;
    // if (rawParamsString === lastSearchInput) return;
    setLastSearchInput(rawParamsString);
    const formattedParamsString = encodeURIComponent(rawParamsString);
    (async function () {
      const searchResults = (await axios.get<PlaceData[]>(
        `https://nominatim.openstreetmap.org/search?
          format=json
          &countrycodes=sg
          &addressdetails=1
          &extratags=1
          &limit=10
          &q=${formattedParamsString}
        `.replaceAll(/\s/g, '')
      )).data;
      if (searchResults.length <= 0) return;
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
      <ScrollableList ref={scrollableListRef} placeList={placeList} />
    </div>
  );
}