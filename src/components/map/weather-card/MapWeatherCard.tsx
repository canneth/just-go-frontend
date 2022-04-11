
import MinimizableCard from '@/components/common/minimizable-card/MinimizableCard';
import WeatherTimeline from '@/components/weather-timeline/WeatherTimeline';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import styles from './MapWeatherCard.module.css';

interface MapWeatherCardProps {
  weatherList: WeatherTimeSeries;
  className?: string;
}

export default function MapWeatherCard(props: MapWeatherCardProps) {

  const minimizedContent = (
    <span className='iconify' data-icon='majesticons:checkbox-list-detail' data-width='100%' data-height='100%' />
  );

  return (
    <MinimizableCard className={`${styles.overallContainer} ${props.className}`} minimizedDiameter={50} minimizedContentJsx={minimizedContent} tooltip='Weather timeline'>
      <div className={styles.contentContainer}>
        <WeatherTimeline className={styles.weatherTimeline} weatherList={props.weatherList} />
      </div>
    </MinimizableCard>
  );
}