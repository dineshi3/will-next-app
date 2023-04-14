import { Text, Paper, Title } from '@mantine/core';

import styles from './styles.module.scss';

const OptionButton = (props) => {
  const { name, description, onClick } = props;
  return (
    <Paper shadow='sm' p='xl' mih={165} w='100%' align='center' withBorder className={styles.card} onClick={onClick}>
      <Title order={3} mb={24}>
        {name}
      </Title>
      {description && <Text size='lg'>{description}</Text>}
    </Paper>
  );
};

export default OptionButton;
