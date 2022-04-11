
import axios from 'axios';
import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from 'react';
import ScrollableList from '@/components/scrollable-list/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import usePromise from '@/hooks/usePromise';
import PlaceData from '@/models/PlaceData';
import { weatherStore } from '@/pages/_app';
import styles from './search.module.css';

export default function SearchPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollableListRef = useRef<HTMLOListElement | null>(null);
  const [lastSearchInput, setLastSearchInput] = useState<string>('');
  const [placeList, setPlaceList] = useState<PlaceData[]>([]);
  const searchPromise = usePromise((formattedParamsString: string) => {
    return axios.get<PlaceData[]>(
      `https://nominatim.openstreetmap.org/search?
      format=json
      &countrycodes=sg
      &addressdetails=1
      &extratags=1
      &limit=10
      &q=${formattedParamsString}
    `.replaceAll(/\s/g, '')
    );
  });

  const intersectionObserverRef = useRef<IntersectionObserver>();

  useEffect(() => {
    weatherStore.updateWeatherData();
  }, []);

  useEffect(() => {
    setPlaceList(searchPromise.resolvedValue ? searchPromise.resolvedValue.data : []);
  }, [searchPromise.resolvedValue]);

  useEffect(() => {
    const scrollableListEl = scrollableListRef.current;
    if (!scrollableListEl) return;
    if (placeList.length <= 0) return;
    if (searchInputRef.current!.value !== lastSearchInput) return;
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectionObserverRef.current!.unobserve(entry.target);
          const formattedParamsString = encodeURIComponent(lastSearchInput);
          const placeIdsToExclude = placeList.map(x => x.place_id).join(',');
          (async function () {
            const searchResults = (await axios.get<PlaceData[]>(
              `https://nominatim.openstreetmap.org/search?
                  format=json
                  &countrycodes=sg
                  &addressdetails=1
                  &extratags=1
                  &limit=10
                  &exclude_place_ids=${placeIdsToExclude}
                  &q=${formattedParamsString}
                `.replaceAll(/\s/g, '')
            )).data;
            if (searchResults.length <= 0) return;
            setPlaceList(currPlaceList => {
              // Check if placeList is up-to-date.
              // Append search results to placeList only if so.
              const currPlaceIdList = currPlaceList.map(placeData => placeData.osm_id);
              const placeIdList = placeList.map(placeData => placeData.osm_id);
              if (currPlaceIdList.every((placeId, i) => placeIdList[i] && placeId === placeIdList[i])) return [...currPlaceList, ...searchResults];
              return currPlaceList;
            });
          })();
        }
      });
    }
    // Register new intersection observer with the updated intersection handler.
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersection,
      { root: scrollableListEl }
    );
    // Set intersection observer to observe the new last element.
    const intersectionObserver = intersectionObserverRef.current!;
    const newListOfElements = scrollableListEl.children;
    if (newListOfElements.length <= 0) return;
    const newLastElement = newListOfElements[newListOfElements.length - 1];
    intersectionObserver.observe(newLastElement);

    return () => intersectionObserverRef.current?.disconnect(); // Cleanup the old intersection observer.
  }, [lastSearchInput, placeList, searchPromise]);


  function formattedSearch(rawSearchString: string) {
    if (rawSearchString === lastSearchInput) return; // Prevent repeated idempotent API calls.
    if (!rawSearchString) setPlaceList([]); // Prevent pointless API calls.
    setLastSearchInput(rawSearchString);
    const formattedParamsString = encodeURIComponent(rawSearchString);
    searchPromise.run(formattedParamsString);
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
      {
        searchPromise.isLoading || searchPromise.error
          ?
          <div className={styles.statusTextContainer}>
            <p className={styles.statusText}>
              {
                searchPromise.isLoading
                  ? 'Loading...'
                  : 'Sorry, the API may be unavailable at the moment!'
              }
            </p>
          </div>
          :
          <ScrollableList
            ref={scrollableListRef}
            placeList={placeList}
            withWeather={true}
          />
      }
    </div>
  );
}