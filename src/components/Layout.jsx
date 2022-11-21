import { ChakraProvider } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import '../styles/global.scss';
import theme from '../theme/theme';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const ScrollOnTop = lazy(() => import('./ScrollOnTop'));

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Suspense fallback={null}>
        <Header />
        <ScrollOnTop />
        {children}
        <Footer />
      </Suspense>
    </ChakraProvider>
  );
}

export default Layout;
