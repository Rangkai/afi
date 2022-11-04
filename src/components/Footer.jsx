import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <footer>
      <Container>
        <Flex justifyContent="space-between">
          <p>
            Apresiasi Film Indonesia 2022
          </p>
          <nav>
            <ul>
              <li>
                Program Oleh
              </li>
              <li>
                Bekerjasama Dengan
              </li>
            </ul>
          </nav>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;
