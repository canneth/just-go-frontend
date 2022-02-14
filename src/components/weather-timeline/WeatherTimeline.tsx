
import { Forecast } from '@/models/WeatherForecast';
import WeatherBadge from './weather-badge/WeatherBadge';
import styles from './WeatherTimeline.module.css';

interface WeatherTimelineProps {
  pastWeather: Forecast | undefined;
  currWeather: Forecast | undefined;
  nextWeather: Forecast | undefined;
  className?: string;
}

export default function WeatherTimeline(props: WeatherTimelineProps) {
  const nowDate = new Date();
  const pastDate = new Date();
  const nextDate = new Date();
  pastDate.setHours(nowDate.getHours() - 2);
  nextDate.setHours(nowDate.getHours() + 2);
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      {props.pastWeather && <WeatherBadge date={pastDate} weather={props.pastWeather} />}
      {props.currWeather && <WeatherBadge date={nowDate} weather={props.currWeather} current />}
      {props.nextWeather && <WeatherBadge date={nextDate} weather={props.nextWeather} />}
    </div>
  );
}