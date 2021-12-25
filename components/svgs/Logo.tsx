
import styles from './Logo.module.css'; // TODO: This may not be necessary

interface LogoProps {
  extClasses?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <div className={styles.overallContainer}>
      <svg
        className={`${styles.svg} ${props.extClasses}`}
        viewBox='0 0 151 292'
        width={151}
        height={292}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          id='body'
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 156.64C3 116.603 35.46 85 75.5 85c40.041 0 72.5 31.603 72.5 71.64 0 55.314-28.937 103.87-72.5 131.36C31.937 260.51 3 211.954 3 156.64ZM75.5 190c17.95 0 32.5-14.551 32.5-32.5 0-17.949-14.55-32.5-32.5-32.5S43 139.551 43 157.5c0 17.949 14.55 32.5 32.5 32.5Z"
          fill="#FF5656"
          stroke="#000"
          strokeWidth={6}
        />
        <path
          id='tails'
          d="M76 1.376v54.15M51 27.274V62M100 27.274V62"
          stroke="#000"
          strokeWidth={6}
        />
      </svg>
    </div>
  );
}