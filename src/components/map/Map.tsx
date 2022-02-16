
import { useEffect, useState } from 'react';
import L, { LatLngTuple } from 'leaflet';
import styles from './Map.module.css';

interface MapProps {
  placeLatLng: LatLngTuple;
  className?: string;
}

export default function Map(props: MapProps) {

  const [map, setMap] = useState<L.Map>();
  const [marker, setMarker] = useState<L.Marker>();

  useEffect(() => {
    const map = L.map('map', { zoomControl: false }).setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.control.zoom({ position: 'bottomleft' }).addTo(map); // Add zoom controls.
    const marker = L.marker([0, 0]).addTo(map); // Add marker.
    setMap(map);
    setMarker(marker);
  }, []);

  useEffect(() => {
    if (!map) return;
    map.setView(props.placeLatLng, 18); // Update map view.
    if (!marker) return;
    marker.setLatLng(props.placeLatLng); // Update marker location.
  }, [map, marker, props.placeLatLng]);

  return (
    <div id='map' className={`${props.className} ${styles.map}`} />
  );
}