
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import MapPlaceCard from '@/components/map/place-card/MapPlaceCard';
import MapWeatherCard from '@/components/map/weather-card/MapWeatherCard';
import Button from '@/components/common/button/Button';
import PlaceData from '@/models/PlaceData';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { weatherStore } from './_app';
import styles from './map.module.css';

const Map = dynamic(() => import('@/components/map/Map'), { ssr: false });

export default observer(function MapPage() {

  const router = useRouter();
  const osmIdWithType = router.query.osmIdWithType as string;

  const selfRef = usePageFadeInOut();
  const [placeData, setPlaceData] = useState<PlaceData>();

  const placePostalCode = placeData?.address?.postcode;
  const placeLatLon = placeData ? [parseFloat(placeData.lat), parseFloat(placeData.lon)] : undefined;

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
    })();
  }, [osmIdWithType]);

  useEffect(() => {
    weatherStore.updateWeatherData();
  }, []);

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
            {
              placeData && placeLatLon &&
              <MapWeatherCard
                className={styles.weatherCard}
                weatherList={weatherStore.getWeatherTimeSeriesNearLatLon(placeLatLon[0], placeLatLon[1])}
              />
            }
          </div>
          <div className={styles.bottomBarContainer}>
            <Button text='Back' clickHandler={clickHandlerBack} />
            {placePostalCode && <Button text='Open in Google Maps' clickHandler={clickHandlerGoogleMaps} />}
          </div>
        </div>
      </div>
    </>
  );
});