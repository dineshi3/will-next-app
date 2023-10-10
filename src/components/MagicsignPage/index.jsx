import Banner from './Banner';
import FeatureSection from './FeatureSection';
import IntegrationSection from './IntegrationSection';
import RegisterSection from './RegisterSection';
import MagicsignReasonSection from './MagicsignReasonSection';
import CompanyOverviewSection from './CompanyOverviewSection';
import FinalRegisterSection from './FinalRegisterSection';

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
      <MagicsignReasonSection {...commonProps} />
      <CompanyOverviewSection {...commonProps} />
      <FinalRegisterSection {...commonProps} />
    </main>
  );
};

export default MagicsignPage;
