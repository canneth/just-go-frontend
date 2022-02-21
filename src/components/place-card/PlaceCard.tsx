
import Image from 'next/image';
import WeatherTimeline, { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import PlaceData from '@/models/PlaceData';
import Tag from '@/models/Tag';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  placeData: PlaceData;
  weatherList: TimeSeriesLocalWeather;
  tagList: Array<Tag>;
}

export default function PlaceCard(props: PlaceCardProps) {

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

  console.log(props.weatherList);

  return (
    <div className={styles.overallContainer} onClick={handleClickCard}>
      <div className={styles.descriptionColumn}>
        <p className={styles.placeName}>{placeName}</p>
        <div className={styles.typeLine}>
          {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
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
      <WeatherTimeline
        className={styles.weatherTimeline}
        weatherList={props.weatherList}
      />
    </div>
  );
}