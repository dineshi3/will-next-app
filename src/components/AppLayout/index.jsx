import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import AppNavbar from '../AppNavbar';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

export default function AppLayout(props) {
  const { children } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const commons = { opened, theme };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      header={<AppHeader {...commons} onNavToggle={() => setOpened((prev) => !prev)} />}
      navbar={<AppNavbar {...commons} />}
      footer={<AppFooter />}
    >
      {children}
    </AppShell>
  );
}
