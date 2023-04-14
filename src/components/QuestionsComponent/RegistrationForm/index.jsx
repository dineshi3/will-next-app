import Link from 'next/link';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Title, Text, Flex, Checkbox } from '@mantine/core';

import content from './content.json';

import styles from './styles.module.scss';

const initialValues = content.form.fields.reduce((values, field) => {
  if (field.type == 'checkbox') values[field.name] = false;
  else values[field.name] = '';
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

const RegistrationForm = (props) => {
  const form = useForm({
    initialValues: initialValues,
    validate: validation,
  });

  return (
    <Box w={500} mx='auto'>
      <Title order={1} size={40} weight={500} my={24} className={styles.title}>
        {content.title}
      </Title>

      <Text size={18} my={48} className={styles.description}>
        {content.description}
      </Text>

      <form onSubmit={form.onSubmit(console.log)}>
        {content.form.fields.map(({ label, name, placeholder, type }) => {
          if (type == 'checkbox')
            return <Checkbox size='lg' mt='md' label={label} {...form.getInputProps(name, { type })} />;
          return (
            <TextInput
              key={name}
              my={24}
              size='xl'
              label={placeholder}
              placeholder={`Enter ${label}`}
              {...form.getInputProps(name)}
            />
          );
        })}

        <Button className={styles.primaryButton} color='violet' size='md' onClick={'onConfirm'}>
          Register
        </Button>

        <Text align='center'>
          Already have a Farewill account? <Link href={'/login'}>Log in</Link>{' '}
        </Text>
      </form>
    </Box>
  );
};

export default RegistrationForm;
