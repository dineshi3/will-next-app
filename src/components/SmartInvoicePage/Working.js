import { useEffect, useState } from 'react';
import style from './style.module.scss';

const Working = () => {
  //state
  const [windowSize, setWindowSize] = useState(false);
  //effects
  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  const getWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <div className={style.working}>
      <h3 className={style.title}>How does Smart i Invoice Automation work?</h3>
      <div className={style.workingImageGif}>
        {windowSize > 500 ? (
          <img
            src="/assets/smart-i/Invex_gif_web.gif"
            alt="working-explain"
            style={{ width: '100%' }}
          />
        ) : (
          <img
            src="/assets/smart-i/Invex_gif_mobile.gif"
            alt="working-explain"
            style={{ width: '100%' }}
          />
        )}
      </div>
    </div>
  );
};

export { Working };
