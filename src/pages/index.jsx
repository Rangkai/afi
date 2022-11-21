import {
  Box, Button, Container, Flex,
  Heading, Link, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayoutFormatter from '../hooks/useLayout';

export default function Home({ data }) {
  const initialSelectedCity = {
    title: 'default',
    desc: '',
    thumb: getImage(data.defaultImg),
    slug: '',
  };
  const [selectedCity, setSelectedCity] = useState(initialSelectedCity);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMd] = useMediaQuery('(min-width: 768px)', {
    ssr: true,
    fallback: false,
  });
  const { getCol } = useLayoutFormatter();
  const cities = data.cities.nodes.map((node) => {
    const {
      title, position, desc, thumb, slug,
    } = node.frontmatter;
    return {
      key: node.id,
      title,
      desc,
      thumb: getImage(thumb),
      slug,
      ...position,
    };
  });

  const onOpenModal = (key) => {
    const filteredCity = cities.find((city) => city.key === key);
    setSelectedCity(filteredCity);
    onOpen();
  };

  const onCloseModal = () => {
    onClose();
    setSelectedCity(initialSelectedCity);
  };

  const imageData = (name) => data.allFile.nodes.find((node) => node.name === name);

  const banner = getImage(imageData('home_banner'));
  const bannerMobile = getImage(imageData('home_banner_mobile'));
  const thumbnailBanner = getImage(imageData('thumbnail_banner'));
  const thumbnailBannerMobile = getImage(imageData('thumbnail_banner_mobile'));

  return (
    <Layout>
      <Box as={GatsbyImage} image={banner} display={['none', null, 'block']} alt="home_banner" w="100vw" layout="full_width" />
      <Box as={GatsbyImage} image={bannerMobile} display={['block', null, 'none']} alt="home_banner" w="100vw" layout="full_width" />
      <Container>
        <Box as="section" my="48px" textAlign="center" display="flex" justifyContent="center">
          <Box width={['100%', null, getCol(10)]}>
            <Heading
              as="h3"
              color="brandRed.500"
              fontSize={['28px', null, '40px']}
              marginBottom="8px"
            >
              Tentang Program
            </Heading>
            <Text color="brandBlue.500" fontWeight="600" mb="24px">
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
              <Button as={LinkGatsby} to="/what" colorScheme="brandBlue">
                Apa dan Siapa
              </Button>
              <Button as={LinkGatsby} to="/how" colorScheme="brandBlue">
                Mengapa dan Bagaimana
              </Button>
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
      <Box bg="brandRed.500" py="48px">
        <Container>
          <Box as="section">
            <Flex textAlign="center" justifyContent="center">
              <Box w={['100%', null, getCol(8)]}>
                <Heading
                  as="h3"
                  color="#FFFFFF"
                  fontSize={['28px', null, '40px']}
                  fontWeight={700}
                >
                  Ekosistem Perfilman Lokal
                </Heading>
                <Text color="#FFFFFF" fontSize={20} fontWeight={600}>
                  Sepuluh kota yang menjadi lokasi penelitian ditentukan berdasarkan
                  volume kegiatan produksi dan ekshibisi lokal selama tiga tahun terakhir
                </Text>
              </Box>
            </Flex>
            <Box mb="48px" position="relative">
              <StaticImage
                src="../images/map.svg"
                alt="maps"
                layout="fullWidth"
                placeholder="blurred"
              />
              {cities.map((city) => (
                <Box
                  key={city.key}
                  w={isMd ? '30px' : '10px'}
                  h={isMd ? '30px' : '10px'}
                  borderRadius="50%"
                  bg="#FFFFFF"
                  position="absolute"
                  left={city.left}
                  bottom={city.bottom}
                  onClick={() => onOpenModal(city.key)}
                  _hover={{
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Box>
            <Flex textAlign="center" justifyContent="center">
              <Link
                as={LinkGatsby}
                to="/ecosystem"
                w={['100%', null, getCol(3)]}
                display="block"
                padding="15px 40px"
                bg="#FFFFFF"
                borderRadius={15}
                color="brandRed.500"
                fontWeight={700}
                fontSize={22}
                _hover={{
                  textDecoration: 'none',
                  background: 'brandBlue.500',
                  color: '#FFFFFF',
                }}
              >
                Selengkapnya
              </Link>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box position="relative">
          <Box as={GatsbyImage} display={['none', null, 'block']} image={thumbnailBanner} alt="thumbnail banner" />
          <Box as={GatsbyImage} display={['block', null, 'none']} image={thumbnailBannerMobile} alt="thumbnail banner" />
          <Box
            w={300}
            position="absolute"
            bg="brandBlue.500"
            p="10% 20px"
            top="50%"
            left="50%"
            borderRadius="20px"
            textAlign="center"
            transform="translateX(-50%) translateY(-50%)"
          >
            <Text color="#FFFFFF" fontSize={22} fontWeight={600} mb="16px">
              Tonton karya-karya pilihan Apresiasi Film Indonesia 2022
            </Text>
            <Link
              href="https://rangkai.id/"
              target="_blank"
              w={['max-content', null, '100%']}
              display="block"
              padding="20px"
              bg="#FFFFFF"
              borderRadius={15}
              color="brandBlue.500"
              fontWeight={700}
              fontSize={[24, null, 32]}
              _hover={{
                textDecoration: 'none',
                background: 'brandRed.500',
                color: '#FFFFFF',
              }}
              mx="auto"
            >
              Tonton Gratis
              <br />
              di Rangkai
            </Link>
          </Box>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onCloseModal} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent w={['calc(100% - 16px)', null, '800px']} borderRadius="15px">
          <ModalCloseButton />
          <ModalBody py="48px">
            <SimpleGrid columns={[1, null, 2]} gap="24px">
              <GatsbyImage image={selectedCity.thumb} alt={selectedCity.title} />
              <Box>
                <Text color="brandRed.500" fontSize="32px" fontWeight="700" mb="8px">
                  {selectedCity?.title}
                </Text>
                <Text color="brandBlue.500" fontSize="20px" fontWeight="600" mb="16px">
                  {selectedCity?.desc}
                </Text>
                <Button as={LinkGatsby} to={`/${selectedCity.slug}`} colorScheme="brandRed">
                  Explore More
                </Button>
              </Box>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
}

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query HomepageQuery {
    allFile(filter: {relativeDirectory: {eq: "homepage"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    cities: allMdx {
      nodes {
        frontmatter {
          desc
          slug
          title
          position {
            bottom
            left
          }
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    defaultImg: file(relativePath: {eq: "default.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
