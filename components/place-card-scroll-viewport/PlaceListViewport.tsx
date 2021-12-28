
import { PlaceData } from '@/models/place-data';
import PlaceCard from '@/components/place-card-scroll-viewport/place-card/PlaceCard';
import styles from './PlaceListViewport.module.css';

interface PlaceListViewportProps {
  placeList: PlaceData[];
  className?: string;
}

export default function PlaceListViewport(props: PlaceListViewportProps) {
  return (
    <div className={`${styles.overallContainer} ${props.className}`}>
      <ol>
        {
          props.placeList.map((x, i) => <PlaceCard key={i} />)
        }
      </ol>
    </div>
  );
}