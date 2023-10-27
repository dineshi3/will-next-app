import { useState } from 'react';

import AIFeatures from '@/components/HomePage/AIFeatures';
import Accessibility from '@/components/HomePage/Accessibility';
import Banner from '@/components/HomePage/Banner';
import BlogPost from '@/components/HomePage/BlogPost';
import ScheduleDemo from '@/components/HomePage/ScheduleDemo';
import HowItWorks from '@/components/HomePage/HowItWorks';
import EssentialIndicators from './EssentialIndicators';

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
      <EssentialIndicators />
      {content.modules && <AvailableModules {...commonProps} />}
      <AIFeatures {...commonProps} />
      {false && <Accessibility />}
      {false && <BlogPost />}
      <ScheduleDemo {...commonProps} />
      <FormModal {...commonProps} />
    </main>
  );
};

export default HomePage;
