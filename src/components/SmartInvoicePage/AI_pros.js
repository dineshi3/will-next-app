import style from './style.module.scss';
import Image from 'next/image';
import content from '../../data/smartInvoice.json';

const AIpros = () => {
  return (
    <div className={style.aiProps}>
      <h3 className={style.title}>{content.aiPros.title}</h3>
      <div className={style.aiPropsImgWrapper}>
        {content.aiPros.images.map((src, index) => (
          <Image src={src} key={index} alt="AI-PROS" width={343} height={360} />
        ))}
      </div>
    </div>
  );
};

export { AIpros };
