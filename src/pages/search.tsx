
import axios from 'axios';
import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from 'react';
import ScrollableList, { ScrollableListImperativeRef } from '@/components/scrollable-list/ScrollableList';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import styles from './search.module.css';

export default function RevisitPage() {
  const selfRef = usePageFadeInOut();
  const clickHandlerBack = usePageChangeClickHandler('/select');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollableListRef = useRef<ScrollableListImperativeRef>(null);
  const [lastSearchInput, setLastSearchInput] = useState<string>('');
  const [placeList, setPlaceList] = useState<PlaceData[]>([]);
  const [pastWeather, setPastWeather] = useState<ForecastAPIResponse | undefined>(undefined);
  const [currWeather, setCurrWeather] = useState<ForecastAPIResponse | undefined>(undefined);
  const [nextWeather, setNextWeather] = useState<ForecastAPIResponse | undefined>(undefined);

  const intersectionObserverRef = useRef<IntersectionObserver>();

  useEffect(() => {
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

  useEffect(() => {
    if (pastWeather && currWeather && nextWeather) return;
    (async function () {
      // Grab and format current date-times for querying weather API.
      function dateToQueryString(date: Date) {
        return encodeURIComponent(`
            ${date.getFullYear()}
            -${`${date.getMonth() + 1}`.padStart(2, '0')}
            -${`${date.getDate()}`.padStart(2, '0')}
            T${`${date.getHours()}`.padStart(2, '0')}
            :${`${date.getMinutes()}`.padStart(2, '0')}
            :00
          `.replaceAll(/\s/g, ''));
      }
      const now = new Date();
      const nowDateQueryString = dateToQueryString(now);
      now.setHours(now.getHours() - 2);
      const pastDateQueryString = dateToQueryString(now);
      now.setHours(now.getHours() - 2);
      const furtherPastDateQueryString = dateToQueryString(now);
      // Make the API call to fetch weather forecast for 2 hours from now.
      const forecastedWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${nowDateQueryString}
          `.replaceAll(/\s/g, '')
      )).data;
      // Make the API call to fetch current weather.
      const currWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${pastDateQueryString}
          `.replaceAll(/\s/g, '')
      )).data;
      // Make the API call to fetch weather for 2 hours ago.
      const pastWeather = (await axios.get<ForecastAPIResponse>(
        `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?
            date_time=${furtherPastDateQueryString}
          `.replaceAll(/\s/g, '')
      )).data;
      // Update weather forecast and current weather.
      setNextWeather(forecastedWeather);
      setCurrWeather(currWeather);
      setPastWeather(pastWeather);
    })();
  }, [pastWeather, currWeather, nextWeather]);

  function formattedSearch(rawSearchString: string) {
    if (rawSearchString === lastSearchInput) return; // Prevent repeated idempotent API calls.
    if (!rawSearchString) setPlaceList([]); // Prevent pointless API calls.
    setLastSearchInput(rawSearchString);
    const formattedParamsString = encodeURIComponent(rawSearchString);
    (async function () {
      // Make the API call to fetch search results.
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
      <ScrollableList
        ref={scrollableListRef}
        placeList={placeList}
        pastWeather={pastWeather}
        currWeather={currWeather}
        nextWeather={nextWeather}
      />
    </div>
  );
}