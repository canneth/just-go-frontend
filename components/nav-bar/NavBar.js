
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

export default function NavBar(props) {
  return (
    <nav className={styles.overallContainer}>
      Hi I am a nav bar
    </nav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
}