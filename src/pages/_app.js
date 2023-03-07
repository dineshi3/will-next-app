import AppLayout from '@/components/AppLayout'
import AuthLayout from '@/components/AuthLayout'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return <AuthLayout>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </AuthLayout>
}
