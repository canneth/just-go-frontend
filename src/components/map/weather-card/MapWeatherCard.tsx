
import WeatherTimeline, { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import styles from './MapWeatherCard.module.css';

interface MapWeatherCardProps {
  weatherList: TimeSeriesLocalWeather | undefined;
  className?: string;
}

export default function MapWeatherCard(props: MapWeatherCardProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      {props.weatherList && <WeatherTimeline weatherList={props.weatherList} />}
    </div>
  );
}