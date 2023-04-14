import { Center, Flex, Title } from '@mantine/core';

import OptionButton from '../OptionButton';

import styles from './styles.module.scss';
import NavButton from '../NavButton';

const EligibilityStep = (props) => {
  const { onOptionClick, onBackClick } = props;
  const { title, options } = props.question;

  const handleOptionClick = (index) => {
    onOptionClick({ ...props.question, checkedIndex: index });
  };

  return (
    <Center className={styles.stepContainer}>
      <Title order={1} my={24}>
        {title}
      </Title>
      <Flex gap='md' justify='space-between' align='stretch' direction='row' wrap='nowrap' w='100%'>
        {options &&
          options.map((option, index) => (
            <OptionButton onClick={() => handleOptionClick(index)} key={option.name} index={index} {...option} />
          ))}
      </Flex>
      <NavButton onClick={onBackClick} className={styles.navButton} />
    </Center>
  );
};

export default EligibilityStep;
