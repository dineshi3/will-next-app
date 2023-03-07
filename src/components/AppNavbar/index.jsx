import { Navbar, Text } from '@mantine/core';
const AppNavbar = (props) => {
  const { opened } = props;
  return (
    <Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 150, lg: 200 }}>
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export default AppNavbar;
