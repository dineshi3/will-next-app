import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import AIFeatures from '@/components/HomePage/AIFeatures';
import Accessibility from '@/components/HomePage/Accessibility';
import Banner from '@/components/HomePage/Banner';
import BlogPost from '@/components/HomePage/BlogPost';
import ScheduleDemo from '@/components/HomePage/ScheduleDemo';
import HowItWorks from '@/components/HomePage/HowItWorks';

import FormModal from './FormModal';
import AvailableModules from './AvailableModules';

const HomePage = (props) => {
  const { content } = props;

  const [showModal, setShowModal] = useState(false);

  const onClick = () => setShowModal(true);

  const commonProps = { content, showModal, setShowModal, onClick };

  return (
    <main id='main' className='home-refresh'>
      <Banner {...commonProps} />
      <HowItWorks {...commonProps} />
      <AvailableModules {...commonProps} />
      <AIFeatures {...commonProps} />
      {/* <Accessibility /> */}
      {/* <BlogPost /> */}
      <ScheduleDemo {...commonProps} />
      <FormModal {...commonProps} />
    </main>
  );
};

export default HomePage;
