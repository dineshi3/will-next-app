import { Center, Flex, Title } from '@mantine/core';

import OptionButton from '../OptionButton';

import styles from './styles.module.scss';
import NavButton from '../NavButton';

const EligibilityStep = (props) => {
  const { onNextClick, onBackClick } = props;
  const { title, options } = props.question;

  return (
    <Center className={styles.stepContainer}>
      <Title order={1} my={24}>
        {title}
      </Title>
      <Flex gap='md' justify='space-between' align='center' direction='row' wrap='nowrap' w='100%'>
        {options && options.map((option) => <OptionButton onClick={onNextClick} key={option.name} {...option} />)}
      </Flex>
      <NavButton onClick={onBackClick} />
    </Center>
  );
};

export default EligibilityStep;
