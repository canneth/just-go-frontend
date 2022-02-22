
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import User from '@/models/User';
import PlaceData from '@/models/PlaceData';
import '@/styles/global.css';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

const UserContext = createContext<[User | undefined, Dispatch<SetStateAction<User>> | undefined]>([undefined, undefined]);

export default function MyApp({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<User>();
  const [userFavorites, setUserFavorites] = useState<Array<PlaceData['osm_id']>>();

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
