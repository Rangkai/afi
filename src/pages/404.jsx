import {
  Flex, Container, Text, Button,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function NotFound404() {
  return (
    <Layout>
      <Container minH="calc(100vh - 342px)">
        <Flex justifyContent="center" minH="calc(100vh - 342px)" alignItems="center" flexDirection="column">
          <Text
            color="brandRed.500"
            fontSize={['24px', null, '32px']}
            marginBottom="16px"
            fontWeight="600"
          >
            Maaf halaman tidak ditemukan
          </Text>
          <Button variant="ghost" as={Link} to="/" colorScheme="brandRed">
            Kembali ke Beranda
          </Button>
        </Flex>
      </Container>
    </Layout>
  );
}

export default NotFound404;

export function Head() {
  return <SEO />;
}
