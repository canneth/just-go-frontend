
import { useImperativeHandle, useRef, forwardRef, ForwardedRef } from 'react';
import PlaceCard from '@/components/place-card/PlaceCard';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import styles from './ScrollableList.module.css';

interface ScrollableListProps {
  placeList: PlaceData[];
  pastWeather: ForecastAPIResponse | undefined;
  currWeather: ForecastAPIResponse | undefined;
  nextWeather: ForecastAPIResponse | undefined;
  className?: string;
}
export interface ScrollableListImperativeRef {
  viewportElement: HTMLDivElement;
  listElement: HTMLOListElement;
}

const ScrollableList = forwardRef((props: ScrollableListProps, ref: ForwardedRef<ScrollableListImperativeRef>) => {

  const selfRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useImperativeHandle(ref, () => ({
    get viewportElement() { return selfRef.current!; },
    get listElement() { return listRef.current!; }
  }));

  return (
    <div ref={selfRef} className={`${styles.overallContainer} ${props.className}`}>
      <ol ref={listRef} className={styles.list}>
        {
          props.placeList.map((x, i) => (
            <PlaceCard
              key={i}
              placeData={x}
              pastWeather={props.pastWeather}
              currWeather={props.currWeather}
              nextWeather={props.nextWeather}
            />
          ))
        }
      </ol>
    </div>
  );
});
ScrollableList.displayName = 'ScrollableList';

export default ScrollableList;