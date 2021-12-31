
import styles from './PlaceCard.module.css';

interface PlaceCardProps {

}

export default function PlaceCard(props: PlaceCardProps) {
  return (
    <div className={styles.overallContainer}>
      Hi I am a card!
    </div>
  );
}