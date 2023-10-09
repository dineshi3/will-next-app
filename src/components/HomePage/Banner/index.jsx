import parse from 'html-react-parser';

import NavBar from '../NavBar';

const Banner = (props) => {
  const { content, onClick } = props;

  const { navbar, banner } = content;

  return (
    <header className='hero exhibition pine'>
      <NavBar {...props} content={navbar} />
      <div className='fv-container'>
        <div className='intro'>
          <div className='headlines'>
            <h1>{parse(banner.title)}</h1>
            <div className='cta'>
              <a href='#' id='home-cta-demo' className='btn btn-primary' onClick={onClick}>
                Get a Demo
              </a>
              {/* <a href='https://vakilsearch.com/products/libra/pricing' id='home-cta-pricing' className='btn btn-primary-outline'>
                See Our Pricing
              </a> */}
            </div>
          </div>
        </div>
        <div className='exhibition-media'>
          <div
            id='exhibition-carousel'
            className='carousel slide carousel-fade'
            data-ride='carousel'
            data-interval='3000'
          >
            <div className='carousel-inner'>
              {banner.images.map((image, index) => (
                <div className={`carousel-item ${index == 0 ? 'active' : 'inactive'}`} key={index}>
                  <picture>
                    <img className='d-block w-100' {...image} />
                  </picture>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
