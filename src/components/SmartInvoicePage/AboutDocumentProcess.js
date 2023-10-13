import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import content from '../../data/smartInvoice.json';

const DocumentProcess = () => {
  const getLoginLink = () => {
    return (
      <Link href="/login">
        <p className={style.loginLink}>
          Contact us
          <img
            src="/assets/smart-i/BlueArrow.svg"
            width="14px"
            height="14px"
            alt="arrow"
          />
        </p>
      </Link>
    );
  };
  return (
    <div className={style.aboutDocumentProcess}>
      <h3 className={style.title}>{content.processingTitle}</h3>
      <div className={style.explainProcessing}>
        {content.processingItems.map((items, index) => {
          return (
            <div className={style.explainProcessingItems} key={index}>
              <img
                src={items.image}
                width={60}
                height={60}
                alt="proceesing-docs"
              />
              <h6 className="pb-4">{items.title}</h6>
              <p>{items.content}</p>
              {false && getLoginLink()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { DocumentProcess };
