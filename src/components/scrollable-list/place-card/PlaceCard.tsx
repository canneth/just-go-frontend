
import Image from 'next/image';
import { MouseEvent, useContext, useState } from 'react';
import { FavoritesContext } from '@/components/layout/Layout';
import WeatherTimeline, { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import FavoriteToggle from '@/components/common/favorite-toggle/FavoriteToggle';
import PlaceData from '@/models/PlaceData';
import TagLabel from '@/models/TagLabel';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './PlaceCard.module.css';
import TagList from '@/components/common/tag-list/TagList';

interface PlaceCardProps {
  placeData: PlaceData;
  weatherList: TimeSeriesLocalWeather;
  tagList: Array<TagLabel>;
  isFavorited?: boolean;
}

export default function PlaceCard(props: PlaceCardProps) {

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

  let placeOsmId = null;
  switch (props.placeData.osm_type) {
    case 'node':
      placeOsmId = `N${props.placeData.osm_id}`;
      break;
    case 'way':
      placeOsmId = `W${props.placeData.osm_id}`;
      break;
    case 'relation':
      placeOsmId = `R${props.placeData.osm_id}`;
      break;
  }
  const handleClickCard = usePageChangeClickHandler(`/map?osmIdWithType=${placeOsmId}`);

  function favoriteIconClickHandler(e: MouseEvent) {
    e.stopPropagation();
    if (props.isFavorited) {
      setFavorites!(oldFavorites => oldFavorites.filter(x => x !== props.placeData.osm_id));
    } else {
      setFavorites!(oldFavorites => [...oldFavorites, props.placeData.osm_id]);
    }
  }

  return (
    <>
      <div className={styles.overallContainer} onClick={handleClickCard}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <div className={styles.descriptionColumn}>
              <p className={styles.placeName}>{placeName}</p>
              <div className={styles.typeLine}>
                {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
                <p>{placeType}</p>
              </div>
              <p>{placeAddress}</p>
              <p>{placeRegion}</p>
            </div>
            <WeatherTimeline className={styles.weatherTimeline} weatherList={props.weatherList} />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <TagList tagList={props.tagList} />
        </div>
        {props.isFavorited !== undefined && <FavoriteToggle className={styles.favoriteToggle} isFavorited={props.isFavorited} clickHandler={favoriteIconClickHandler} />}
      </div>
    </>
  );
}