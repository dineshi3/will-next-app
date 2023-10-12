import { useEffect, useState } from 'react';
import style from './style.module.scss';

const Working = () => {

  return (
    <div className={style.working}>
      <h3 className={style.title}>How does Smart i Invoice Automation work?</h3>
      <div className={style.workingImageGif}>
        <img
          src="/assets/smart-i/Invex_gif_web.gif"
          alt="working-explain"
          style={{ width: '100%' }}
          className={style.desktop}
        />
        <img
          src="/assets/smart-i/Invex_gif_mobile.gif"
          alt="working-explain"
          style={{ width: '100%' }}
          className={style.mobile}
        />
      </div>
    </div>
  );
};

export { Working };
