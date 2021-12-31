
import { PlaceData } from '@/models/place-data';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  placeData: PlaceData;
}

export default function PlaceCard(props: PlaceCardProps) {

  const placeName = props.placeData.display_name.split(', ')[0];
  const placeIconSource = props.placeData.icon;
  const placeType = props.placeData.type;
  const placeAddress = `
    ${props.placeData.address?.house_number ? props.placeData.address?.house_number : ''}
    ${props.placeData.address?.road ? props.placeData.address?.road : ''}
    ${props.placeData.address?.postcode ? props.placeData.address?.postcode : ''},
    ${props.placeData.address?.suburb ? props.placeData.address?.suburb : ''},
    ${props.placeData.address?.county ? props.placeData.address?.county : ''}
    `;

  return (
    <div className={styles.overallContainer}>
      <p>placeName: {placeName}</p>
      <p>placeIconSource: {placeIconSource}</p>
      <p>placeType: {placeType}</p>
      <p>placeAddress: {placeAddress}</p>
    </div>
  );
}