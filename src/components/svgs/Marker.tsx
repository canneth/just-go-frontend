
interface MarkerProps {
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  className?: string;
}

export default function Marker(props: MarkerProps) {
  return (
    <svg
      viewBox='0 0 151 210'
      className={props.className}
      width={151}
      height={210}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='body'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 74.6396C3 34.6031 35.4594 3 75.5 3C115.541 3 148 34.6031 148 74.6396C148 129.954 119.063 178.51 75.5 206C31.9369 178.51 3 129.954 3 74.6396Z'
        fill={props.fillColor ?? '#FF5656'}
        stroke={props.strokeColor ?? 'black'}
        strokeWidth={props.strokeWidth ?? 6}
      />
      <path
        id='mouth'
        d='M76 129C100.853 129 121 108.853 121 84H31C31 108.853 51.1472 129 76 129Z'
        fill='white'
        stroke={props.strokeColor ?? 'black'}
        strokeWidth={props.strokeWidth ?? 6}
      />
      <path
        id='right-eye'
        d='M100 54.5C103.314 54.5 106 57.1863 106 60.5C106 63.8137 103.314 66.5 100 66.5C96.6863 66.5 94 63.8137 94 60.5C94 57.1863 96.6863 54.5 100 54.5Z'
        fill='white'
        stroke={props.strokeColor ?? 'black'}
        strokeWidth={props.strokeWidth ?? 6}
      />
      <path
        id='left-eye'
        d='M52 54.5C55.3137 54.5 58 57.1863 58 60.5C58 63.8137 55.3137 66.5 52 66.5C48.6863 66.5 46 63.8137 46 60.5C46 57.1863 48.6863 54.5 52 54.5Z'
        fill='white'
        stroke={props.strokeColor ?? 'black'}
        strokeWidth={props.strokeWidth ?? 6}
      />
    </svg >
  );
}