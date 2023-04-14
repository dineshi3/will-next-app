import { Box } from '@mantine/core';

import TrustPilotLogo from '@/assets/trustpilot.svg';

import styles from './styles.module.scss';

const StarIcon = () => {
  return (
    <div className={styles.star}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        style={{ fill: 'rgba(255, 255, 255, 1)' }}
      >
        <path d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'></path>
      </svg>
    </div>
  );
};

const ReviewRating = () => {
  return (
    <Box className={styles.ratingContainer}>
      <div className={styles.row}>
        <p>Excellent</p>
        <div className={styles.stars}>
          {[1, 1, 1, 1, 1].map((star) => (
            <StarIcon />
          ))}
        </div>
      </div>
      <div className={styles.reviews}>
        <p>13,609 reviews on</p>
        <img src={TrustPilotLogo.src} alt='logo' />
      </div>
    </Box>
  );
};

export default ReviewRating;
