
import { forwardRef, ForwardedRef } from 'react';
import PlaceCard from './place-card/PlaceCard';
import PlaceData from '@/models/PlaceData';
import styles from './ScrollableList.module.css';

interface ScrollableListProps {
  placeList: PlaceData[];
  withWeather?: boolean;
  className?: string;
}

const ScrollableList = forwardRef((props: ScrollableListProps, ref: ForwardedRef<HTMLOListElement>) => {

  return (
    <ol ref={ref} className={`${styles.list} ${props.className}`}>
      {
        props.placeList.map(placeData => {
          return (
            <PlaceCard
              key={placeData.osm_id}
              placeData={placeData}
              tagList={['play', 'work', 'dine']}
              withWeather={props.withWeather}
            />
          );
        })
      }
    </ol>
  );
});
ScrollableList.displayName = 'ScrollableList';

export default ScrollableList;