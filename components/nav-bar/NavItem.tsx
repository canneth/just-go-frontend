
import styles from './NavItem.module.css';

interface NavItemProps {
  for: string;
}

export default function NavItem(props: NavItemProps) {
  return (
    <div className={styles.overallContainer}>
      {
        props.for === 'logo'
        ? <Logo />
        : <Button text='for'/>
      }
    </div>
  );
}