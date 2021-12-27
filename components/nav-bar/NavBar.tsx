
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/Button';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './NavBar.module.css';

interface NavBarProps {
  extClasses?: string;
}

export default function NavBar(props: NavBarProps) {

  const clickHandlerLogin = usePageChangeClickHandler('/login');
  const clickHandlerSignup = usePageChangeClickHandler('/signup');
  const clickHandlerHome = usePageChangeClickHandler('/');

  return (
    <nav className={`${styles.overallContainer} ${props.extClasses}`}>
      <div className={styles.itemsContainer}>
        <Logo extClasses={styles.logoSvg} clickHandler={clickHandlerHome} />
        <ol className={styles.buttonList}>
          <li><Button text='Log in' clickHandler={clickHandlerLogin} noBackground /></li>
          <li><Button text='Sign up' clickHandler={clickHandlerSignup} /></li>
        </ol>
      </div>
    </nav>
  );
}