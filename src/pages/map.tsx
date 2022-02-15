
import Head from 'next/head';
import { useRouter } from 'next/router';
import usePageFadeInOut from '@/hooks/usePageFadeInOut';
import styles from './Map.module.css';
import Map from '@/components/map/Map';

export default function MapPage() {

  const selfRef = usePageFadeInOut();
  const router = useRouter();
  console.log(router.query);
  const osmId = parseFloat(router.query.osmId as string);

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
        <Map osmId={osmId} />
        <div>HELLO</div>
      </div>
    </>
  );
}