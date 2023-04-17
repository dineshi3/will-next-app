import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Title, Text, Flex } from '@mantine/core';

import content from './content.json';
import NavButton from '../NavButton';

const initialValues = content.form.fields.reduce((values, field) => {
  values[field.name] = '';
  return values;
}, {});

const validation = content.form.fields.reduce((validation, field) => {
  validation[field.name] = (value) => {
    if (!value && field.required) return `${field.label} is required`;
    if (field.regex) return new RegExp(field.regex).test(value) ? null : `${field.label} is invalid`;
    return null;
  };
  return validation;
}, {});

const WaitingListForm = (props) => {
  const { onBackClick } = props;
  const form = useForm({
    initialValues: initialValues,
    validate: validation,
  });

  return (
    <Box maw={500} mx='auto'>
      <Title order={1} size={40} weight={500} my={24}>
        {content.title}
      </Title>

      <Text size={18} my={48}>
        {content.description}
      </Text>

      <form onSubmit={form.onSubmit(console.log)}>
        {content.form.fields.map(({ label, name, placeholder }) => (
          <TextInput
            key={name}
            my={24}
            size='xl'
            label={placeholder}
            placeholder={`Enter ${label}`}
            {...form.getInputProps(name)}
          />
        ))}
        <Flex gap='md' justify='space-between' align='center' direction='row' wrap='nowrap' w='100%'>
          <NavButton onClick={onBackClick} />
          <Button color='zolvitBlue' variant='filled' size='xl' type='submit'>
            Done
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default WaitingListForm;
