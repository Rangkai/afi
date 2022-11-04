import {
  Box, Button, Container, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.scss';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box as="section" textAlign="center" display="flex" justifyContent="center">
          <Box width={['100%', null, '83.33%']}>
            <Heading
              as="h3"
              color="brandRed.500"
              fontSize="40px"
              marginBottom="8px"
            >
              Tentang Program
            </Heading>
            <Text color="brandBlue.500" fontWeight="600">
              Untuk mengapresiasi film Indonesia seluas-luasnya, perlu diusahakan berbagai cara
              untuk memperkenalkan keragamannya. APRESIASI FILM INDONESIA 2022 adalah upaya untuk
              menelusuri akar dan ranting budaya perfilman di Indonesia melalui kolaborasi pendataan
              dan kuratorial. Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan, Riset,
              dan Teknologi dan dikelola oleh Cinema Poetica dan Rangkai.
            </Text>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={['16px', null, '24px']}
              width={['100%', null, '83.33%']}
              mx={[null, 'auto']}
            >
              <Button colorScheme="brandBlue">
                Apa dan Siapa
              </Button>
              <Button colorScheme="brandBlue">
                Mengapa dan Bagaimana
              </Button>
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
