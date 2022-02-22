
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import User from '@/models/User';
import PlaceData from '@/models/PlaceData';
import '@/styles/global.css';
import { createContext, Dispatch, SetStateAction, useState, useEffect } from 'react';

const UserContext = createContext<[User | undefined, Dispatch<SetStateAction<User>> | undefined]>([undefined, undefined]);

export default function MyApp({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<User>();
  const [userFavorites, setUserFavorites] = useState<Array<PlaceData['osm_id']>>();

  useEffect(() => {
    // TODO: This is temporary for simulating a logged-in user's favorites. Remove after!
    const simulatedFavorites = [
      3666196448, // Starbucks
      3668837080, // McDonald's
      9063526147, // Coffee Bean
      5850832734, // Joe & Dough
      7001537860 // Decathlon
    ];
    setUserFavorites(simulatedFavorites);
  }, []);

  return (
    <>
      <Head>
        <title>JustGo!</title>
      </Head>
      <Script src='https://code.iconify.design/2/2.1.0/iconify.min.js' />
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}
