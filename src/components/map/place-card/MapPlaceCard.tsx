
import { MouseEvent, useContext } from 'react';
import Image from 'next/image';
import FavoriteToggle from '@/components/common/favorite-toggle/FavoriteToggle';
import { FavoritesContext } from '@/components/layout/Layout';
import PlaceData from '@/models/PlaceData';
import TagLabel from '@/models/TagLabel';
import styles from './MapPlaceCard.module.css';

interface MapPlaceCardProps {
  placeData: PlaceData;
  tagList: Array<TagLabel>;
  isFavorited?: boolean;
  className?: string;
}

export default function MapPlaceCard(props: MapPlaceCardProps) {

  const [_, setFavorites] = useContext(FavoritesContext);

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

  function favoriteIconClickHandler(e: MouseEvent) {
    e.stopPropagation();
    if (props.isFavorited) {
      setFavorites!(oldFavorites => oldFavorites.filter(x => x !== props.placeData.osm_id));
    } else {
      setFavorites!(oldFavorites => [...oldFavorites, props.placeData.osm_id]);
    }
  }

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
          {
            props.tagList.map(tag => (
              <li key={tag} className={styles.tagItem}>
                {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
              </li>
            ))
          }
        </ol>
      </div>
      {props.isFavorited !== undefined && <FavoriteToggle isFavorited={props.isFavorited} clickHandler={favoriteIconClickHandler} />}
    </div>
  );
}