
import Image from 'next/image';
import PlaceData from '@/models/PlaceData';
import styles from './MapPlaceCard.module.css';

interface MapPlaceCardProps {
  placeData: PlaceData;
  className?: string;
}

export default function MapPlaceCard(props: MapPlaceCardProps) {

  // Format place data for display.
  const placeName = props.placeData.display_name.split(', ')[0];
  const placeIconSource = props.placeData.icon;
  const placeType = `${props.placeData.type.charAt(0).toUpperCase()}${props.placeData.type.slice(1)}`;
  const placeAddress = `
    ${props.placeData.address?.house_number ? props.placeData.address?.house_number : ''}
    ${props.placeData.address?.road ? props.placeData.address?.road : ''}
    ${props.placeData.address?.postcode ? props.placeData.address?.postcode : ''}
  `;
  const placeRegion = `
    ${props.placeData.address?.suburb ? props.placeData.address?.suburb : ''} | 
    ${props.placeData.address?.county ? props.placeData.address?.county : ''}
  `;

  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      <div className={styles.descriptionColumn}>
        <p className={styles.placeName}>{placeName}</p>
        <div className={styles.typeLine}>
          {placeIconSource && <Image src={placeIconSource} alt='Place icon' height={20} width={20} />}
          <p>{placeType}</p>
        </div>
        <p>{placeAddress}</p>
        <p>{placeRegion}</p>
        <ol className={styles.tagList}>
          <li className={styles.tagItem}>Chill</li>
          <li className={styles.tagItem}>Dine</li>
          <li className={styles.tagItem}>Snack</li>
          <li className={styles.tagItem}>Drink</li>
        </ol>
      </div>
    </div>
  );
}