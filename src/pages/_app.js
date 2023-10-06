import { ToastContainer } from 'react-toastify';
import AuthLayout from '@/components/AuthLayout';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
      <AuthLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthLayout>
  );
}
