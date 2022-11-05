import {
  Box, Button, Container, Flex,
  Heading, Link, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import useLayoutFormatter from '../hooks/layoutFormatter';
import '../styles/global.scss';

const cities = [
  {
    key: 'aceh',
    left: '3%',
    bottom: '88%',
    title: 'Aceh',
    desc: 'Aceh Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi.',
  },
  {
    key: 'palembang',
    left: '8%',
    bottom: '80%',
    title: 'Palembang',
    desc: 'Palembang Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi.',
  },
  {
    key: 'jakarta',
    left: '27%',
    bottom: '21%',
    title: 'Jakarta',
    desc: 'Jakarta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi.',
  },
  {
    key: 'bali',
    left: '42.5%',
    bottom: '13%',
    title: 'Bali',
    desc: 'Bali Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi.',
  },
  {
    key: 'ntb',
    left: '62%',
    bottom: '3%',
    title: 'NTB',
    desc: 'NTB Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quasi.',
  },
];
export default function Home({ data }) {
  const [selectedCity, setSelectedCity] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { getCol } = useLayoutFormatter();

  const onOpenModal = (key) => {
    const filteredCity = cities.find((city) => city.key === key);
    setSelectedCity(filteredCity);
    onOpen();
  };

  const onCloseModal = () => {
    onClose();
    setSelectedCity({});
  };

  const imageData = (name) => data.allFile.nodes.find((node) => node.name === name);

  const banner = getImage(imageData('home_banner'));
  const bannerMobile = getImage(imageData('home_banner_mobile'));
  const thumbnailBanner = getImage(imageData('thumbnail_banner'));
  const thumbnailBannerMobile = getImage(imageData('thumbnail_banner_mobile'));

  return (
    <Layout>
      <GatsbyImage image={isLargerThan768 ? banner : bannerMobile} alt="home_banner" />
      <Container>
        <Box as="section" my="48px" textAlign="center" display="flex" justifyContent="center">
          <Box width={['100%', null, getCol(10)]}>
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
                <Text color="#FFFFFF" fontSize={40} fontWeight={700}>
                  Ekosistem Perfilman Lokal
                </Text>
                <Text color="#FFFFFF" fontSize={20} fontWeight={600}>
                  Sepuluh kota yang menjadi lokasi penelitian ditentukan berdasarkan
                  volume kegiatan produksi dan ekshibisi lokal selama tiga tahun terakhir
                </Text>
              </Box>
            </Flex>
            <Box mb="48px" position="relative">
              {/* <GatsbyImage image={maps} alt="maps" /> */}
              <img src="../../map.svg" alt="maps" />
              {cities.map((city) => (
                <Box
                  key={city.key}
                  as="button"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  bg="#FFFFFF"
                  position="absolute"
                  left={city.left}
                  bottom={city.bottom}
                  onClick={() => onOpenModal(city.key)}
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
          <GatsbyImage image={isLargerThan768 ? thumbnailBanner : thumbnailBannerMobile} alt="thumbnail banner" />
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
              as={LinkGatsby}
              to="https://rangkai.id/"
              target="_blank"
              w="100%"
              display="block"
              padding="20px"
              bg="#FFFFFF"
              borderRadius={15}
              color="brandBlue.500"
              fontWeight={700}
              fontSize={32}
              _hover={{
                textDecoration: 'none',
                background: 'brandRed.500',
                color: '#FFFFFF',
              }}
            >
              Tonton Gratis di Rangkai
            </Link>
          </Box>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onCloseModal} size="4xl">
        <ModalOverlay />
        <ModalContent w={['calc(100% - 16px)', null, '800px']}>
          <ModalCloseButton />
          <ModalBody py="48px">
            <Flex>
              <Box w="50%">
                <Text color="brandRed.500" fontSize="32px" fontWeight="700" mb="8px">
                  {selectedCity?.title}
                </Text>
                <Text color="brandBlue.500" fontSize="20px" fontWeight="600" mb="16px">
                  {selectedCity?.desc}
                </Text>
                <Button as={LinkGatsby} to={`/${selectedCity.key}`} colorScheme="brandRed">
                  Explore More
                </Button>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
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
  }
`;
