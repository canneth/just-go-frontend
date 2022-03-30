
import Image from 'next/image';
import { useState } from 'react';
import FavoriteToggle from '@/components/common/favorite-toggle/FavoriteToggle';
import PlaceData from '@/models/PlaceData';
import TagLabel from '@/models/TagLabel';
import styles from './MapPlaceCard.module.css';

interface MapPlaceCardProps {
  placeData: PlaceData;
  tagList: Array<TagLabel>;
  className?: string;
}

export default function MapPlaceCard(props: MapPlaceCardProps) {

  const [minimised, setMinimised] = useState<boolean>(false);

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
    <div className={`${styles.overallContainer} ${props.className} ${minimised ? styles.minimised : null}`}>
      {
        minimised
          ?
          <div className={styles.minimisedContentContainer}>

          </div>
          :
          <div className={styles.expandedContentContainer}>
            <div className={styles.descriptionColumn}>
              <p className={styles.placeName}>{placeName}</p>
              <div className={styles.typeLine}>
                {placeIconSource && <Image src={placeIconSource} alt='Place icon' height={20} width={20} />}
                <p>{placeType}</p>
              </div>
              <p>{placeAddress}</p>
              <p>{placeRegion}</p>
              <ol className={styles.tagList}>
                {
                  props.tagList.map(tag => (
                    <li key={tag} className={styles.tagItem}>
                      {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
                    </li>
                  ))
                }
              </ol>
            </div>
            <FavoriteToggle
              className={styles.favoriteToggle}
              placeId={props.placeData.osm_id}
            />
            <button className={styles.minimiseButton} onClick={() => setMinimised(true)} />
          </div>
      }
    </div>
  );
}