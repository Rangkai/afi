import {
  Box, Container, Flex, SimpleGrid, Text, Button, useDimensions,
} from '@chakra-ui/react';
import { Link as LinkGatsby, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import useLayout from '../hooks/useLayout';

function Ecosystem({ data }) {
  const { getCol } = useLayout();
  const ref = useRef();
  const dimensions = useDimensions(ref);
  const ecosystemBanner = getImage(data.file);
  const cities = data.cities.nodes;

  return (
    <Layout>
      <GatsbyImage image={ecosystemBanner} alt={data.file.name} />
      <Container my="48px">
        <Flex justifyContent="center" mb="48px">
          <Box w={getCol(10)} textAlign="center">
            <Text as="h3" fontSize="40px" fontWeight="700" color="brandRed.500">
              Nemporest Estruptatus Minum et Latiaep Eribus
            </Text>
            <Text fontSize="20px" fontWeight="600" color="brandBlue.500" mb="24px">
              Apresiasi Film Indonesia 2022 hendak menyasar realitas material dari ekosistem
              perfilman lokal di sepuluh kota. Realitas material yang dimaksud meliputi ragam
              wujud dan tingkat intensitas kegiatan produksi dan/atau ekshibisi film di setiap kota.
            </Text>
          </Box>
        </Flex>
        <SimpleGrid columns={[1, null, 2]} spacingX="20px" spacingY="48px">
          {cities.map((city) => (
            <Flex key={city.id}>
              <Box
                width={getCol(5)}
                textAlign="center"
                pr="24px"
                ref={ref}
              >
                <Box
                  w="100%"
                  h={dimensions?.contentBox?.width}
                  border="2px solid"
                  borderColor="brandRed.500"
                >
                  <Box
                    as={GatsbyImage}
                    image={getImage(city.frontmatter.thumb)}
                    alt={city.frontmatter.title}
                    objectFit="cover"
                    h="100%"
                    w="100%"
                  />
                </Box>
              </Box>
              <Box w={getCol(6)} pl="12px">
                <Text fontSize="32px" fontWeight="700" color="brandRed.500">
                  {city.frontmatter.title}
                </Text>
                <Text fontSize="16px" fontWeight="600" color="brandBlue.500">
                  {city.frontmatter.desc}
                </Text>
                <Button as={LinkGatsby} to={`/${city.frontmatter.slug}`} colorScheme="brandRed">
                  Explore More
                </Button>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Ecosystem;

export function Head() {
  return <SEO title="Ekosistem AFI - Apresiasi Film Indonesia" />;
}

export const query = graphql`
  query EcosystemPageQuery {
    file(relativePath: {eq: "ecosystem/ecosystem_banner.jpg"}) {
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
    cities: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          desc
        }
        id
      }
    }
  }
`;
