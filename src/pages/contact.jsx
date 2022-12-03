import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Box, Button, Container, Flex, LinkBox, LinkOverlay, SimpleGrid, Text,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';

function Contact({ data }) {
  const banner = getImage(data.file);
  const { getCol } = useLayout();

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={banner}
        alt={data.file.name}
      />
      <Container>
        <Flex justifyContent="center">
          <Box w={['100%', null, getCol(10)]}>
            <SimpleGrid
              columns={[1, null, 2]}
              spacingX="40px"
              spacingY="32px"
              py={['20px', null, '200px']}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize={['20px', null, '28px']} color="brandRed.500" fontWeight="bold">
                  Rangkai
                </Text>
                <LinkBox w="100%">
                  <LinkOverlay
                    href="mailto:business@rangkai.id"
                    isExternal
                  >
                    <Button colorScheme="brandBlue" w="100%">
                      business@rangkai.id
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize={['20px', null, '28px']} color="brandRed.500" fontWeight="bold">
                  Cinema Poetica
                </Text>
                <LinkBox w="100%">
                  <LinkOverlay
                    href="mailto:admin@cinemapoetica.com"
                    isExternal
                  >
                    <Button colorScheme="brandBlue" w="100%">
                      admin@cinemapoetica.com
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </Flex>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Contact;

export const query = graphql`
  query ContactPageQuery {
    file(relativePath: {eq: "AFI_Hubungi Hero.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
