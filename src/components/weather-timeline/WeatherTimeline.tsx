
import { memo } from 'react';
import WeatherBadge from './weather-badge/WeatherBadge';
import styles from './WeatherTimeline.module.css';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import sameDateWithinTolerance from '@/utils/sameDateWithinTolerance';

interface WeatherTimelineProps {
  weatherList: WeatherTimeSeries;
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
        props.weatherList.map(weatherEntry => (
          <li key={weatherEntry.date.toISOString()} className={styles.weatherBadgeContainer}>
            <WeatherBadge
              date={weatherEntry.date}
              weather={weatherEntry.weather}
              current={sameDateWithinTolerance(weatherEntry.date, new Date, { minutes: 30 })}
            />
          </li>
        ))
      }
    </ol>
  );
}, compareWeatherTimelineProps);
WeatherTimeline.displayName = 'WeatherTimeline';

export default WeatherTimeline;