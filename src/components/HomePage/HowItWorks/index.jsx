import parse from 'html-react-parser';

import Features from '../Features';
import ProductShowcase from '../ProductShowcase';

const HowItWorks = (props) => {
  const { content, onClick } = props;

  const { howItWorks }  = content;
  return (
    <div id='top-section' className='light file-separator'>
      <section id='section-1' className='accordion-side-by-side pt-0 null'>
        <div className='fv-container'>
          <div className='action-header'>
            <div className='headline'>
              <div className='kicker mb-4'>{howItWorks.label}</div>
              <h2>
                {parse(howItWorks.title)}
              </h2>
            </div>
            <div className='headline-cta'>
              <a href='' className='btn btn-primary' onClick={onClick}>
                Schedule a Free Demo
              </a>
            </div>
          </div>
          <Features content={howItWorks} />
        </div>
      </section>
      {false && <ProductShowcase />}
    </div>
  );
};

export default HowItWorks;
