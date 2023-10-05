import NavBar from '../NavBar';

const Banner = (props) => {
  const { onClick } = props;

  return (
    <header className='hero exhibition pine'>
      <NavBar {...props} />
      <div className='fv-container'>
        <div className='intro'>
          <div className='headlines'>
            <h1>
              Your Complete Legal Tech Stack, <span className='highlight'>Supercharged</span> by AI
            </h1>
            <div className='cta'>
              <a href='#' id='home-cta-demo' className='btn btn-primary' onClick={onClick}>
                Get a Demo
              </a>
              <a href='/pricing/' id='home-cta-pricing' className='btn btn-primary-outline'>
                See Our Pricing
              </a>
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
              <div className='carousel-item'>
                <picture>
                  <img
                    src='https://vakilsearch.com/products/libra/home.svg'
                    className='d-block w-100'
                    alt='App Screen: Activity Tab with project updates and vitals'
                  />
                </picture>
              </div>
              <div className='carousel-item active'>
                <picture>
                  <img src='https://vakilsearch.com/products/libra/home.svg' className='d-block w-100' alt='' />
                </picture>
              </div>
              <div className='carousel-item'>
                <picture>
                  <img src='https://vakilsearch.com/products/libra/home.svg' className='d-block w-100' alt='' />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
