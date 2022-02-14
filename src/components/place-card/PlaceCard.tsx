
import Image from 'next/image';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import { haversineDistance, LatLonCoords } from '@/utils/harversineDistance';
import styles from './PlaceCard.module.css';
import WeatherTimeline from '@/components/weather-timeline/WeatherTimeline';

interface PlaceCardProps {
  placeData: PlaceData;
  pastWeather: ForecastAPIResponse | undefined;
  currWeather: ForecastAPIResponse | undefined;
  nextWeather: ForecastAPIResponse | undefined;
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

  // Find closest weather station to lookup weather data from.
  const placeCoords: LatLonCoords = [parseFloat(props.placeData.lat), parseFloat(props.placeData.lon)];
  let shortestDistance = Infinity;
  const nearestWeatherStation = props.nextWeather?.area_metadata.reduce((agg, x) => {
    const stationCoords: LatLonCoords = [x.label_location.latitude, x.label_location.longitude];
    const currDistance = haversineDistance(stationCoords, placeCoords);
    if (currDistance >= shortestDistance) return agg;
    shortestDistance = currDistance;
    return x;
  });
  const nearestStationCoords = [nearestWeatherStation?.label_location.latitude, nearestWeatherStation?.label_location.longitude]; // TODO: Remove as this is only for debugging.
  const pastWeatherHere = props.pastWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
  const currWeatherHere = props.currWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
  const nextWeatherHere = props.nextWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;

  return (
    <div className={styles.overallContainer}>
      <div className={styles.descriptionColumn}>
        <p className={styles.placeName}>{placeName}</p>
        <div className={styles.typeLine}>
          {placeIconSource ? <Image src={placeIconSource} alt='Place icon' height={20} width={20} /> : null}
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
      <div className={styles.weatherColumn}>
        <WeatherTimeline
          pastWeather={pastWeatherHere}
          currWeather={currWeatherHere}
          nextWeather={nextWeatherHere}
        />
      </div>
    </div>
  );
}