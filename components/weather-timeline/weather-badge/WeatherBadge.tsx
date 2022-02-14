
import { Forecast } from '@/models/WeatherForecast';
import styles from './WeatherBadge.module.css';

interface WeatherBadgeProps {
  date: Date;
  weather: Forecast;
}

export default function WeatherBadge(props: WeatherBadgeProps) {

  return (
    <div className={styles.overallContainer}>
      <div className={styles.iconContainer}>

      </div>
      <p className={styles.time}></p>
    </div>
  );
}