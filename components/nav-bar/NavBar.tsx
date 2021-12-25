
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import styles from './NavBar.module.css';

interface NavBarProps {
  extClasses: string;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={`${styles.overallContainer} ${props.extClasses}`}>
      <div className={styles.itemsContainer}>
        <Logo extClasses={styles.logoSvg} />
        <ol className={styles.buttonList}>
          <li><Button text='Log in' noBackground /></li>
          <li><Button text='Sign up' /></li>
        </ol>
      </div>
    </nav>
  );
}