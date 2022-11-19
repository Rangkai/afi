import {
  Box, Button, Container, Flex, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';
import useLayout from '../hooks/useLayout';

function About({ data }) {
  const { getCol } = useLayout();
  const aboutBanner = getImage(data.file);

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={aboutBanner}
        alt={data.file.name}
      />
      <Container my="48px">
        <Flex justifyContent="center">
          <Box width={getCol(10)} textAlign="center">
            <Heading
              as="h3"
              color="brandRed.500"
              fontWeight="700"
              fontSize={['28px', null, '40px']}
            >
              Ximus repra doluptat in erum facest
            </Heading>
            <Text color="brandBlue.500" fontSize="20px" fontWeight="600">
              Olor sumqui andis nonserum fugia sererit, ulla verum inctusda quam, inus, tem nonsero
              reptaspidel id eatem intin nonemposanda sapisimus volesciis saped unt essequam net
              a sent quaest auta ex et officiam eate pos adis ut pelest qui.
            </Text>
            <Flex justifyContent="center">
              <Box width={getCol(10)} textAlign="center">
                <Box mb="48px">
                  <SimpleGrid columns={[1, null, 3]} spacingX="24px" spacingY="48px">
                    {[1, 2, 3].map((item) => (
                      <Lightbox
                        image={data.default}
                        alt={data.default.name}
                        key={item}
                      >
                        <SquareImage
                          image={data.default}
                          alt="default"
                          mb="16px"
                        />
                      </Lightbox>
                    ))}
                  </SimpleGrid>
                </Box>
                <Flex justifyContent="center">
                  <Box width={['100%', null, getCol(6)]}>
                    <Button as={Link} to="/what" colorScheme="brandBlue" w="100%">
                      Apa dan Siapa
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent="center">
          <Box as="hr" width={getCol(10)} borderTop="1px solid" borderColor="brandRed.500" my="48px" />
        </Flex>

        <Flex justifyContent="center">
          <Box width={getCol(10)} textAlign="center">
            <Heading
              as="h3"
              color="brandRed.500"
              fontWeight="700"
              fontSize={['28px', null, '40px']}
            >
              Aque voluptiant que qui con conseceste
            </Heading>
            <Text color="brandBlue.500" fontSize="20px" fontWeight="600">
              Olor sumqui andis nonserum fugia sererit, ulla verum inctusda quam, inus, tem nonsero
              reptaspidel id eatem intin nonemposanda sapisimus volesciis saped unt essequam net
              a sent quaest auta ex et officiam eate pos adis ut pelest qui.
            </Text>
            <Flex justifyContent="center">
              <Box width={getCol(10)} textAlign="center">
                <Box mb="48px">
                  <SimpleGrid columns={[1, null, 3]} spacingX="24px" spacingY="48px">
                    {[1, 2, 3].map((item) => (
                      <Lightbox
                        image={data.default}
                        alt={data.default.name}
                        key={item}
                      >
                        <SquareImage
                          image={data.default}
                          alt="default"
                          mb="16px"
                        />
                      </Lightbox>
                    ))}
                  </SimpleGrid>
                </Box>
                <Flex justifyContent="center">
                  <Box width={['100%', null, getCol(6)]}>
                    <Button
                      as={Link}
                      to="/how"
                      colorScheme="brandBlue"
                      w="100%"
                      whiteSpace="break-spaces"
                    >
                      Mengapa dan Bagaimana
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default About;

export function Head() {
  return <SEO title="Tentang AFI - Apresiasi Film Indonesia" />;
}

export const query = graphql`
  query AboutPageQuery {
    file(relativePath: {eq: "about/about_banner.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    default: file(relativePath: {eq: "default.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
