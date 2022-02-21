
import { Forecast } from '@/models/WeatherForecast';
import WeatherBadge from './weather-badge/WeatherBadge';
import styles from './WeatherTimeline.module.css';

export type TimeSeriesLocalWeather = Array<{ date: Date, weather: Forecast | undefined, current: boolean }>;

interface WeatherTimelineProps {
  weatherList: TimeSeriesLocalWeather;
  className?: string;
}

export default function WeatherTimeline(props: WeatherTimelineProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      {
        props.weatherList.map(x => <WeatherBadge key={x.date.toISOString()} date={x.date} weather={x.weather} current={x.current} />)
      }
    </div>
  );
}