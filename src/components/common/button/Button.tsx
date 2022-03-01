
import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  clickHandler: MouseEventHandler;
  disabled?: boolean;
  noBackground?: boolean;
}

export default function Button(props: ButtonProps) {
  // TODO: Implement CSS styling for disabled version!
  return (
    <button
      className={`${styles.overallContainer} ${props.noBackground ? styles.noBackground : null}`}
      onClick={props.clickHandler}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}