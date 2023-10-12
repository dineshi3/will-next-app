import Slider from 'react-slick';
import style from './style.module.scss';

const Tutorial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };

  const sliderImgs = [
    '/assets/smart-i/SmartiCarouselImg1.svg',
    '/assets/smart-i/SmartiCarouselImg2.svg',
    '/assets/smart-i/SmartiCarouselImg3.svg',
  ];

  return (
    <div className={style.slider}>
      <Slider {...settings}>
        {sliderImgs.map((src, index) => (
          <img
            key={index}
            className={style.sliderImage}
            alt="smarti-tutorial"
            src={src}
          />
        ))}
      </Slider>
    </div>
  );
};

export { Tutorial };
/* <div className={style.slickss}>Hello</div>
        <div className={style.slickss}>Hello</div>
        <div className={style.slickss}>Hello</div>*/
