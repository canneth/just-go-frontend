
import { useContext } from 'react';
import { CurrPageContext } from '@/components/layout/Layout';
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import styles from './NavBar.module.css';

interface NavBarProps {
  extClasses: string;
}

export default function NavBar(props: NavBarProps) {

  const [currPageEl, _] = useContext(CurrPageContext);

  return (
    <nav className={`${styles.overallContainer} ${props.extClasses}`}>
      <div className={styles.itemsContainer}>
        <Logo extClasses={styles.logoSvg} />
        <ol className={styles.buttonList}>
          <li><Button text='Log in' pageEl={currPageEl!} destinationURL='/login' noBackground /></li>
          <li><Button text='Sign up' pageEl={currPageEl!} destinationURL='/signup' /></li>
        </ol>
      </div>
    </nav>
  );
}