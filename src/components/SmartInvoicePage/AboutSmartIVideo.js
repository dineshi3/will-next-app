import style from './style.module.scss';
import { Modal } from 'react-bootstrap';

const AboutSmartIVideo = ({ showVideo, setShowVideo }) => {
  return (
    <Modal
      show={showVideo}
      onHide={() => setShowVideo(false)}
      className="smartiVideoHolder"
      centered
    >
      <video
        controls
        autoPlay
        src="/assets/smart-i/smart_i_video.mp4"
        className={`${style.video} aboutsmartivedio`}
      />
    </Modal>
  );
};

export { AboutSmartIVideo };
