
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import styles from './NavBar.module.css';

interface NavBarProps {
  className: string;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={`${styles.overallContainer} ${props.className}`}>
      <div className={styles.itemsContainer}>
        <div className={styles.navItemContainer}><Logo /></div>
        <ol className={styles.buttonList}>
          <li><div className={styles.navItemContainer}><Button text='Log in' noBackground /></div></li>
          <li><div className={styles.navItemContainer}><Button text='Sign up' /></div></li>
        </ol>
      </div>
    </nav>
  );
}