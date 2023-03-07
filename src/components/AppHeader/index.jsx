import { Header, Text, MediaQuery, Burger } from '@mantine/core';

const AppHeader = (props) => {
  const { theme, opened } = props;
  const { onNavToggle } = props;
  return (
    <Header height={{ base: 50 }} p='xs'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={onNavToggle} size='sm' color={theme.colors.gray[6]} mr='xl' />
        </MediaQuery>
        <Text>Application header</Text>
      </div>
    </Header>
  );
};

export default AppHeader;
