
import { MouseEvent, MouseEventHandler } from 'react';
import { toast } from '@/components/common/toast-manager/ToastManager';
import styles from './FavoriteToggle.module.css';

interface FavoriteToggleProps {
  clickHandler: MouseEventHandler;
  isFavorited: boolean;
  className?: string;
}

export default function FavoriteToggle(props: FavoriteToggleProps) {

  function clickHandlerWithToasts(e: MouseEvent) {
    props.isFavorited ? toast('Removed from favourites') : toast('Added to favourites');
    props.clickHandler(e);
  }

  return (
    <>
      <div className={`${styles.overallContainer} ${props.className} ${props.isFavorited ? styles.isFavorited : null}`} onClick={clickHandlerWithToasts} >
        <span className={`iconify ${styles.favoriteIcon}`} data-icon='akar-icons:heart'></span>
      </div>
    </>
  );
}