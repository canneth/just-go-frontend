
import { useEffect } from 'react';
import L from 'leaflet';
import styles from './Map.module.css';

interface MapProps {
  osmId: number;
}

export default function Map(props: MapProps) {

  useEffect(() => {
    const map = L.map('map').setView([0, 0], 13);
  }, []);

  return (
    <div id='map' className={styles.map} />
  );
}