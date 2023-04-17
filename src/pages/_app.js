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
        colors: {
          'zolvitBlue': [
              "#011B32",
              "#023564",
              "#045095",
              "#056BC7",
              "#0686F9",
              "#339CFA",
              "#022B50",
              "#8DC7FC",
              "#B9DDFD",
              "#02250"
          ],
        },
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
