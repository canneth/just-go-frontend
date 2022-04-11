
import { ReactNode, useEffect, useState } from 'react';
import MinimizableCard from '@/components/common/minimizable-card/MinimizableCard';
import WeatherTimeline from '@/components/weather-timeline/WeatherTimeline';
import WeatherTimeSeries from '@/models/WeatherTimeSeries';
import sameDateWithinTolerance from '@/utils/sameDateWithinTolerance';
import renderWeatherIconFor from '@/utils/renderWeatherIconFor';
import styles from './MapWeatherCard.module.css';

interface MapWeatherCardProps {
  weatherList: WeatherTimeSeries;
  className?: string;
}

export default function MapWeatherCard(props: MapWeatherCardProps) {

  const [minimizedContent, setMinimizedContent] = useState<ReactNode>();

  useEffect(() => {
    for (const entry of props.weatherList) {
      if (sameDateWithinTolerance(entry.date, new Date, { minutes: 30 })) {
        setMinimizedContent(renderWeatherIconFor(entry.weather));
        return;
      }
    }
  }, [props.weatherList]);

  return (
    <MinimizableCard className={`${styles.overallContainer} ${props.className}`} minimizedDiameter={50} minimizedContentJsx={minimizedContent} tooltip='Weather timeline'>
      <div className={styles.contentContainer}>
        <WeatherTimeline className={styles.weatherTimeline} weatherList={props.weatherList} />
      </div>
    </MinimizableCard>
  );
}