import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import theme from '../theme/theme';

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      {children}
      <Footer />
    </ChakraProvider>
  );
}

export default Layout;
