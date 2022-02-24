
import { memo, MouseEvent, useRef, useState } from 'react';
import Logo from '@/components/svgs/Logo';
import Button from '@/components/common/button/Button';
import Toast from '@/components/common/toast-manager/toast/Toast';
import usePageChangeClickHandler from '@/hooks/usePageChangeClickHandler';
import styles from './NavBar.module.css';

interface NavBarProps {
  className?: string;
}

const NavBar = memo((props: NavBarProps) => {

  const clickHandlerLogin = usePageChangeClickHandler('/login');
  const clickHandlerSignup = usePageChangeClickHandler('/signup');
  const clickHandlerHome = usePageChangeClickHandler('/');

  const [showToast, setShowToast] = useState<boolean>(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout>();
  const toastDuration = 2000;

  function clickHandlerWithNotImplementedToast(_: MouseEvent) {
    if (showToast) return;
    const existingTimeout = toastTimeoutRef.current;
    if (existingTimeout) clearTimeout(existingTimeout);
    setShowToast(true);
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), toastDuration);
  }

  return (
    <>
      <nav className={`${styles.overallContainer} ${props.className}`}>
        <div className={styles.itemsContainer}>
          <Logo className={styles.logoSvg} clickHandler={clickHandlerHome} />
          <ol className={styles.buttonList}>
            <li><Button text='Log in' clickHandler={clickHandlerWithNotImplementedToast} noBackground /></li>
            <li><Button text='Sign up' clickHandler={clickHandlerWithNotImplementedToast} /></li>
          </ol>
        </div>
      </nav>
      {showToast && <Toast text='Sorry! This feature has yet to be implemented. ):' duration={toastDuration} />}
    </>
  );
});
NavBar.displayName = 'NavBar';

export default NavBar;