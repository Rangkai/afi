import {
  Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text,
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';
import useLayout from '../hooks/useLayout';
import logoBlueOcean from '../images/logo-blue-ocean.svg';
import ButtonLink from '../components/ButtonLink';

function Tentang({ data }) {
  const { getCol } = useLayout();
  const aboutBanner = getImage(data.file);

  if (true) {
    return (
      <Layout>
        <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
          <Flex
            as="section"
            flexDir={['column', null, 'row']}
            justifyContent={['center', null, 'flex-end']}
            background="blueOcean.500"
            mt={{ md: '62px' }}
          >
            <Box w={['100%', null, getCol(5)]}>
              <Flex
                flexDir="column"
                justifyContent="center"
                p={['30px', null, '0 80px 0 0']}
                h="100%"
                color="white"
              >
                <Heading
                  as="h2"
                  fontSize={['30px', '25px', null, null, '31px']}
                  lineHeight={1.2}
                >
                  TENTANG
                  <br />
                  PROGRAM
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quia aliquid magni nostrum aspernatur ducimus et itaque eaque qui
                  nemo atque reprehenderit amet libero, ea dignissimos tempore
                </Text>
              </Flex>
            </Box>
            <Box position="relative" w={['100%', null, getCol(6)]}>
              <Box
                as={GatsbyImage}
                quality={100}
                image={aboutBanner}
                alt="tentang banner"
                layout="full_width"
                w="100%"
              />
              <Image
                src={logoBlueOcean}
                position="absolute"
                w="100px"
                h="100px"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={1}
              />
            </Box>
          </Flex>
          <Flex
            as="section"
            mt={['48px', null, '100px']}
            borderY="2px solid #000000"
            flexDir={['column', null, 'row']}
          >
            <Box
              w={['100%', null, getCol(6)]}
              pt="16px"
              pr={{ md: '48px' }}
              pb={{ md: '48px' }}
            >
              <Heading
                as="h3"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '31px']}
                mb="8px"
              >
                APRESIASI FILM INDONESIA
              </Heading>
              <Text fontSize="15px" lineHeight="26px" mb="16px">
                Tak kenal maka tak tayang. Untuk mengapresiasi film Indonesia seluas-luasnya,
                perlu diupayakan berbagai cara untuk mengenali dan mewadahi keragamannya.
              </Text>
            </Box>
            <Box w={['100%', null, getCol(6)]}>
              <ButtonLink
                to="/apa"
                wrapped
                wrapperColor="telorAsin.400"
                wrapperProps={{
                  justifyContent: 'flex-start',
                  p: ['15px', null, 'unset'],
                  pl: ['15px', null, '50px'],
                  mb: ['20px', null, 0],
                }}
              >
                Apa dan Siapa
              </ButtonLink>
            </Box>
          </Flex>
          <Flex
            as="section"
            borderBottom={['unset', null, '2px solid #000000']}
            flexDir={['column', null, 'row']}
            mb="48px"
          >
            <Box
              w={['100%', null, getCol(6)]}
              pt="16px"
              pr={{ md: '48px' }}
              pb={{ md: '48px' }}
            >
              <Heading
                as="h3"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '31px']}
                mb="8px"
              >
                KOLABORASI PENDATAAN DAN PENAYANGAN
              </Heading>
              <Text fontSize="15px" lineHeight="26px" mb="16px">
                Perfilman Indonesia tumbuh dan berkembang lewat kegiatan komunitas.
                Di sepuluh kota, Apresiasi Film Indonesia menelusuri berbagi bentuk
                budaya sinema lewat kolaborasi lintas batas.
              </Text>
            </Box>
            <Box w={['100%', null, getCol(6)]}>
              <ButtonLink
                to="/mengapa"
                wrapped
                wrapperColor="telorAsin.500"
                wrapperProps={{
                  justifyContent: 'flex-start',
                  p: ['15px', null, 'unset'],
                  pl: ['15px', null, '50px'],
                  mb: ['20px', null, 0],
                }}
              >
                Mengapa dan Bagaimana
              </ButtonLink>
            </Box>
          </Flex>
        </Container>
      </Layout>
    );
  }

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
    file(relativePath: {eq: "about/tentang.png"}) {
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
