import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import '../styles/global.scss';
import theme from '../theme/theme';
import Footer from './Footer';
import Header from './Header';
import ScrollOnTop from './ScrollOnTop';

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <ScrollOnTop />
      {children}
      <Footer />
    </ChakraProvider>
  );
}

export default Layout;
