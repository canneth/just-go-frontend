
import { useEffect, useState } from 'react';
import axios from 'axios';
import L, { LatLngTuple } from 'leaflet';
import PlaceData from '@/models/PlaceData';
import styles from './Map.module.css';

interface MapProps {
  osmIdWithType: string;
  className?: string;
}

export default function Map(props: MapProps) {

  const [placeData, setPlaceData] = useState<PlaceData>();

  useEffect(() => {
    // Instantiate basic map.
    const map = L.map('map', { zoomControl: false }).setView([0, 0], 2);
    L.control.zoom({ position: 'bottomleft' }).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    (async function () {
      // Make API call to fetch place data.
      const placeData = (await axios.get<PlaceData[]>(
        `https://nominatim.openstreetmap.org/lookup?
          format=json
          &addressdetails=1
          &extratags=1
          &osm_ids=${props.osmIdWithType}
        `.replaceAll(/\s/g, '')
      )).data[0];
      setPlaceData(placeData);
      // Mark place and focus map.
      const placeCoords: LatLngTuple = [parseFloat(placeData.lat), parseFloat(placeData.lon)];
      const marker = L.marker(placeCoords).addTo(map);
      map.setView(placeCoords, 18);
    })();
  }, [props.osmIdWithType]);

  return (
    <div id='map' className={`${props.className} ${styles.map}`} />
  );
}