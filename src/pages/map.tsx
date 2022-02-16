
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import MapPlaceCard from '@/components/map/place-card/MapPlaceCard';
import MapWeatherCard from '@/components/map/place-card/MapWeatherCard';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './map.module.css';

const Map = dynamic(() => import('@/components/map/Map'), { ssr: false });

export default function MapPage() {

  const selfRef = usePageFadeInOut();
  const router = useRouter();
  const osmIdWithType = router.query.osmIdWithType as string;

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
          <Map className={styles.map} osmIdWithType={osmIdWithType} />
        </div>
        <div className={styles.foregroundContainer}>
          <MapPlaceCard className={styles.placeCard} />
          <MapWeatherCard className={styles.weatherCard} />
        </div>
      </div>
    </>
  );
}