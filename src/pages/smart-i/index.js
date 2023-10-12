import HomePage from '@/components/HomePage';
import MetaHead from '@/components/MetaHead';

import content from './data.json';
import SmartInvoicePage from '@/components/SmartInvoicePage';

export default function Home() {
  return (
    <>
      <MetaHead meta={content.meta} />
      <SmartInvoicePage />
    </>
  );
}
