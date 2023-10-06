import Head from 'next/head';
import HomePage from '@/components/HomePage';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Libra</title>
        <meta name='description' content='Libra Legal Platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </>
  );
}
