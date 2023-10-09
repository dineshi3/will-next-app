import { Fragment, useState } from 'react';
import parse from 'html-react-parser';

import Testimonials from '../Testimonials';

import rightArrow from '@/assets/rightArrow.svg';

const AIFeatures = (props) => {
  const {
    content: { products, solutions },
    onClick,
  } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id='middle-section' className='dark file-separator grain-relative'>
      <div className='bg-grain'></div>
      <div className='gradient-spot gradient-spot-md gradient-spot-md-left gradient-spot-md-bottom teal'></div>
      <section id='section-ai' className='accordion-large pt-0 type-theme-dark'>
        <div className='fv-container'>
          <div className='action-header'>
            <div className='headline'>
              <div className='kicker mb-4'>{products.label}</div>
              <h2>{parse(products.title)}</h2>
            </div>
            <div className='headline-cta'>
              <a href='' onClick={onClick} className='btn btn-primary'>
                Get a Demo
              </a>
            </div>
          </div>
          <div className='fv-row'>
            <div className='sbs-layout' id='FdB-add-accordion'>
              {products.softwares.map((product, index) => (
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
                        <div className='btn-headline'>{product.title}</div>
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
                        <div className='body-content'>{product.description}</div>
                        <a href={product.href} target='blank' className='link-arrow'>
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
                        <img className='img-fluid' src={product.image} alt='product' />
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
              <div className='kicker'>{solutions.label}</div>
              <h2>{parse(solutions.title)}</h2>
              <div className='subheadline'>{solutions.description}</div>
            </div>
            {solutions.link && (
              <div className='headline-cta'>
                <a href={solutions.link.href} className='btn btn-primary'>
                  {solutions.link.text}
                </a>
              </div>
            )}
          </div>
          <div className='fv-cards justify-content-center'>
            {solutions.problemTypes.map((problemType) => (
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
      <Testimonials {...props} />
    </div>
  );
};

export default AIFeatures;
