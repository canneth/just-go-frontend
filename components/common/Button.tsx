
import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  clickHandler: MouseEventHandler;
  noBackground?: true;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      className={`${styles.overallContainer} ${props.noBackground ? styles.noBackground : null}`}
      onClick={props.clickHandler}
    >
      {props.text}
    </a>
  );
}