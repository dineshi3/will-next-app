import { MantineProvider } from '@mantine/core';

import AppLayout from '@/components/AppLayout';
import AuthLayout from '@/components/AuthLayout';

import '@/styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <AuthLayout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthLayout>
    </MantineProvider>
  );
}
