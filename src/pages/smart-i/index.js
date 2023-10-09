import HomePage from '@/components/HomePage';
import MetaHead from '@/components/MetaHead';

import content from './data.json';

export default function Home() {
  return (
    <>
      <MetaHead meta={content.meta} />
      <HomePage content={content} />
    </>
  );
}
