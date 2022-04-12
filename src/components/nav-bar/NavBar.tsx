
import { memo, MouseEvent } from 'react';
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/button/Button';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import { toast } from '@/components/common/toast-manager/ToastManager';
import { FEATURE_UNAVAILABLE_TEXT } from '@/globals/constants';
import styles from './NavBar.module.css';

interface NavBarProps {
  className?: string;
}

const NavBar = memo((props: NavBarProps) => {

  const clickHandlerLogin = usePageChangeClickHandler('/login');
  const clickHandlerSignup = usePageChangeClickHandler('/signup');
  const clickHandlerHome = usePageChangeClickHandler('/');

  function clickHandlerWithNotImplementedToast(_: MouseEvent) {
    toast(FEATURE_UNAVAILABLE_TEXT);
  }

  return (
    <>
      <nav className={`${styles.overallContainer} ${props.className}`}>
        <div className={styles.itemsContainer}>
          <Logo className={styles.logoSvg} clickHandler={clickHandlerHome} />
          <ol className={styles.buttonList}>
            <li><Button text='Log in' clickHandler={clickHandlerWithNotImplementedToast} noBackground /></li>
            <li><Button text='Sign up' clickHandler={clickHandlerSignup} /></li>
          </ol>
        </div>
      </nav>
    </>
  );
});
NavBar.displayName = 'NavBar';

export default NavBar;