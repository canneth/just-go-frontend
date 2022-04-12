
import Marker from './Marker';
import styles from './AnimatedMarker.module.css';

interface AnimatedMarkerProps {
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  className?: string;
}

export default function AnimatedMarker(props: AnimatedMarkerProps) {
  return (
    <Marker
      strokeColor={props.strokeColor}
      strokeWidth={props.strokeWidth}
      fillColor={props.fillColor}
      className={`${styles.marker} ${props.className}`}
    />
  );
}