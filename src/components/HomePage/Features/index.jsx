import { Fragment, useState } from 'react';

const Features = (props) => {
  const { content } = props;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className='fv-row'>
      <div className='sbs-layout' id='kGN-ai-accordion'>
        {content.features.map((feature, index) => (
          <Fragment key={index}>
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
                <a className='link-arrow'>
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Features;
