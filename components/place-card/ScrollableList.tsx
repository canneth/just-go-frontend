
import { PlaceData } from '@/models/place-data';
import PlaceCard from '@/components/place-card/PlaceCard';
import styles from './ScrollableList.module.css';

interface ScrollableListProps {
  placeList: PlaceData[];
  className?: string;
}

export default function ScrollableList(props: ScrollableListProps) {
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