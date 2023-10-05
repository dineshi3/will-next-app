import Features from '../Features';
import ProductShowcase from '../ProductShowcase';

const HowItWorks = (props) => {
  const { onClick } = props;
  return (
    <div id='top-section' className='light file-separator'>
      <section id='section-1' className='accordion-side-by-side pt-0 null'>
        <div className='fv-container'>
          <div className='action-header'>
            <div className='headline'>
              <div className='kicker mb-4'>How it works</div>
              <h2>
                AI powered legal technology that <span className='highlight'>accelerates your entire firm</span>
              </h2>
            </div>
            <div className='headline-cta'>
              <a className='btn btn-primary' onClick={onClick}>
                Schedule a Free Demo
              </a>
            </div>
          </div>
          <Features />
        </div>
      </section>
      <ProductShowcase />
    </div>
  );
};

export default HowItWorks;
