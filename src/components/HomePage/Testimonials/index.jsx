import { useState } from 'react';

const testimonials = [
  {
    description:
      "I like the Libra app for the reason that it's a customised information hub for legal counsels like me. Further, it’s a complete case management system",
    customerName: 'Dr.V.V.L.N.Sastry',
    companyInfo: 'Legal Counsel,  Lex India Juris,  Mumbai HCB18990',
    profileImage: 'https://vakilsearch.com/products/libra/sastry.svg',
    companyLogo: '/assets/customers/leopold-associates-gray.svg',
  },
  {
    description:
      'LIBRA is the best App for lawyer. The best part is the uploading of daily orders, judgements, and pop-up of the daily hearing notifications.',
    customerName: 'Clement Roy',
    companyInfo: 'Bar Council of Maharashtra & Goa, MAH/160/1993',
    profileImage: 'https://vakilsearch.com/products/libra/roy.svg',
    companyLogo: '/assets/customers/lyfelaw-gray.svg',
  },
  {
    description:
      "LIBRA is a unique app for advocates & it's very helpful for hearings & order updates. Experts at LIBRA are very helpful with any queries.",
    customerName: 'S D Gadhvi',
    companyInfo: 'Enrollment number G/257/2004 Gujarat',
    profileImage: 'https://vakilsearch.com/products/libra/gandhvi.svg',
    companyLogo: '/assets/customers/grungo-colarulo-gray.svg',
  },
];
const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextClick = (e) => {
    e.preventDefault();
    setActiveTab((prev) => {
      if (prev + 1 >= testimonials.length) return 0;
      return prev + 1;
    });
  };

  const handlePreviousClick = (e) => {
    e.preventDefault();
    setActiveTab((prev) => {
      if (prev - 1 < 0) return testimonials.length - 1;
      return prev - 1;
    });
  };

  return (
    <section id='quote' className=''>
      <div className='fv-container'>
        <div className='panel-carousel-row justify-content-center'>
          <div
            id='testimonial-quotes-one'
            className='carousel slide carousel-fade panel-carousel'
            data-ride='carousel'
            data-interval='false'
          >
            <div className='carousel-inner'>
              <div className='panel-testimonials'>
                {testimonials.map(
                  (testimonial, index) =>
                    activeTab == index && (
                      <div key={index} className={`carousel-item ${activeTab == index ? 'active' : 'inactive'}`}>
                        <div className='panel-body'>
                          <div className='panel-content'>
                            <div className='kicker'>Testimonials</div>
                            <div className='quote mb-4'>“{testimonial.description}”</div>
                            <div className='customer-by-line'>
                              <div className='customer-name'>{testimonial.customerName}</div>,
                              <div className='customer-company-info'>{testimonial.companyInfo}</div>
                            </div>
                          </div>
                          <div className='panel-headshot'>
                            <picture>
                              <img src={testimonial.profileImage} alt='' />
                            </picture>
                          </div>
                        </div>
                        {false && (
                          <div className='pane pane-white-on-dark pane-logo'>
                            <img src={testimonial.companyLogo} alt='' loading='lazy' />
                          </div>
                        )}
                      </div>
                    ),
                )}
              </div>
            </div>
            <div className='panel-footer'>
              <a
                className='carousel-control-prev'
                href='#testimonial-quotes-one'
                role='button'
                data-slide='prev'
                onClick={handlePreviousClick}
              >
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#testimonial-quotes-one'
                role='button'
                data-slide='next'
                onClick={handleNextClick}
              >
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
              <ol className='carousel-indicators'>
                {testimonials
                  .map((item, index) => index)
                  .map((quote) => (
                    <li
                      key={quote}
                      data-slide-to={quote}
                      className={activeTab == quote ? 'active' : 'inactive'}
                      onClick={() => setActiveTab(quote)}
                    ></li>
                  ))}
              </ol>
            </div>
            {/* <div className='panel-section-cta'>
              <a href='/customers/' className='link-arrow'>
                More Testimonials &amp; Case Studies&nbsp;<span>›</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;