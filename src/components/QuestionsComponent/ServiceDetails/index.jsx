import { Box, Button, Paper, Title } from '@mantine/core';

import NavButton from '../NavButton/index.jsx';
import Benefit from './Benefit/index.jsx';
import ReviewRating from './ReviewRating/index.jsx';

import { BENEFITS, content } from './data.js';

import styles from './styles.module.scss';

const ServiceDetails = (props) => {
  const { onBackClick, onConfirm } = props;
  return (
    <Box maw={500} mx='auto'>
      <Title order={1} size={40} weight={500} maw={280} my={24} mx={'auto'} align='center'>
        {content.title}
      </Title>
      <ReviewRating />
      <Paper p='sm' withBorder>
        {Object.values(BENEFITS).map((benefit, index) => (
          <Benefit key={index} benefit={benefit} />
        ))}
        <Button className={styles.button} color='violet' size='md' onClick={onConfirm}>
          Continue Online
        </Button>
      </Paper>
      <NavButton className={styles.navButton} onClick={onBackClick} />
    </Box>
  );
};

export default ServiceDetails;
