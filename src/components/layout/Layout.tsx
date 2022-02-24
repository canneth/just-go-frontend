
import { useState, useEffect, createContext, Dispatch, SetStateAction, useMemo } from 'react';
import NavBar from '@/components/nav-bar/NavBar';
import User from '@/models/User';
import PlaceData from '@/models/PlaceData';
import styles from './Layout.module.css';
import ToastManager from '../common/toast/ToastManager';

interface LayoutProps {
  children: JSX.Element;
}

type CurrPageContext = [HTMLDivElement | null, Dispatch<SetStateAction<HTMLDivElement | null>> | null];
export const CurrPageContext = createContext<CurrPageContext>([null, null]);
type UserContext = [User | undefined, Dispatch<SetStateAction<User>> | undefined];
export const UserContext = createContext<UserContext>([undefined, undefined]);
type FavoritesContext = [Array<PlaceData['osm_id']>, Dispatch<SetStateAction<Array<PlaceData['osm_id']>>> | undefined];
export const FavoritesContext = createContext<FavoritesContext>([[], undefined]);

export default function Layout(props: LayoutProps) {

  const [currPageEl, setCurrPageEl] = useState<HTMLDivElement | null>(null);
  const [user, setUser] = useState<User>();
  const [favorites, setFavorites] = useState<Array<PlaceData['osm_id']>>([]);

  // Create memoised [state, setState] tuples for context providers.
  const currPageContextProviderValue = useMemo<CurrPageContext>(() => [currPageEl, setCurrPageEl], [currPageEl]);
  const userContextProviderValue = useMemo<UserContext>(() => [user, setUser], [user]);
  const favoritesContextProviderValue = useMemo<FavoritesContext>(() => [favorites, setFavorites], [favorites]);

  useEffect(() => {
    // TODO: This is temporary for simulating a logged-in user's favorites. Remove after!
    const simulatedFavorites = [
      3666196448, // Starbucks
      3668837080, // McDonald's
      9063526147, // Coffee Bean
      5850832734, // Joe & Dough
      7001537860 // Decathlon
    ];
    setFavorites(simulatedFavorites);
  }, []);

  return (
    <CurrPageContext.Provider value={currPageContextProviderValue}>
      <UserContext.Provider value={userContextProviderValue}>
        <FavoritesContext.Provider value={favoritesContextProviderValue}>
          <div className={styles.overallContainer}>
            <NavBar className={styles.navBar} />
            <main id='main' className={styles.mainColumn}>
              {props.children}
            </main>
            <ToastManager />
          </div>
        </FavoritesContext.Provider>
      </UserContext.Provider>
    </CurrPageContext.Provider>
  )
}