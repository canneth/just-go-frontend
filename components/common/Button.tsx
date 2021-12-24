
import styles from './Button.module.css';

interface ButtonProps {
  noBackground?: true;
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a className={`${styles.overallContainer} ${props.noBackground ? styles.noBackground : null}`}>
      <p className={styles.text}>{props.text}</p>
    </a>
  );
}