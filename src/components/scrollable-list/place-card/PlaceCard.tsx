
import Image from 'next/image';
import { MouseEvent } from 'react';
import WeatherTimeline, { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import FavoriteToggle from '@/components/common/favorite-toggle/FavoriteToggle';
import TagList from '@/components/common/tag-list/TagList';
import PlaceData from '@/models/PlaceData';
import TagLabel from '@/models/TagLabel';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { rootStore } from '@/stores/RootStore';
import styles from './PlaceCard.module.css';
import { observer } from 'mobx-react';

interface PlaceCardProps {
  placeData: PlaceData;
  weatherList: TimeSeriesLocalWeather;
  tagList: Array<TagLabel>;
}

const PlaceCard = observer((props: PlaceCardProps) => {

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

  return (
    <div className={styles.overallContainer} onClick={handleClickCard}>
      <div className={styles.layoutGrid}>
        <div className={styles.placeDetailsContainer}>
          <p className={styles.placeName}>{placeName}</p>
          <div className={styles.typeLine}>
            {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
            <p>{placeType}</p>
          </div>
          <p>{placeAddress}</p>
          <p>{placeRegion}</p>
        </div>
        <div className={styles.weatherContainer}>
          <WeatherTimeline className={styles.weatherTimeline} weatherList={props.weatherList} />
        </div>
        <div className={styles.tagListContainer}>
          <TagList tagList={props.tagList} />
        </div>
      </div>
      <FavoriteToggle
        className={styles.favoriteToggle}
        placeId={props.placeData.osm_id}
      />
    </div>
  );
});

export default PlaceCard;