
import styles from './NavBar.module.css';

interface NavBarProps {

}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={styles.overallContainer}>
      <NavItem for='home' />
      <ol>
        <li><NavItem for='Log in' /></li>
        <li><NavItem for='Sign up' /></li>
      </ol>
    </nav>
  );
}