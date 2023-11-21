import style from './style.module.scss';
import Image from 'next/image';
import content from '../../data/smartInvoice.json';

const AIpros = () => {
  return (
    <div className={style.aiProps}>
      <h3 className={style.title}>{content.aiPros.title}</h3>
      <div className={style.aiPropsImgWrapper}>
        {content.aiPros.items.map((item, index) => (
          <div className={style.card}>
            <img src={item.img} key={index} alt='AI-PROS' />
            <div className={style.details}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { AIpros };
