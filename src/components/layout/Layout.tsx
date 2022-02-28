
import { useState, useEffect, createContext, Dispatch, SetStateAction, useMemo } from 'react';
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';
import ToastManager from '../common/toast-manager/ToastManager';

interface LayoutProps {
  children: JSX.Element;
}

type CurrPageContext = [HTMLDivElement | null, Dispatch<SetStateAction<HTMLDivElement | null>> | null];
export const CurrPageContext = createContext<CurrPageContext>([null, null]);

export default function Layout(props: LayoutProps) {

  const [currPageEl, setCurrPageEl] = useState<HTMLDivElement | null>(null);

  // Create memoised [state, setState] tuples for context providers.
  const currPageContextProviderValue = useMemo<CurrPageContext>(() => [currPageEl, setCurrPageEl], [currPageEl]);

  useEffect(() => {
    // TODO: This is temporary for simulating a logged-in user's favorites. Remove after!
    const simulatedFavorites = [
      3666196448, // Starbucks
      3668837080, // McDonald's
      9063526147, // Coffee Bean
      5850832734, // Joe & Dough
      7001537860 // Decathlon
    ];

  }, []);

  return (
    <CurrPageContext.Provider value={currPageContextProviderValue}>
      <div className={styles.overallContainer}>
        <NavBar className={styles.navBar} />
        <main id='main' className={styles.mainColumn}>
          {props.children}
        </main>
        <ToastManager defaultToastDuration={2000} maxConcurrentToastCount={5} />
      </div>
    </CurrPageContext.Provider>
  )
}