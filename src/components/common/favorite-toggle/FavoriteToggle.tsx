
import { MouseEvent } from 'react';
import { observer } from 'mobx-react';
import { toast } from '@/components/common/toast-manager/ToastManager';
import PlaceData from '@/models/PlaceData';
import { rootStore } from '@/pages/_app';
import styles from './FavoriteToggle.module.css';

interface FavoriteToggleProps {
  placeId: PlaceData['osm_id'];
  className?: string;
}

export default observer(function FavoriteToggle(props: FavoriteToggleProps) {

  function clickHandler(e: MouseEvent) {
    e.stopPropagation();
    if (rootStore.domain.favorites.hasPlace(props.placeId)) {
      rootStore.domain.favorites.removePlace(props.placeId);
      toast('Removed from favourites');
    } else {
      rootStore.domain.favorites.addPlace(props.placeId);
      toast('Added to favourites');
    }
  }

  return (
    <>
      <button
        className={`${styles.overallContainer} ${props.className} ${rootStore.domain.favorites.hasPlace(props.placeId) ? styles.isFavorited : null}`}
        onClick={clickHandler}
      >
        <span className={`iconify ${styles.favoriteIcon}`} data-icon='akar-icons:heart'></span>
      </button>
    </>
  );
});