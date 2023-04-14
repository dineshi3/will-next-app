import CheckIcon from '@/icons/CheckIcon';
import { Box, Text, Title } from '@mantine/core';

import styles from './styles.module.scss';

const Benefit = (props) => {
  const { benefit } = props;
  return (
    <Box className={styles.container} p='sm'>
      <div className={styles.left}>
        <CheckIcon />
      </div>
      <div className={styles.right}>
        <Title order={3}>{benefit.label}</Title>
        <Text className={styles.text} size={18}>
          {benefit.description}
        </Text>
      </div>
    </Box>
  );
};

export default Benefit;
