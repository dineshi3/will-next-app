import { useState } from 'react';
import Testimonials from '../Testimonials';

const features = [
  {
    title: 'DemandsAI',
    description: 'Generate demand letters easily and safely with our newest tool leveraging generative AI.',
    href: '/platform/ai-prepared-demands/',
    image:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/flex/section/2023/09/acc-demandsai.png',
  },
  {
    title: 'AIFields',
    description: 'Scan documents to generate real-time insights, summaries, and more within the security of Filevine.',
    href: '/features/ai-fields/',
    image:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/flex/section/2023/09/acc-aifields.png',
  },
  {
    title: 'ImmigrationAI',
    description: 'Automate tasks, reduce errors, and streamline the immigration application process.',
    href: '/platform/immigrationai/',
    image:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/flex/section/2023/08/acc-immigration-ai.png',
  },
  {
    title: 'AIBlocks',
    description: 'This Document Assembly tool generates summaries, charts, descriptions, and more in your documents.',
    href: '/platform/document-assembly/',
    image:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/flex/section/2023/08/acc-aiblocks.png',
  },
];

const AIFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id='middle-section' className='dark file-separator grain-relative'>
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
              <a href='/demo-request/' className='btn btn-primary'>
                Get a Demo
              </a>
            </div>
          </div>
          <div className='fv-row'>
            <div className='sbs-layout' id='FdB-add-accordion'>
              {features.map((feature, index) => (
                <>
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
                    {activeTab == index && (
                      <div
                        id='FdB-add-1'
                        className='accordion-content collapse show'
                        aria-labelledby='heading-1'
                        data-parent='#FdB-add-accordion'
                      >
                        <div className='card-body FdB-add'>
                          <div className='body-content'>{feature.description}</div>
                          <a href={feature.href} className='link-arrow'>
                            Learn more&nbsp;<span>›</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  {activeTab == index && (
                    <div id='media-body-1' className='accordion-media show collapse' data-parent='#card-2'>
                      <figure>
                        <picture>
                          <img className='img-fluid' src={feature.image} alt='' />
                        </picture>
                      </figure>
                    </div>
                  )}
                </>
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
                find out what Filevine can do for you.
              </div>
            </div>
            <div className='headline-cta'>
              <a href='/customers/' className='btn btn-primary'>
                Customer Successes
              </a>
            </div>
          </div>
          <div className='fv-cards justify-content-center'>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/personal-injury/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Personal Injury</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Convert more leads, create automated task flows, and communicate with clients and colleagues.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/mass-torts/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Mass Torts</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Automate intake, generate and store unlimited documents, and track case progress.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/immigration/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Immigration Law</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Communicate with clients via text or email, track deadlines, and create and send invoices directly
                      from Filevine.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/big-law/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Big Law</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Oversee cases and client communication, and gain more transparency into your firm’s performance.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/insurance-defense/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Insurance Defense</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Track your time accurately as you move from case to case, manage tasks, and assemble documents
                      quickly and easily.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/criminal-defense/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Criminal Defense</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Manage deadlines and court dates, create and store documents, and communicate with law
                      enforcement.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/corporate-legal-departments/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Corporate Counsel</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Handle more work, balance your team’s workloads, and deliver legal services and expertise faster.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='col mb-3 mb-sm-4'>
              <a href='/practice-types/prosecutors-and-public-defenders/' className='card-link'>
                <div className='fv-card pane pane-white-on-dark'>
                  <div className='card-body'>
                    <div className='card-body-header'>
                      <div className='headline'>
                        <h3>Government</h3>
                      </div>
                    </div>
                    <div className='body'>
                      Track case info for trial prep, create reports for budget negotiations, and take on more cases
                      with fewer staff.
                    </div>
                  </div>
                  <div className='card-footer'>
                    <div className='card-cta arrow-button'>
                      <div className='action-text'>Learn more</div>
                      <div className='action-icon'>
                        <img
                          src='https://filevine-marketing-production-media.s3.us-west-2.amazonaws.com/media/images/design-elements/cards/action-arrow.svg'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default AIFeatures;
