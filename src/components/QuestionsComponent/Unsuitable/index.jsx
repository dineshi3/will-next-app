import { Box, Title, Text } from '@mantine/core';

const Unsuitable = () => {
  return (
    <Box maw={400} align='center'>
      <Title order={1}>Sorry, our service doesn’t cover business assets</Title>
      <Text my={24}>Our online and telephone will writing services only cover personal assets.</Text>
      <Text>
        For now, talking through the details face-to-face with a legal provider or solicitor may be a better fit.
      </Text>
    </Box>
  );
};

export default Unsuitable;
