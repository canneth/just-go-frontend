
import Image from 'next/image';
import { PlaceData } from '@/models/place-data';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  placeData: PlaceData;
}

export default function PlaceCard(props: PlaceCardProps) {

  const placeName = props.placeData.display_name.split(', ')[0];
  const placeIconSource = props.placeData.icon;
  const placeType = `${props.placeData.type.charAt(0).toUpperCase()}${props.placeData.type.slice(1)}`;
  const placeAddress = `
    ${props.placeData.address?.house_number ? props.placeData.address?.house_number : ''}
    ${props.placeData.address?.road ? props.placeData.address?.road : ''}
    ${props.placeData.address?.postcode ? props.placeData.address?.postcode : ''},
    ${props.placeData.address?.suburb ? props.placeData.address?.suburb : ''},
    ${props.placeData.address?.county ? props.placeData.address?.county : ''}
    `;

  return (
    <div className={styles.overallContainer}>
      <p>{props.placeData.osm_id}</p>
      <p>{placeName}</p>
      <div className={styles.typeLine}>
        <p>{placeType}</p>
        {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
      </div>
      <p>{placeAddress}</p>
    </div >
  );
}