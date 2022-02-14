
import { Forecast } from '@/models/WeatherForecast';
import renderWeatherIconFor from '@/utils/renderWeatherIconFor';
import styles from './WeatherBadge.module.css';

interface WeatherBadgeProps {
  date: Date;
  weather: Forecast;
  current?: boolean;
}

export default function WeatherBadge(props: WeatherBadgeProps) {

  const hour24Format = props.date.getHours();
  const displayTime = hour24Format > 12 ? `${hour24Format - 12} pm` : `${hour24Format} am`

  return (
    <div className={`${styles.overallContainer} ${props.current && styles.isCurrent}`}>
      <div className={styles.iconContainer}>
        {renderWeatherIconFor(props.weather)}
      </div>
      <p className={styles.time}>{displayTime}</p>
    </div>
  );
}