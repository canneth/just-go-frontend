
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MapPlaceCard from '@/components/map/place-card/MapPlaceCard';
import MapWeatherCard from '@/components/map/weather-card/MapWeatherCard';
import { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import Button from '@/components/common/button/Button';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import haversineDistance, { LatLonCoords } from '@/utils/haversineDistance';
import styles from './map.module.css';

const Map = dynamic(() => import('@/components/map/Map'), { ssr: false });

export default function MapPage() {

  const router = useRouter();
  const osmIdWithType = router.query.osmIdWithType as string;

  const selfRef = usePageFadeInOut();
  const [placeData, setPlaceData] = useState<PlaceData>();
  const [weatherList, setWeatherList] = useState<TimeSeriesLocalWeather>();
  const [isFavorited, setIsFavorited] = useState<boolean>();

  const placePostalCode = placeData?.address?.postcode;

  const clickHandlerBack = usePageChangeClickHandler('/search');
  const clickHandlerGoogleMaps = usePageChangeClickHandler(`https://www.google.com/maps/place/Singapore+${placePostalCode}`, { toExternal: true });

  useEffect(() => {
    (async function () {
      // Make API call to fetch place data.
      const placeData = (await axios.get<PlaceData[]>(
        `https://nominatim.openstreetmap.org/lookup?
          format=json
          &addressdetails=1
          &extratags=1
          &osm_ids=${osmIdWithType}
        `.replaceAll(/\s/g, '')
      )).data[0];
      if (!placeData) return;
      setPlaceData(placeData);
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
      const nextWeather = (await axios.get<ForecastAPIResponse>(
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
      // Find closest weather station to lookup weather data from.
      const placeCoords: LatLonCoords = [parseFloat(placeData.lat), parseFloat(placeData.lon)];
      let shortestDistance = Infinity;
      const nearestWeatherStation = nextWeather?.area_metadata.reduce((agg, station) => {
        const stationCoords: LatLonCoords = [station.label_location.latitude, station.label_location.longitude];
        const currDistance = haversineDistance(stationCoords, placeCoords);
        if (currDistance >= shortestDistance) return agg;
        shortestDistance = currDistance;
        return station;
      });
      // Build local time-series weather for PlaceCard.
      const pastWeatherHere = pastWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
      const currWeatherHere = currWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
      const nextWeatherHere = nextWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
      const nowDate = new Date();
      const pastDate = new Date();
      const nextDate = new Date();
      pastDate.setHours(nowDate.getHours() - 2);
      nextDate.setHours(nowDate.getHours() + 2);
      const weatherList: TimeSeriesLocalWeather = [
        { date: pastDate, weather: pastWeatherHere, current: false },
        { date: nowDate, weather: currWeatherHere, current: true },
        { date: nextDate, weather: nextWeatherHere, current: false }
      ];
      setWeatherList(weatherList);
    })();
  }, [osmIdWithType]);

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
          integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
          crossOrigin=''
        />
      </Head>
      <div ref={selfRef} className={styles.overallContainer}>
        <div className={styles.backgroundContainer}>
          <Map className={styles.map} placeLatLng={placeData ? [parseFloat(placeData.lat), parseFloat(placeData.lon)] : [0, 0]} />
        </div>
        <div className={styles.foregroundContainer}>
          <div className={styles.sidePanelsContainer}>
            {placeData && <MapPlaceCard className={styles.placeCard} placeData={placeData} tagList={['work', 'dine']} />}
            {placeData && <MapWeatherCard className={styles.weatherCard} weatherList={weatherList} />}
          </div>
          <div className={styles.bottomBarContainer}>
            <Button text='Back' clickHandler={clickHandlerBack} />
            {placePostalCode && <Button text='Open in Google Maps' clickHandler={clickHandlerGoogleMaps} />}
          </div>
        </div>
      </div>
    </>
  );
}