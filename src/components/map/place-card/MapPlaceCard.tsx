
import styles from './MapPlaceCard.module.css';

interface MapPlaceCardProps {
  className?: string;
}

export default function MapPlaceCard(props: MapPlaceCardProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      I AM A MAPPLACECARD!
    </div>
  );
}