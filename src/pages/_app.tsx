
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import '@/styles/global.css';


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
