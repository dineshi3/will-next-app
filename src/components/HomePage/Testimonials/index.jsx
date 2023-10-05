import { useState } from "react";

const testimonials = [
  {
    description:
      'My team always says that having LegalFile is just like having three other people working for you in the background at all times.',
    customerName: 'Jason Brooks',
    companyInfo: 'Partner—Leopold & Associates, PLLC',
    profileImage:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-jason-brooks.png',
    companyLogo:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/leopold-associates-gray.svg',
  },
  {
    description:
      'LegalFile is pioneering a more sustainable and efficient way to practice law by providing an all-encompassing case management software.',
    customerName: 'Wendy Mejia',
    companyInfo: 'Director of Operations—LyfeLaw',
    profileImage:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-wendy-mejia.png',
    companyLogo: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/lyfelaw-gray.svg',
  },
  {
    description:
      'LegalFile is the central nervous system of our law firm. We not only use it for case management but also for human resources and marketing.',
    customerName: 'Bill Colarulo',
    companyInfo: 'Founding Attorney—Grungo Colarulo',
    profileImage:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-bill-colarulo.png',
    companyLogo:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/grungo-colarulo-gray.svg',
  },
  {
    description:
      'We can handle more cases with less staff and have shorter case lifecycles than ever before! Our clients are happy, and so are we!',
    customerName: 'Season Atkinson',
    companyInfo: 'Founding Attorney—Tatum & Atkinson',
    profileImage:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-season-atkinson.png',
    companyLogo:
      'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/tatum-and-atkinson-gray.svg',
  },
];
const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextClick = (e) => {
    e.preventDefault();
    setActiveTab(prev => {
        if(prev + 1 >= testimonials.length)
            return 0;
        return prev + 1;
    })
  }

  const handlePreviousClick = (e) => {
    e.preventDefault();
    setActiveTab(prev => {
        if(prev - 1 < 0)
            return testimonials.length - 1;
        return prev - 1;
    })
  }


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
                {testimonials.map((testimonial, index) => (
                    activeTab == index &&
                  <div className={`carousel-item ${activeTab == index ? 'active' : 'inactive'}`}>
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
                    <div className='pane pane-white-on-dark pane-logo'>
                      <img src={testimonial.companyLogo} alt='' loading='lazy' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='panel-footer'>
              <a className='carousel-control-prev' href='#testimonial-quotes-one' role='button' data-slide='prev' onClick={handlePreviousClick}>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='carousel-control-next' href='#testimonial-quotes-one' role='button' data-slide='next' onClick={handleNextClick}>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
              <ol className='carousel-indicators'>
                {
                    [0, 1, 2, 3].map(quote => (
                        <li data-slide-to={quote} className={activeTab == quote ? 'active' : 'inactive'} onClick={() => setActiveTab(quote)}></li>
                    ))
                }
              </ol>
            </div>
            <div className='panel-section-cta'>
              <a href='/customers/' className='link-arrow'>
                More Testimonials &amp; Case Studies&nbsp;<span>›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
