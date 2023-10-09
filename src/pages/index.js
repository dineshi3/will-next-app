import Head from 'next/head';
import HomePage from '@/components/HomePage';

import content from './libra.json';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name='description' content='Libra Legal Platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <HomePage content={content} />
    </>
  );
}
