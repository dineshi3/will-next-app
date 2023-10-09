import MetaHead from '@/components/MetaHead';
import HomePage from '@/components/HomePage';

import content from './libra.json';

export default function Home() {
  
  return (
    <>
      <MetaHead meta={content.meta} />
      <HomePage content={content} />
    </>
  );
}
