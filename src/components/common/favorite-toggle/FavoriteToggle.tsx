
import { MouseEvent, MouseEventHandler, useState } from 'react';
import Toast from '@/components/common/toast-manager/toast/Toast';
import styles from './FavoriteToggle.module.css';

interface FavoriteToggleProps {
  clickHandler: MouseEventHandler;
  isFavorited: boolean;
}

export default function FavoriteToggle(props: FavoriteToggleProps) {

  const [addedToFavorites, setAddedToFavorites] = useState<boolean>(false);
  const [removedFromFavorites, setRemovedFromFavorites] = useState<boolean>(false);

  function clickHandlerWithToasts(e: MouseEvent) {
    setAddedToFavorites(!props.isFavorited);
    setRemovedFromFavorites(props.isFavorited);
    props.clickHandler(e);
  }

  return (
    <>
      <div className={`${styles.overallContainer} ${props.isFavorited ? styles.isFavorited : null}`} onClick={clickHandlerWithToasts} >
        <span className={`iconify ${styles.favoriteIcon}`} data-icon='akar-icons:heart'></span>
      </div>
      <Toast text={`Added to favorites`} trigger={addedToFavorites} />
      <Toast text={`Removed from favorites`} trigger={removedFromFavorites} />
    </>
  );
}