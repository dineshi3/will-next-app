import { Fragment, useState } from 'react';
import Testimonials from '../Testimonials';

import rightArrow from '@/assets/rightArrow.svg';

const features = [
  {
    title: 'VakilGPT',
    description: 'The Smartest Legal AI Assistant for Lawyers. Trained on over 53,28,192 judgments. Smarter than Manupatra or SCC Online',
    href: 'https://vakilsearch.com/legalgpt',
    image: '/assets/vakilgpt-dashboard.png',
  },
  {
    title: 'Judgment Search',
    description: 'Discover AI-Driven legal research personalized to suit your specific requirements and preferences!',
    href: 'https://vakilsearch.com/judgments',
    image: '/assets/judgment-search.jpg',
  },
  {
    title: 'Case Search',
    description: "India's largest case directory with real-time updates to keep you ahead in the legal game.",
    href: 'https://vakilsearch.com/casestatus',
    image: '/assets/case-search.jpg',
  },
];

const problemTypes = [
  {
    href: '/practice-types/personal-injury/',
    title: 'Personal Injury',
    description: 'Convert more leads, create automated task flows, and communicate with clients and colleagues.',
  },
  {
    href: '/practice-types/mass-torts/',
    title: 'Mass Torts',
    description: 'Automate intake, generate and store unlimited documents, and track case progress.',
  },
  {
    href: '/practice-types/immigration/',
    title: 'Immigration Law',
    description:
      'Communicate with clients via text or email, track deadlines, and create and send invoices directly from Libra.',
  },
  {
    href: '/practice-types/big-law/',
    title: 'Big Law',
    description: 'Oversee cases and client communication, and gain more transparency into your firm’s performance.',
  },
  {
    href: '/practice-types/insurance-defense/',
    title: 'Insurance Defense',
    description:
      'Track your time accurately as you move from case to case, manage tasks, and assemble documents quickly and easily.',
  },
  {
    href: '/practice-types/criminal-defense/',
    title: 'Criminal Defense',
    description: 'Manage deadlines and court dates, create and store documents, and communicate with law enforcement.',
  },
  {
    href: '/practice-types/corporate-legal-departments/',
    title: 'Corporate Counsel',
    description: 'Handle more work, balance your team’s workloads, and deliver legal services and expertise faster.',
  },
  {
    href: '/practice-types/prosecutors-and-public-defenders/',
    title: 'Government',
    description:
      'Track case info for trial prep, create reports for budget negotiations, and take on more cases with fewer staff.',
  },
];

const AIFeatures = (props) => {
  const { onClick } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id='middle-section' className='dark file-separator grain-relative'>
      <div className='bg-grain'></div>
      <div className='gradient-spot gradient-spot-md gradient-spot-md-left gradient-spot-md-bottom teal'></div>
      <section id='section-ai' className='accordion-large pt-0 type-theme-dark'>
        <div className='fv-container'>
          <div className='action-header'>
            <div className='headline'>
              <div className='kicker mb-4'>Our Newest Features</div>
              <h2>
                Add <span className='highlight'>artificial intelligence</span> into your legal toolkit
              </h2>
            </div>
            <div className='headline-cta'>
              <a href='' onClick={onClick} className='btn btn-primary'>
                Get a Demo
              </a>
            </div>
          </div>
          <div className='fv-row'>
            <div className='sbs-layout' id='FdB-add-accordion'>
              {features.map((feature, index) => (
                <Fragment key={index}>
                  <div id={`card-${index + 1}`} className='card accordion-card'>
                    <div className='card-header' id='heading-1'>
                      <button
                        className={`btn btn-link ${index == activeTab ? 'expanded' : 'collapsed'}`}
                        data-toggle='collapse'
                        data-target={`#FdB-add-${index + 1}`}
                        aria-expanded='true'
                        aria-controls={`#FdB-add-${index + 1}`}
                        onClick={() => setActiveTab(index)}
                      >
                        <div className='btn-headline'>{feature.title}</div>
                        <div className='accordion-arrow'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M13.7071 8.20711C13.3166 8.59763 12.6834 8.59763 12.2929 8.20711L7 2.91421L1.70711 8.20711C1.31658 8.59763 0.683417 8.59763 0.292894 8.20711C-0.0976314 7.81658 -0.0976314 7.18342 0.292893 6.79289L6.29289 0.792893C6.68342 0.402369 7.31658 0.402369 7.70711 0.792893L13.7071 6.79289C14.0976 7.18342 14.0976 7.81658 13.7071 8.20711Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div
                      id='FdB-add-1'
                      className={`accordion-content ${activeTab == index ? 'show' : 'collapse'}`}
                      aria-labelledby='heading-1'
                      data-parent='#FdB-add-accordion'
                    >
                      <div className='card-body FdB-add'>
                        <div className='body-content'>{feature.description}</div>
                        <a href={feature.href} target='blank' className='link-arrow'>
                          Learn more&nbsp;<span>›</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id={`media-body-${index + 1}`}
                    className={`accordion-media ${activeTab == index ? 'show' : 'collapse'}`}
                    data-parent='#card-2'
                  >
                    <figure>
                      <picture>
                        <img className='img-fluid' src={feature.image} alt='product' />
                      </picture>
                    </figure>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='solutions'>
        <div className='gradient-spot gradient-spot-sm gradient-spot-sm-right gradient-spot-sm-top yellow'></div>
        <div className='fv-container'>
          <div className='action-header'>
            <div className='headline'>
              <div className='kicker'>Who we work with</div>
              <h2>
                Solutions built for <span className='highlight'>all</span> practice types
              </h2>
              <div className='subheadline'>
                Empower your business to make legal work manageable from start to finish. Explore your practice type to
                find out what Libra can do for you.
              </div>
            </div>
            <div className='headline-cta'>
              <a href='/customers/' className='btn btn-primary'>
                Customer Successes
              </a>
            </div>
          </div>
          <div className='fv-cards justify-content-center'>
            {problemTypes.map((problemType) => (
              <div className='col mb-3 mb-sm-4' key={problemType.title}>
                <a href={`${process.env.LIBRA_HOST}/login`} target='blank' className='card-link'>
                  <div className='fv-card pane pane-white-on-dark'>
                    <div className='card-body'>
                      <div className='card-body-header'>
                        <div className='headline'>
                          <h3>{problemType.title}</h3>
                        </div>
                      </div>
                      <div className='body'>{problemType.description}</div>
                    </div>
                    <div className='card-footer'>
                      <div className='card-cta arrow-button'>
                        <div className='action-text'>Learn more</div>
                        <div className='action-icon'>
                          <img {...rightArrow} loading='lazy' alt='right arrow' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default AIFeatures;
