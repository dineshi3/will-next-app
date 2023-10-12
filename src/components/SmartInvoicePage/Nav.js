import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import SmartEye from './SmartiLogo';
import Link from 'next/link';
import style from './style.module.scss';

const HomeNav = (props) => {
  //state
  const [scrolled, setScrolled] = useState(false);
  const [resolution, setResolution] = useState(null);
  //effects
  useEffect(() => {
    setResolution(window.innerWidth);
    window.addEventListener('scroll', getScrollPosition);
    window.addEventListener('resize', getScreenSize);
    return () => {
      window.removeEventListener('scroll', getScrollPosition);
      window.removeEventListener('resize', getScreenSize);
    };
  }, []);

  const getScreenSize = () => {
    setResolution(window.innerWidth);
  };

  const getScrollPosition = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={scrolled ? style.navScrolled : style.nav}>
      {scrolled ? <SmartEye /> : <Logo />}
      {resolution && (
        <div className={style.buttonContainer}>
          {false && resolution > 500 && (
            <Link href='/login'>
              <button type='button' className={style.tryForFree}>
                TRY FOR FREE
              </button>
            </Link>
          )}
          <button type='button' className={style.bookDemo} onClick={props.onClick}>
            Book a Demo
          </button>
        </div>
      )}
    </div>
  );
};

export { HomeNav };
