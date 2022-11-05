import {
  Box, Button, Container, Flex, Text, useDimensions,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';

function About({ data }) {
  const { getCol } = useLayout();
  const aboutBanner = getImage(data.file);
  const defaultImage = getImage(data.default);
  const ref = useRef();
  const dimensions = useDimensions(ref);

  return (
    <Layout>
      <GatsbyImage image={aboutBanner} alt={data.file.name} />
      <Container my="48px">
        <Flex justifyContent="center">
          <Box width={getCol(10)} textAlign="center">
            <Text as="h3" color="brandRed.500" fontWeight="700" fontSize="40px">
              Ximus repra doluptat in erum facest
            </Text>
            <Text color="brandBlue.500" fontSize="20px" fontWeight="600">
              Olor sumqui andis nonserum fugia sererit, ulla verum inctusda quam, inus, tem nonsero
              reptaspidel id eatem intin nonemposanda sapisimus volesciis saped unt essequam net
              a sent quaest auta ex et officiam eate pos adis ut pelest qui.
            </Text>
            <Flex justifyContent="center">
              <Box width={getCol(10)} textAlign="center">
                <Box mb="48px">
                  <Flex justifyContent="center">
                    {[1, 2, 3].map((item) => (
                      <Box
                        key={item}
                        width={getCol(4)}
                        textAlign="center"
                        px="12px"
                        ref={ref}
                      >
                        <Box
                          w="100%"
                          h={dimensions?.contentBox?.width}
                          border="2px solid"
                          borderColor="brandRed.500"
                        >
                          <Box as={GatsbyImage} image={defaultImage} alt="default" objectFit="cover" h="100%" w="100%" />
                        </Box>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Flex justifyContent="center">
                  <Box width={getCol(6)}>
                    <Button colorScheme="brandBlue" w="100%">
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
            <Text as="h3" color="brandRed.500" fontWeight="700" fontSize="40px">
              Aque voluptiant que qui con conseceste
            </Text>
            <Text color="brandBlue.500" fontSize="20px" fontWeight="600">
              Olor sumqui andis nonserum fugia sererit, ulla verum inctusda quam, inus, tem nonsero
              reptaspidel id eatem intin nonemposanda sapisimus volesciis saped unt essequam net
              a sent quaest auta ex et officiam eate pos adis ut pelest qui.
            </Text>
            <Flex justifyContent="center">
              <Box width={getCol(10)} textAlign="center">
                <Box mb="48px">
                  <Flex justifyContent="center">
                    {[1, 2, 3].map((item) => (
                      <Box
                        key={item}
                        width={getCol(4)}
                        textAlign="center"
                        px="12px"
                        ref={ref}
                      >
                        <Box
                          w="100%"
                          h={dimensions?.contentBox?.width}
                          border="2px solid"
                          borderColor="brandRed.500"
                        >
                          <Box as={GatsbyImage} image={defaultImage} alt="default" objectFit="cover" h="100%" w="100%" />
                        </Box>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Flex justifyContent="center">
                  <Box width={getCol(6)}>
                    <Button colorScheme="brandBlue" w="100%">
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
