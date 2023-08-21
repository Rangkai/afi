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

function Tentang({ data }) {
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
            <SimpleGrid columns={[1, null, 2]} gap="60px">
              <Flex alignItems="center" flexDirection="column">
                <Box width={getCol(11)}>
                  <Heading
                    as="h3"
                    color="brandRed.500"
                    fontWeight="700"
                    fontSize={['28px', null, '40px']}
                  >
                    Apresiasi Film Indonesia
                  </Heading>
                  <Text width={getCol(10)} mx="auto" color="brandBlue.500" fontSize="20px" fontWeight="600">
                    Tak kenal maka tak tayang. Untuk mengapresiasi film Indonesia
                    seluas-luasnya, perlu diupayakan berbagai cara untuk mengenali
                    dan mewadahi keragamannya.
                  </Text>
                  <Lightbox
                    image={data.whatImg}
                    alt={data.whatImg.name}
                    width={getCol(10)}
                    mx="auto"
                  >
                    <SquareImage
                      image={data.whatImg}
                      alt={data.whatImg.name}
                      mb="32px"
                      mt="54px"
                    />
                  </Lightbox>
                </Box>
                <Button as={Link} to="/what" colorScheme="brandBlue" w="100%">
                  Apa dan Siapa
                </Button>
              </Flex>
              <Flex alignItems="center" flexDirection="column">
                <Box width={getCol(11)}>
                  <Heading
                    as="h3"
                    color="brandRed.500"
                    fontWeight="700"
                    fontSize={['28px', null, '40px']}
                  >
                    Kolaborasi Pendataan dan Penayangan
                  </Heading>
                  <Text color="brandBlue.500" fontSize="20px" fontWeight="600">
                    Perfilman Indonesia tumbuh dan berkembang lewat
                    kegiatan komunitas. Di sepuluh kota, Apresiasi
                    Film Indonesia menelusuri berbagi bentuk budaya
                    sinema lewat kolaborasi lintas batas.
                  </Text>
                  <Lightbox
                    image={data.howImg}
                    alt={data.howImg.name}
                    width={getCol(10)}
                    mx="auto"
                  >
                    <SquareImage
                      image={data.howImg}
                      alt={data.howImg.name}
                      mb="32px"
                    />
                  </Lightbox>
                </Box>
                <Button
                  as={Link}
                  to="/how"
                  colorScheme="brandBlue"
                  w="100%"
                  whiteSpace="break-spaces"
                >
                  Mengapa dan Bagaimana
                </Button>
              </Flex>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Tentang;

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
    whatImg: file(relativePath: {eq: "about/AFI_Program Apa.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    howImg: file(relativePath: {eq: "about/AFI_Program Mengapa.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
