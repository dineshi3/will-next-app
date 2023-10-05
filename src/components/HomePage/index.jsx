import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import AIFeatures from '@/components/HomePage/AIFeatures';
import Accessibility from '@/components/HomePage/Accessibility';
import Banner from '@/components/HomePage/Banner';
import BlogPost from '@/components/HomePage/BlogPost';
import ScheduleDemo from '@/components/HomePage/ScheduleDemo';
import HowItWorks from '@/components/HomePage/HowItWorks';

import FormModal from './FormModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => setShowModal(true);

  const props = { showModal, setShowModal, onClick };

  return (
    <main id='main' className='home-refresh'>
      <Banner {...props} />
      <HowItWorks {...props} />
      <AIFeatures />
      <Accessibility />
      {/* <BlogPost /> */}
      <ScheduleDemo />
      <FormModal {...props} />
    </main>
  );
};

export default HomePage;
