
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
      <div className={styles.descriptionColumn}>
        <p className={styles.placeName}>{placeName}</p>
        <div className={styles.typeLine}>
          {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
          <p>{placeType}</p>
        </div>
        <p>{placeAddress}</p>
        <ol className={styles.tagList}>
          <li className={styles.tagItem}>Chill</li>
          <li className={styles.tagItem}>Dine</li>
          <li className={styles.tagItem}>Snack</li>
          <li className={styles.tagItem}>Drink</li>
        </ol>
      </div>
      <div className={styles.weatherColumn}>
        I am the weather section
      </div>
    </div>
  );
}