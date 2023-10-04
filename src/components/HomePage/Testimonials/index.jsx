const testimonials = [
    {
        description: 'My team always says that having Filevine is just like having three other people working for you in the background at all times.',
        customerName: 'Jason Brooks',
        companyInfo: 'Partner—Leopold & Associates, PLLC',
        profileImage: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-jason-brooks.png',
        companyLogo: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/leopold-associates-gray.svg'
    },
    {
        description: 'Filevine is pioneering a more sustainable and efficient way to practice law by providing an all-encompassing case management software.',
        customerName: 'Wendy Mejia',
        companyInfo: 'Director of Operations—LyfeLaw',
        profileImage: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-wendy-mejia.png',
        companyLogo: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/lyfelaw-gray.svg'
    },
    {
        description: 'Filevine is the central nervous system of our law firm. We not only use it for case management but also for human resources and marketing.',
        customerName: 'Bill Colarulo',
        companyInfo: 'Founding Attorney—Grungo Colarulo',
        profileImage: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-bill-colarulo.png',
        companyLogo: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/grungo-colarulo-gray.svg'
    },    {
        description: 'We can handle more cases with less staff and have shorter case lifecycles than ever before! Our clients are happy, and so are we!',
        customerName: 'Season Atkinson',
        companyInfo: 'Founding Attorney—Tatum & Atkinson',
        profileImage: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/headshots/2023/headshot-season-atkinson.png',
        companyLogo: 'https://filevine-marketing-production-media.s3.amazonaws.com/media/images/customers/tatum-and-atkinson-gray.svg'
    },
]
const Testimonials = () => {
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
                {
                    testimonials.map(testimonial => (
                        <div className='carousel-item active'>
                        <div className='panel-body'>
                            <div className='panel-content'>
                            <div className='kicker'>Testimonials</div>
                            <div className='quote mb-4'>
                                “{testimonial.description}”
                            </div>
                            <div className='customer-by-line'>
                                <div className='customer-name'>{testimonial.customerName}</div>
                                ,
                                <div className='customer-company-info'>{testimonial.companyInfo}</div>
                            </div>
                            </div>
                            <div className='panel-headshot'>
                            <picture>
                                <img
                                src={testimonial.profileImage}
                                alt=''
                                />
                            </picture>
                            </div>
                        </div>
                        <div className='pane pane-white-on-dark pane-logo'>
                            <img
                            src={testimonial.companyLogo}
                            alt=''
                            loading='lazy'
                            />
                        </div>
                        </div>
                    ))
                }
              </div>
            </div>
            <div className='panel-footer'>
              <a className='carousel-control-prev' href='#testimonial-quotes-one' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='carousel-control-next' href='#testimonial-quotes-one' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
              <ol className='carousel-indicators'>
                <li data-target='#testimonial-quotes-one' data-slide-to='0' className='active'></li>
                <li data-target='#testimonial-quotes-one' data-slide-to='1'></li>
                <li data-target='#testimonial-quotes-one' data-slide-to='2'></li>
                <li data-target='#testimonial-quotes-one' data-slide-to='3'></li>
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
