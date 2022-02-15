
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './Map.module.css';

export default function Map() {

  const selfRef = usePageFadeInOut();
  const router = useRouter();
  const placeCoords = [router.query.lat, router.query.lon];

  const [L, setL] = useState(null);

  useEffect(() => {
    console.log('RENDER!');
    console.log(L);
    if (!L) return;
    // TODO: FIX THIS!!
    var map = L.map('map').setView([51.505, -0.09], 13);
  }, [L]);

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
      <Script
        src='https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
        integrity='sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=='
        crossOrigin=''
        onLoad={() => setL(window.L)}
      />
      <div ref={selfRef} className={styles.overallContainer}>

        <div id='map' className={styles.map} />
        <div>HELLO</div>
      </div>
    </>
  );
}