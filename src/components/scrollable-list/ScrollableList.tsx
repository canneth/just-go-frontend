
import { useImperativeHandle, useRef, forwardRef, ForwardedRef } from 'react';
import PlaceCard from './place-card/PlaceCard';
import { TimeSeriesLocalWeather } from '@/components/weather-timeline/WeatherTimeline';
import PlaceData from '@/models/PlaceData';
import ForecastAPIResponse from '@/models/WeatherForecast';
import { haversineDistance, LatLonCoords } from '@/utils/harversineDistance';
import styles from './ScrollableList.module.css';
import { observer } from 'mobx-react';

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
          props.placeList.map(placeData => {
            // Find closest weather station to lookup weather data from.
            const placeCoords: LatLonCoords = [parseFloat(placeData.lat), parseFloat(placeData.lon)];
            let shortestDistance = Infinity;
            const nearestWeatherStation = props.nextWeather?.area_metadata.reduce((agg, station) => {
              const stationCoords: LatLonCoords = [station.label_location.latitude, station.label_location.longitude];
              const currDistance = haversineDistance(stationCoords, placeCoords);
              if (currDistance >= shortestDistance) return agg;
              shortestDistance = currDistance;
              return station;
            });
            // Build local time-series weather for PlaceCard.
            const pastWeatherHere = props.pastWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
            const currWeatherHere = props.currWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
            const nextWeatherHere = props.nextWeather?.items[0].forecasts.find(x => x.area === nearestWeatherStation?.name)?.forecast;
            const nowDate = new Date();
            const pastDate = new Date();
            const nextDate = new Date();
            pastDate.setHours(nowDate.getHours() - 2);
            nextDate.setHours(nowDate.getHours() + 2);
            const weatherList: TimeSeriesLocalWeather = [
              { date: pastDate, weather: pastWeatherHere, current: false },
              { date: nowDate, weather: currWeatherHere, current: true },
              { date: nextDate, weather: nextWeatherHere, current: false }
            ];
            return (
              <PlaceCard
                key={placeData.osm_id}
                placeData={placeData}
                weatherList={weatherList}
                tagList={['play', 'work', 'dine']}
              />
            );
          })
        }
      </ol>
    </div>
  );
});
ScrollableList.displayName = 'ScrollableList';

export default observer(ScrollableList);