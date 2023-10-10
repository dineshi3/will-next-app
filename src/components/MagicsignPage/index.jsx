import Banner from './Banner';
import FeatureSection from './FeatureSection';
import IntegrationSection from './IntegrationSection';
import RegisterSection from './RegisterSection';

const MagicsignPage = (props) => {
  const commonProps = { ...props };
  return (
    <main id='main'>
      <Banner {...commonProps} />
      <RegisterSection {...commonProps} />
      <IntegrationSection {...commonProps} />
      {
        props.content.features.map(feature => <FeatureSection key={feature.title} content={feature} />) 
      }
    </main>
  );
};

export default MagicsignPage;
