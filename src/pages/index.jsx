import {
  Box, Button, Container, Divider, Flex,
  Heading, Image, Link, List, ListItem, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayoutFormatter from '../hooks/useLayout';
import logoBlue from '../images/logo-blue.svg';
import mapNew from '../images/map_new.svg';
import ButtonLink from '../components/ButtonLink';
import Arrow from '../components/Arrow';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
  const heroBanner = getImage(imageData('hero-banner'));
  const gridFilm = getImage(imageData('grid-film'));
  const program = getImage(imageData('program'));
  if (true) {
    return (
      <Layout>
        <Container paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
          <Flex
            as="section"
            flexDir={['column', null, 'row']}
            justifyContent={['center', null, 'space-between']}
            background="brandPrimary.500"
          >
            <Box position="relative" w={['100%', null, getCol(6)]}>
              <Box
                as={GatsbyImage}
                quality={100}
                image={heroBanner}
                alt="home_banner"
                layout="full_width"
                w="100%"
              />
              <Image
                src={logoBlue}
                position="absolute"
                w="100px"
                h="100px"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={1}
              />
            </Box>
            <Box w={['100%', null, getCol(5)]}>
              <Flex flexDir="column" justifyContent="center" p={['30px', null, '0 80px 0 0']} h="100%">
                <Heading
                  as="h2"
                  fontSize={['30px', '25px', null, null, '36px']}
                  lineHeight={[1.2, null, 1.33]}
                >
                  TAK KENAL
                  <br />
                  MAKA TAK TAYANG
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quia aliquid magni nostrum aspernatur ducimus et itaque eaque qui
                  nemo atque reprehenderit amet libero, ea dignissimos tempore
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            as="section"
            flexDir={['column', null, 'row']}
            mt="100px"
            borderTop="2px solid #000000"
            pt="1rem"
          >
            <Box w={['100%', null, getCol(7)]}>
              <Heading
                as="h2"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '36px']}
              >
                Program
              </Heading>
              <List>
                <ListItem mb="8px">
                  <ButtonLink to="what">
                    Apa dan Siapa
                  </ButtonLink>
                </ListItem>
                <ListItem>
                  <ButtonLink to="how">
                    Mengapa dan Bagaimana
                  </ButtonLink>
                </ListItem>
              </List>
            </Box>
            <Box w={['100%', null, getCol(5)]} pr={['0px', null, '3rem']} pt={['48px', null, '0']}>
              <Text>
                Untuk mengapresiasi film Indonesia seluas-luasnya, perlu diusahakan berbagai
                cara untuk memperkenalkan keragamannya. APRESIASI FILM INDONESIA 2022 adalah
                upaya untuk menelusuri akar dan ranting budaya perfilman di Indonesia melalui
                kolaborasi pendataan dan kuratorial. Program ini dirintis oleh Kementerian
                Pendidikan, Kebudayaan, Riset, dan Teknologi dan dikelola oleh
                Cinema Poetica dan Rangkai.
              </Text>
            </Box>
          </Flex>
          <Flex
            as="section"
            flexDir={['column', null, 'row']}
            justifyContent="space-between"
            mt="100px"
            borderY="2px solid #000000"
            borderBottomWidth={['0', null, '2px']}
          >
            <Box w={['100%', null, getCol(6)]} pt="1rem">
              <Heading
                as="h2"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '36px']}
              >
                Ekosistem Perfilman
              </Heading>
              <Text>
                Lima belas kota yang menjadi lokasi penelitian ditentukan berdasarkan
                volume kegiatan produksi dan ekshibisi lokal selama tiga tahun terakhir
              </Text>
            </Box>
            <Box w={['100%', null, getCol(4), getCol(3)]}>
              <ButtonLink to="/ecosystem" wrapped>
                Selengkapnya
              </ButtonLink>
            </Box>
          </Flex>
          <Box position="relative" my="3rem">
            <Image
              src={mapNew}
            />
            <Box
              position="absolute"
              top={['-25%', null, '-8%']}
              transform={['scale(0.4) translate(-20px, 10px)', null, 'unset']}
              _hover={{
                cursor: 'pointer',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#000000',
                animation: 'pulse-animation 2s infinite',
                filter: 'brightness(0)',
              }}
            >
              <Arrow
                w="25px"
                h="25px"
                ml="0"
                color="dark"
              />
            </Box>
            <Box
              position="absolute"
              bottom={['8%']}
              left="63%"
              transform={['scale(0.4) translate(-20px, 10px)', null, 'unset']}
              _hover={{
                cursor: 'pointer',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#000000',
                animation: 'pulse-animation 2s infinite',
                filter: 'brightness(0)',
              }}
            >
              <Arrow
                w="25px"
                h="25px"
                ml="0"
                color="dark"
              />
            </Box>
            <Box
              position="absolute"
              bottom={['20%', null, '25%']}
              left="28%"
              transform={['scale(0.4) translate(-20px, 10px)', null, 'unset']}
              _hover={{
                cursor: 'pointer',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#007399',
                animation: 'pulse-animation 2s infinite',
              }}
            >
              <Arrow
                w="35px"
                h="35px"
                ml="0"
              />
            </Box>
          </Box>
          <Box>
            <Slider className="custom-slick" {...settings}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item}>
                  <Box
                    className="slick-box-item"
                    p="30px"
                    mx="15px"
                    border="1px solid #000000"
                    transition=".2s all ease-in-out"
                    width="230px"
                  >
                    <Box
                      as={GatsbyImage}
                      quality={100}
                      image={program}
                      alt="program"
                    />
                    <Text
                      mt="20px"
                      fontFamily="Azeret Mono"
                    >
                      Banda Aceh
                      {' '}
                      {item}
                    </Text>
                    <Text
                      fontSize="22px"
                      fontWeight="800"
                      lineHeight="26.4px"
                      className="slick-box-title"
                    >
                      Banda Aceh Title
                    </Text>
                    <Divider my="12px" />
                    <Text className="slick-box-caption">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores aliquid corporis accusantium libero dolores veniam hic perferendis
                    </Text>
                  </Box>
                </div>
              ))}
            </Slider>
          </Box>
          <Flex
            as="section"
            justifyContent="space-between"
            flexDir={['column', null, 'row']}
            mt="100px"
            borderY="2px solid #000000"
            borderBottomWidth={['0', null, '2px']}
          >
            <Box w={['100%', null, getCol(6)]} py="1rem" pr={{ md: '24px' }}>
              <Heading
                as="h2"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '36px']}
                mb="0"
              >
                Hasil Riset
              </Heading>
              <Text>
                Ada dua capaian yang diharapkan. Melalui kolaborasi penelitian,
                program ini menyajikan himpunan wawasan perihal kegiatan produksi dan ekshibisi
                di tingkat lokal, yang seringnya terjadi di luar lingkup bioskop dan industri.
              </Text>
            </Box>
            <Box w={['100%', null, getCol(3)]}>
              <ButtonLink to="/" wrapped wrapperProps={{ mb: ['20px', null, 0] }}>
                Tahun 2022
              </ButtonLink>
            </Box>
            <Box w={['100%', null, getCol(3)]}>
              <ButtonLink to="/" wrapped>
                Tahun 2023
              </ButtonLink>
            </Box>
          </Flex>
        </Container>

        <Box as="section" mt="100px">
          <Box
            as={GatsbyImage}
            quality={100}
            image={gridFilm}
            objectFit={['cover', null, 'initial']}
            alt="grid film"
            w="100vw"
            h={['300px', null, 'auto']}
            layout="full_width"
          />
        </Box>
        <Box bgColor="fossil.500">
          <Container py="24px" paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
            <Flex
              as="section"
              flexDir={['column', null, 'row']}
            >
              <Box w={['100%', null, getCol(6)]}>
                <Heading
                  as="h2"
                  color="white"
                  textTransform="uppercase"
                  mb={['48px', null, '0']}
                  fontSize={['30px', '25px', null, null, '36px']}
                >
                  Karya Pilihan
                </Heading>
                <Text color="white">
                  Tonton karya-karya pilihan Apresiasi Film Indonesia 2023
                </Text>
              </Box>
              <Box w={['100%', null, getCol(6)]} alignSelf="center">
                <Box py="16px" px={['16px', null, '24px', '48px']} bgColor="knit.500">
                  <ButtonLink to="/" color="white" iconColor="light">
                    Tonton Gratis di Rangkai
                  </ButtonLink>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box as={GatsbyImage} quality={100} image={banner} display={['none', null, 'block']} alt="home_banner" w="100vw" layout="full_width" />
      <Box as={GatsbyImage} quality={100} image={bannerMobile} display={['block', null, 'none']} alt="home_banner" w="100vw" layout="full_width" />
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
            p={['10% 20px', null, '5% 20px']}
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
                  Selengkapnya
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
          gatsbyImageData(placeholder: BLURRED, quality: 100, jpgOptions: {quality: 100})
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
