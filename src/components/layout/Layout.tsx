
import { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react';
import NavBar from '@/components/nav-bar/NavBar';
import User from '@/models/User';
import PlaceData from '@/models/PlaceData';
import styles from './Layout.module.css';

interface LayoutProps {
  children: JSX.Element;
}

export const CurrPageContext = createContext<
  [HTMLDivElement | null, Dispatch<SetStateAction<HTMLDivElement | null>> | null]
>([null, null]);
export const UserContext = createContext<[User | undefined, Dispatch<SetStateAction<User>> | undefined]>([undefined, undefined]);
export const FavoritesContext = createContext<[Array<PlaceData['osm_id']>, Dispatch<SetStateAction<Array<PlaceData['osm_id']>>> | undefined]>([[], undefined]);

export default function Layout(props: LayoutProps) {

  const [currPageEl, setCurrPageEl] = useState<HTMLDivElement | null>(null);
  const [user, setUser] = useState<User>();
  const [favorites, setFavorites] = useState<Array<PlaceData['osm_id']>>([]);

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
    <CurrPageContext.Provider value={[currPageEl, setCurrPageEl]}>
      <UserContext.Provider value={[user, setUser]}>
        <FavoritesContext.Provider value={[favorites, setFavorites]}>
          <div className={styles.overallContainer}>
            <NavBar className={styles.navBar} />
            <main className={styles.mainColumn}>
              {props.children}
            </main>
          </div>
        </FavoritesContext.Provider>
      </UserContext.Provider>
    </CurrPageContext.Provider>
  )
}