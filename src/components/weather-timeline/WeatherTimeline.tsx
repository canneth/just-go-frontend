
import { memo } from 'react';
import { Forecast } from '@/models/WeatherForecast';
import WeatherBadge from './weather-badge/WeatherBadge';
import styles from './WeatherTimeline.module.css';

export type TimeSeriesLocalWeather = Array<{ date: Date, weather: Forecast | undefined, current: boolean }>;

interface WeatherTimelineProps {
  weatherList: TimeSeriesLocalWeather;
  className?: string;
}

function compareWeatherTimelineProps(prevProps: WeatherTimelineProps, nextProps: WeatherTimelineProps) {
  return (
    prevProps.weatherList.length === nextProps.weatherList.length
    && prevProps.weatherList.every((prevWeather, i) => prevWeather.weather === nextProps.weatherList[i].weather)
  );
}

const WeatherTimeline = memo((props: WeatherTimelineProps) => {
  return (
    <ol className={`${styles.overallContainer} ${props.className}`}>
      {
        props.weatherList.map(x => (
          <li key={x.date.toISOString()} className={styles.weatherBadgeContainer}>
            <WeatherBadge date={x.date} weather={x.weather} current={x.current} />
          </li>
        ))
      }
    </ol>
  );
}, compareWeatherTimelineProps);
WeatherTimeline.displayName = 'WeatherTimeline';

export default WeatherTimeline;