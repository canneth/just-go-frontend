
interface MarkerProps {
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
}

export default function Marker(props: MarkerProps) {
  return (
    <svg
      viewBox='0 0 151 210'
      width={151}
      height={210}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 74.64C3 34.603 35.46 3 75.5 3 115.541 3 148 34.603 148 74.64c0 55.314-28.937 103.87-72.5 131.36C31.937 178.51 3 129.954 3 74.64ZM52 54.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm48 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM76 129c24.853 0 45-20.147 45-45H31c0 24.853 20.147 45 45 45Z'
        fill={props.strokeColor ?? '#FF5656'}
        stroke={props.fillColor ?? '#000'}
        strokeWidth={props.strokeWidth ?? 6}
      />
    </svg >
  );
}