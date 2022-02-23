
import { MouseEventHandler } from 'react';
import styles from './FavoriteToggle.module.css';

interface FavoriteToggleProps {
  clickHandler: MouseEventHandler;
  isFavorited: boolean;
}

export default function FavoriteToggle(props: FavoriteToggleProps) {
  return (
    <div className={`${styles.overallContainer} ${props.isFavorited ? styles.isFavorited : null}`} onClick={props.clickHandler} >
      <span className={`iconify ${styles.favoriteIcon}`} data-icon='akar-icons:heart'></span>
    </div>
  );
}