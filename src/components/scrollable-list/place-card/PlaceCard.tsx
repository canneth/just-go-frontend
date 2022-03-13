
import Image from 'next/image';
import { observer } from 'mobx-react';
import WeatherTimeline from '@/components/weather-timeline/WeatherTimeline';
import FavoriteToggle from '@/components/common/favorite-toggle/FavoriteToggle';
import TagList from '@/components/common/tag-list/TagList';
import PlaceData from '@/models/PlaceData';
import TagLabel from '@/models/TagLabel';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import getPrefixedOsmId from '@/utils/getPrefixedOsmId';
import { weatherStore } from '@/pages/_app';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  placeData: PlaceData;
  tagList: Array<TagLabel>;
  withWeather?: boolean;
}

export default observer(function PlaceCard(props: PlaceCardProps) {

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

  const placeLatLon = [parseFloat(props.placeData.lat), parseFloat(props.placeData.lon)] as const;
  const localWeatherTimeSeries = weatherStore.getWeatherTimeSeriesNearLatLon(placeLatLon[0], placeLatLon[1]);

  const handleClickCard = usePageChangeClickHandler(`/map?osmIdWithType=${getPrefixedOsmId(props.placeData.osm_id, props.placeData.osm_type)}`);

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
        {
          props.withWeather && localWeatherTimeSeries &&
          <div className={styles.weatherContainer}>
            <WeatherTimeline className={styles.weatherTimeline} weatherList={localWeatherTimeSeries} />
          </div>
        }
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