import { useState } from 'react';

const features = [
  {
    title: 'Case & matter management—keep all cases on track',
    points: [
      'Reduce redundant tasks',
      'Draft documents with all your case data',
      'Connect your workflow with all your contacts and documents',
      "Customize everything to your team's legal needs",
    ],
    href: '/platform/case-management-software/',
    image:
      'https://vakilsearch.com/products/libra/hearings-web.svg',
  },
  {
    title: 'Document management built specifically for legal',
    points: [
      'Quickly find and update all your documents',
      'Connect matters with documents and contracts',
      'Configurable to your different users',
      'Built by lawyers for lawyers',
    ],
    href: '/platform/document-management/',
    image:
      'https://vakilsearch.com/products/libra/display-board-web.svg',
  },
  {
    title: 'Time and billing software that captures every minute',
    points: [
      'Build and send custom invoices',
      'Expedite timesheet review',
      'Generate invoices alongside your legal work',
      'Use multiple timers to track time across your entire team',
    ],
    href: '/platform/billing-and-time-keeping/',
    image:
      'https://vakilsearch.com/products/libra/alerts-web.svg',
  },
  {
    title: 'Find and convert more leads',
    points: [
      'Track and nurture leads from every source',
      'Optimize marketing to increase profits',
      'Gather up-to-the-minute feedback and insight',
      'Easily share online intake forms',
    ],
    href: '/platform/intake-and-lead-tracking/',
    image:
      'https://vakilsearch.com/products/libra/judgements-web.svg',
  },
];

const Features = () => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className='fv-row'>
      <div className='sbs-layout' id='kGN-ai-accordion'>
        {features.map((feature, index) => (
          <>
            <div id={`card-${index + 1}`} className='card accordion-card'>
              <div className='card-header' id={`heading-${index + 1}`} onClick={() => setOpenTab(index)}>
                <button
                  className={`btn btn-link ${index == openTab ? 'expanded': 'collapsed'}`}
                  data-toggle='collapse'
                  data-target={`#kGN-ai-${index + 1}`}
                  aria-expanded='true'
                  aria-controls={`#kGN-ai-${index + 1}`}
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
                id={`kGN-ai-${index + 1}`}
                className={`accordion-content collapse ${openTab == index ? 'show' : ''}`}
                aria-labelledby={`#heading-${index + 1}`}
                data-parent='#kGN-ai-accordion'
            >
                <div className='card-body kGN-ai'>
                <div className='body-content'>
                    <ul>
                    {feature.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                </div>
                <a href={feature.href} className='link-arrow'>
                    Learn more&nbsp;<span>›</span>
                </a>
                </div>
            </div>
            </div>
            <div id={`media-body-${index + 1}`} className={`accordion-media ${openTab == index ? 'show' : 'collapse'}`} data-parent={`#card-${index + 1}`}>
              <figure>
                <picture>
                  <img className='img-fluid' src={feature.image} alt='' />
                </picture>
              </figure>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Features;
