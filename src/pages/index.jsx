import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <ChakraProvider>
      <div>Hello world!</div>
    </ChakraProvider>
  );
}
