import style from './style.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';

//import { Tutorial } from './tutorial';
import { AboutSmartIVideo } from './AboutSmartIVideo';
import content from '../../data/smartInvoice.json';
/**/
const About = (props) => {
  //state
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className={style.about}>
      <h1 className={style.mainTitle}>{parse(content.mainTitle1)}</h1>
      {<h1 className={style.mainTitle}>{content.mainTitle2}</h1>}
      <div className={style.subIntro}>{content.subTitle}</div>
      <div className={style.navigationButtons}>
        <NavigationButtons {...props} />
      </div>
      <div className={style.Video_and_Image_Conatiner}>
        {!showVideo && <div className={style.playbutton} onClick={() => setShowVideo(true)} />}
        <img
          src='/assets/smart-i/VideoThumbnail.png'
          alt='video_skelton'
          className={style.videoImageSkelton}
          style={{ width: '100%' }}
        />
        <AboutSmartIVideo showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
    </div>
  );
};

const NavigationButtons = (props) => {
  return (
    <div className={style.navButtons}>
      {false && (
        <Link href='/login'>
          <button type='button' className={style.tryFreeButton}>
            TRY FOR FREE
          </button>
        </Link>
      )}
      <button type='button' className={style.bookDemoBtn} onClick={props.onClick}>
        Book a Demo
      </button>
    </div>
  );
};

export { About, NavigationButtons };
