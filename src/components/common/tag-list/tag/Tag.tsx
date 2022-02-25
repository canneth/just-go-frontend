
import styles from './Tag.module.css';

interface TagProps {
  text: string;
}

export default function Tag(props: TagProps) {
  return (
    <div className={styles.overallContainer}>
      {`${props.text.charAt(0).toUpperCase()}${props.text.slice(1)}`}
    </div>
  );
}