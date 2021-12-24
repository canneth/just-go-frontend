import PropTypes from 'prop-types';
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';

export default function Layout(props) {
	return (
		<>
			<NavBar />
			<main className={styles.mainColumn}>
        {props.children}
      </main>
		</>
	);
}

Layout.propTypes = {
	className: PropTypes.string
};
