
import WeatherTimeline from '@/components/weather-timeline/WeatherTimeline';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import styles from './MapWeatherCard.module.css';

interface MapWeatherCardProps {
  weatherList: WeatherTimeSeries;
  className?: string;
}

export default function MapWeatherCard(props: MapWeatherCardProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      <WeatherTimeline className={styles.weatherTimeline} weatherList={props.weatherList} />
    </div>
  );
}