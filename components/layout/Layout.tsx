
import { useState, createContext, Dispatch, SetStateAction } from 'react';
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: JSX.Element;
}

export const CurrPageContext = createContext<
  [HTMLDivElement | null, Dispatch<SetStateAction<HTMLDivElement | null>> | null]
>([null, null]);

export default function Layout(props: LayoutProps) {

  const [currPageEl, setCurrPageEl] = useState<HTMLDivElement | null>(null);

  return (
    <CurrPageContext.Provider value={[currPageEl, setCurrPageEl]}>
      <div className={styles.overallContainer}>
        <NavBar extClasses={styles.navBar} />
        <main className={styles.mainColumn}>
          {props.children}
        </main>
      </div>
    </CurrPageContext.Provider>
  )
}