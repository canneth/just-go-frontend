
import styles from './MapWeatherCard.module.css';

interface MapWeatherCardProps {
  className?: string;
}

export default function MapWeatherCard(props: MapWeatherCardProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      I AM A MAPWEATHERCARD!
    </div>
  );
}