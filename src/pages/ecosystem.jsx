import {
  Box, Button, Container, Flex, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';
import useLayout from '../hooks/useLayout';

function Ecosystem({ data }) {
  const { getCol } = useLayout();
  const ecosystemBanner = getImage(data.file);
  const cities = data.cities.nodes;

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={ecosystemBanner}
        alt={data.file.name}
      />
      <Container my="48px">
        <Flex justifyContent="center" mb="48px">
          <Box w={['100%', null, getCol(10)]} textAlign="center">
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="700"
              color="brandRed.500"
            >
              Nemporest Estruptatus Minum et Latiaep Eribus
            </Heading>
            <Text fontSize="20px" fontWeight="600" color="brandBlue.500" mb="24px">
              Apresiasi Film Indonesia 2022 hendak menyasar realitas material dari ekosistem
              perfilman lokal di sepuluh kota. Realitas material yang dimaksud meliputi ragam
              wujud dan tingkat intensitas kegiatan produksi dan/atau ekshibisi film di setiap kota.
            </Text>
          </Box>
        </Flex>
        <SimpleGrid columns={[1, null, 2]} spacingX="20px" spacingY="48px">
          {cities.map((city) => (
            <Flex key={city.id} flexWrap="wrap">
              <Lightbox
                image={city.frontmatter.thumb}
                alt={city.frontmatter.title}
                mr={[0, null, '24px']}
                mb={['16px', null, 0]}
                width={['100%', null, getCol(5)]}
              >
                <SquareImage
                  image={city.frontmatter.thumb}
                  alt={city.frontmatter.title}
                />
              </Lightbox>
              <Box w={['100%', null, getCol(6)]} pl={[0, null, '12px']}>
                <Text fontSize={['24px', null, '32px']} fontWeight="700" color="brandRed.500">
                  {city.frontmatter.title}
                </Text>
                <Text fontSize="16px" fontWeight="600" color="brandBlue.500" mb="16px">
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
    cities: allMdx {
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
