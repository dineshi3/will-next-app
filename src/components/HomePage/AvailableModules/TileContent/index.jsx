import Image from 'next/image';
import Router from 'next/router';

import styles from './styles.module.scss';

const TileContent = ({ item }) => {

  const handleGetStartedClick = () => {
    Router.push(`${process.env.VAKILSEARCH_LIBRA_URL}/onboarding`);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.bodyContent}>
        <Image
          src={`${process.env.VAKILSEARCH_LIBRA_URL}${item.image}`}
          className={styles.featureIcon}
          width={320}
          height={212}
          alt='feature-logo'
        />
        <div className={styles.textMainContainer}>
          <div className={styles.textContainer}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.desc}</p>
          </div>
          <button onClick={handleGetStartedClick} className={`btn btn-primary ${styles.btn}`}>
            Get started
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_134_2439)'>
                <path
                  d='M11.9082 4.7584C11.5832 5.0834 11.5832 5.6084 11.9082 5.9334L15.1415 9.16673H2.49984C2.0415 9.16673 1.6665 9.54173 1.6665 10.0001C1.6665 10.4584 2.0415 10.8334 2.49984 10.8334H15.1498L11.9165 14.0667C11.5915 14.3917 11.5915 14.9167 11.9165 15.2417C12.2415 15.5667 12.7665 15.5667 13.0915 15.2417L17.7498 10.5834C18.0748 10.2584 18.0748 9.7334 17.7498 9.4084L13.0832 4.7584C12.7665 4.4334 12.2332 4.4334 11.9082 4.7584Z'
                  fill='#022B50'
                />
              </g>
              <defs>
                <clipPath id='clip0_134_2439'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileContent;
