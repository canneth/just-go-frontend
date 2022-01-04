
import axios from 'axios';
import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from 'react';
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
    // Register new intersection observer with the updated intersection handler.
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersection,
      { root: scrollableListRef.current!.viewportElement }
    );
    // Set intersection observer to observe the new last element.
    const intersectionObserver = intersectionObserverRef.current!;
    const newListOfElements = scrollableListRef.current!.listElement.children;
    if (newListOfElements.length <= 0) return;
    const newLastElement = newListOfElements[newListOfElements.length - 1];
    intersectionObserver.observe(newLastElement);

    return () => intersectionObserverRef.current?.disconnect(); // Cleanup the old intersection observer.
  }, [lastSearchInput, placeList]);

  function formattedSearch(rawSearchString: string) {
    if (rawSearchString === lastSearchInput) return; // Prevent repeated idempotent API calls.
    if (!rawSearchString) setPlaceList([]); // Prevent pointless API calls.
    setLastSearchInput(rawSearchString);
    const formattedParamsString = encodeURIComponent(rawSearchString);
    // Make the API call to fetch search results.
    // TODO: Implement a call to own backend to execute the actual API call.
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
      // If there are no additional search results to display, no-op and return.
      if (searchResults.length <= 0 && rawSearchString === lastSearchInput) return;
      // Update search results to be displayed.
      setPlaceList(searchResults);
    })();
  }

  function clickHandlerSearchButton(_: MouseEvent) {
    formattedSearch(searchInputRef.current!.value);
  }

  function keyDownHandlerSearchInput(event: KeyboardEvent) {
    if (event.code === 'Enter') formattedSearch(searchInputRef.current!.value);
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
            onKeyDown={keyDownHandlerSearchInput}
          />
          <button className={styles.searchButton} onClick={clickHandlerSearchButton}>
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