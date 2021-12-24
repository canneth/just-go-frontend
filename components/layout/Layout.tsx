
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.overallContainer}>
      <NavBar className={styles.navBar} />
      <main className={styles.mainColumn}>
        {props.children}
      </main>
    </div>
  )
}