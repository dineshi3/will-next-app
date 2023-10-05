import { Fragment, useState } from 'react';

const items = [
  {
    title: 'Integrations',
    description: 'Libra integrates with all of your favorite apps and existing technology.',
    href: '/integrations/',
    image:
      '/assets/brag-integrations.png',
  },
  {
    title: 'Security',
    description: 'We use best-in-class information security tools to safeguard your data.',
    href: '/security/',
    image:
      '/assets/brag-security.png',
  },
  {
    title: 'Awards and Reviews',
    description:
      'Thousands of attorneys, administrators, and paralegals trust Libra to manage their legal work from start to finish.',
    image:
      '/assets/brag-best-in-class.png',
  },
  {
    title: 'Partners',
    description: 'Our robust partner network can enable your team to make the most out of your legal technology.',
    href: '/partners/',
    image:
      '/assets/brag-partners.png',
  },
];

const Accessibility = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id='brag-tab-' className='brag-tabs file-separator light'>
      <div className='fv-container'>
        <div className='fv-row'>
          <div className='headline'>
            <h2></h2>
          </div>
        </div>
        <div className='fv-row'>
          <div id='brag-accordion' className='sbs-layout'>
            {items.map((item, index) => (
              <Fragment key={index}>
                <div id={`card-${index + 1}`} className='card accordion-card'>
                  <div className='card-header' id={`heading-${index + 1}`}>
                    <button
                      className={`btn btn-link ${index == activeTab ? 'expanded' : 'collapsed'}`}
                      data-toggle='collapse'
                      data-target={`#brag-${index + 1}`}
                      aria-expanded='true'
                      aria-controls={`#brag-${index + 1}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className='btn-headline'>{item.title}</div>
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
                    id={`brag-${index + 1}`}
                    className={`accordion-content ${activeTab == index ? 'show' : 'collapse'}`}
                    aria-labelledby={`heading-${index + 1}`}
                    data-parent='#brag-accordion'
                  >
                    <div className='card-body brag'>
                      <div className='body-content'>{item.description}</div>
                      {item.href && (
                        <a href={item.href} className='link-arrow'>
                          Learn more about {item.title}&nbsp;<span>›</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div id='media-body-1' className={`accordion-media ${activeTab == index ? 'show' : 'collapse'}`}>
                  <figure>
                    <picture>
                      <img src={item.image} alt='' className='img-fluid' />
                    </picture>
                  </figure>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
