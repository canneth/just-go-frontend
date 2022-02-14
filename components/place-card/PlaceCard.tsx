
import Image from 'next/image';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import { haversineDistance, LatLonCoords } from '@/globals/utils';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  placeData: PlaceData;
  currentWeather: ForecastAPIResponse | undefined;
  weatherForecast: ForecastAPIResponse | undefined;
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
  const nearestWeatherStation = props.weatherForecast?.area_metadata.reduce((agg, x) => {
    const stationCoords: LatLonCoords = [x.label_location.latitude, x.label_location.longitude];
    const currDistance = haversineDistance(stationCoords, placeCoords);
    if (currDistance >= shortestDistance) return agg;
    shortestDistance = currDistance;
    return x;
  });
  const nearestStationCoords = [nearestWeatherStation?.label_location.latitude, nearestWeatherStation?.label_location.longitude]; // TODO: Remove as this is only for debugging.
  const nextWeatherHere = props.weatherForecast?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
  const currWeatherHere = props.currentWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;

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
        <p>Station Name: {nearestWeatherStation?.name}</p>
        <p>Station Coords: {nearestStationCoords[0]} | Lon: {nearestStationCoords[1]}</p>
        <p>Place Coords: {placeCoords[0]} | Lon: {placeCoords[1]}</p>
        <p>Distance: {shortestDistance}</p>
        <p>Weather now: {currWeatherHere}</p>
        <p>Weahter in 2 hrs: {nextWeatherHere}</p>
      </div>
    </div>
  );
}