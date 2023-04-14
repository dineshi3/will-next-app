import { Button } from '@mantine/core';

import styles from './styles.module.scss';

const LeftArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='24'
      style={{ fill: 'rgb(141, 148, 149)', marginTop: '4px' }}
    >
      <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
    </svg>
  );
};

const NavButton = (props) => {
  return (
    <Button
      {...props}
      className={`${styles.container} ${props.className}`}
      leftIcon={<LeftArrow />}
      variant='white'
      size='xl'
      color='gray'
    >
      Back
    </Button>
  );
};

export default NavButton;
