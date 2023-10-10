import {
  Box,
  Container, Divider, Flex,
  Heading, Image,
  LinkBox, List, ListItem,
  Text,
} from '@chakra-ui/react';
import { Link as LinkGatsby, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Arrow from '../components/Arrow';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayoutFormatter from '../hooks/useLayout';
import logoBlue from '../images/logo-blue.svg';
import mapNew from '../images/map_new.svg';

export default function Home({ data }) {
  const [selectedMapIdx, setSelectedMapIdx] = useState(0);
  const sliderRef = useRef();
  const { getCol } = useLayoutFormatter();
  const tempCitiesRaw = data.cities.nodes.map((node) => {
    const {
      title, position, desc, thumb, slug, year, info,
    } = node.frontmatter;

    return {
      key: node.id,
      title,
      desc,
      thumb: getImage(thumb),
      slug,
      year,
      info,
      ...position,
    };
  });
  const tmpCities2 = tempCitiesRaw.splice(0, 2);
  const cities = [...tempCitiesRaw, ...tmpCities2].map((item, idx) => ({
    idx,
    ...item,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    afterChange: (e) => {
      setSelectedMapIdx(e);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  const imageData = (name) => data.allFile.nodes.find((node) => node.name === name);

  const heroBanner = getImage(imageData('hero-banner'));
  const karyaPilihan = getImage(imageData('karya-pilihan-desktop'));
  const karyaPilihanMobile = getImage(imageData('karya-pilihan-mobile'));

  const clickMaps = (index) => {
    sliderRef.current.slickGoTo(index);
    setSelectedMapIdx(index);
  };

  const isActiveMaps = (index) => selectedMapIdx === index;
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
              alt="logo apresiasi film indonesia"
              w="100px"
              h="100px"
              top="50%"
              left="0"
              transform="translate(0, -50%)"
              zIndex={1}
            />
          </Box>
          <Box w={['100%', null, getCol(5)]}>
            <Flex flexDir="column" justifyContent="center" p={['30px', null, '0 80px 0 0']} h="100%">
              <Heading
                as="h2"
                fontSize={['30px', '25px', null, null, '31px']}
                lineHeight={[1.2, null, 1.33]}
              >
                BERBEDA-BEDA
                <br />
                BERSAMA DALAM SINEMA
              </Heading>
              <Text>
                Kolaborasi pendataan dan kuratorial
                <br />
                Melibatkan 107 komunitas dari 15 kota.
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
              fontSize={['30px', '25px', null, null, '31px']}
            >
              Program
            </Heading>
            <List>
              <ListItem mb="8px">
                <ButtonLink to="apa">
                  Apa dan Siapa
                </ButtonLink>
              </ListItem>
              <ListItem>
                <ButtonLink to="mengapa">
                  Mengapa dan Bagaimana
                </ButtonLink>
              </ListItem>
            </List>
          </Box>
          <Box w={['100%', null, getCol(5)]} pr={['0px', null, '3rem']} pt={['48px', null, '20px']}>
            <Text>
              Film Indonesia rupa-rupa wajahnya, rupa-rupa pula rasanya.
              Untuk mengapresiasi film Indonesia seluas-luasnya, perlu
              berbagai cara untuk membahasakan keragamannya.
              APRESIASI FILM INDONESIA adalah upaya untuk menelusuri
              akar dan ranting budaya perfilman
              di Indonesia melalui kolaborasi pendataan dan kuratorial.
              Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan,
              Riset, dan Teknologi dan dikelola oleh Cinema Poetica dan Rangkai.
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
              fontSize={['30px', '25px', null, null, '31px']}
            >
              Ekosistem Perfilman
            </Heading>
            <Text>
              Lima belas kota yang menjadi lokasi penelitian ditentukan berdasarkan
              volume kegiatan produksi dan ekshibisi lokal selama tiga tahun terakhir
            </Text>
          </Box>
          <Box w={['100%', null, getCol(5)]}>
            <ButtonLink to="/ekosistem" wrapped>
              Selengkapnya
            </ButtonLink>
          </Box>
        </Flex>
        <Box position="relative" my="3rem">
          <Image
            src={mapNew}
          />
          {cities.map((item) => (
            <Box
              key={item.key}
              position="absolute"
              left={item.left}
              bottom={item.bottom}
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
                width: isActiveMaps(item.idx) ? '18px' : '12px',
                height: isActiveMaps(item.idx) ? '18px' : '12px',
                borderRadius: '50%',
                backgroundColor: isActiveMaps(item.idx) ? '#007399' : '#000000',
                animation: 'pulse-animation 2s infinite',
                filter: isActiveMaps(item.idx) ? 'unset' : 'brightness(0)',
              }}
              onClick={() => clickMaps(item.idx)}
            >
              <Arrow
                w={isActiveMaps(item.idx) ? '35px' : '25px'}
                h={isActiveMaps(item.idx) ? '35px' : '25px'}
                ml="0"
                color={isActiveMaps(item.idx) ? '' : 'dark'}
              />
            </Box>
          ))}
        </Box>
        <Box>
          <Slider
            className="custom-slick custom-slick--cities"
            {...settings}
            ref={sliderRef}
          >
            {cities.map((item) => (
              <Box key={item.key}>
                <LinkBox
                  key={item.key}
                  as={LinkGatsby}
                  className="slick-box-item"
                  display="block"
                  p="30px"
                  border="1px solid #000000"
                  transition=".2s all ease-in-out"
                  to={`${item.slug}`}
                  _hover={{
                    cursor: 'pointer',
                    background: 'garlic.500',
                  }}
                >
                  <Box
                    as={GatsbyImage}
                    quality={100}
                    image={item.thumb}
                    height="160px"
                    w="100%"
                    maxW="100%"
                    alt={item.title}
                    filter={item.year === 2022 ? 'grayscale(100%)' : 'unset'}
                  />
                  <Text
                    my="20px"
                    fontSize="14px"
                  >
                    Periode riset:
                    {' '}
                    {item.year}
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="800"
                    lineHeight="19.2px"
                    className="slick-box-title"
                  >
                    {item.title}
                  </Text>
                  <Divider my="12px" />
                  <div className="slick-box-caption">
                    <Text mb="0">
                      Terdata:
                    </Text>
                    <ul>
                      <li>
                        {item.info?.community}
                        {' '}
                        komunitas
                      </li>
                      <li>
                        {item.info?.filmProduction}
                        {' '}
                        produksi film
                      </li>
                      <li>
                        {item.info?.filmExhibition}
                        {' '}
                        ekshibisi film
                      </li>
                    </ul>
                  </div>
                </LinkBox>
              </Box>
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
              fontSize={['30px', '25px', null, null, '31px']}
              mb="0"
            >
              SEMESTA DATA
            </Heading>
            <Text>
              {/* Menerjemahkan sinema beserta jaringan kegiatan
              di setiap kota dalam bentuk angka dan wacana. */}
              Apresiasi Film Indonesia menelusuri tumbuh kembang
              perfilman di tingkat akar rumput, dengan fokus pada
              kegiatan produksi dan ekshibisi film.
            </Text>
          </Box>
          <Box w={['100%', null, getCol(5)]}>
            <ButtonLink to="/semesta-data" wrapped>
              Selengkapnya
            </ButtonLink>
          </Box>
        </Flex>
      </Container>

      <Box as="section" mt="100px">
        <Box
          as={GatsbyImage}
          display={['none', null, 'block']}
          w="100vw"
          h="calc(100vw / 4)"
          image={karyaPilihan}
          alt="Karya karya Pilihan"
        />
        <Box
          as={GatsbyImage}
          display={['block', null, 'none']}
          image={karyaPilihanMobile}
          alt="Karya karya Pilihan"
          h="auto"
          w="100vw"
          quality={100}
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
                fontSize={['30px', '25px', null, null, '31px']}
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
    cities: allMdx(sort: {
      fields: [frontmatter___year, frontmatter___title],
      order: [DESC, ASC],
    }) {
      nodes {
        frontmatter {
          desc
          slug
          title
          year
          info {
            community
            filmProduction
            filmExhibition
          }
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
