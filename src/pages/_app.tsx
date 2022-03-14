
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import RootStore from '@/stores/RootStore';
import WeatherStore from '@/stores/domain-stores/WeatherStore';
import '@/styles/global.css';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    if (typeof window === 'undefined') {
      const { default: mockAPIServer } = await import('@/api-mocks/mockAPIServer');
      mockAPIServer.listen();
    } else {
      const { default: mockAPIWorker } = await import('@/api-mocks/mockAPIWorker');
      mockAPIWorker.start();
    }
  })();
}

export const rootStore = new RootStore;
export const weatherStore = new WeatherStore;

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>JustGo!</title>
      </Head>
      <Script src='https://code.iconify.design/2/2.1.0/iconify.min.js' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
