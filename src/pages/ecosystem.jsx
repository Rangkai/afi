import {
  Box, Button, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Text,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';
import useLayout from '../hooks/useLayout';
import logoBrown from '../images/logo-brown.svg';
import ButtonLink from '../components/ButtonLink';

function Ecosystem({ data }) {
  const { getCol } = useLayout();
  const ecosystemBanner = getImage(data.file);
  const cities = data.cities.nodes;

  if (true) {
    return (
      <Layout>
        <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
          <Flex
            as="section"
            flexDir={['column', null, 'row']}
            justifyContent={['center', null, 'flex-end']}
            background="garlic.500"
            mt={{ md: '62px' }}
          >
            <Box w={['100%', null, getCol(5)]}>
              <Flex flexDir="column" justifyContent="center" p={['30px', null, '0 80px 0 0']} h="100%">
                <Heading
                  as="h2"
                  fontSize={['30px', '25px', null, null, '36px']}
                  lineHeight={1.2}
                >
                  EKOSISTEM
                  <br />
                  PERFILMAN
                  <br />
                  LOKAL
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
                image={ecosystemBanner}
                alt="ecosystem banner"
                layout="full_width"
                w="100%"
              />
              <Image
                src={logoBrown}
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
            borderTop="2px solid #000000"
            mt="100px"
            pt={{ md: '16px' }}
          >
            <Box w={['100%', null, getCol(6)]}>
              <Heading
                as="h2"
                textTransform="uppercase"
                fontSize={['30px', '25px', null, null, '36px']}
              >
                Lima Belas Kota,
                <br />
                Beragam Sinema
              </Heading>
              <Text>
                Lima belas kota yang menjadi lokasi penelitian ditentukan berdasarkan
                volume kegiatan produksi dan ekshibisi lokal selama tiga tahun terakhir.
              </Text>
            </Box>
          </Flex>
          <Box
            as="section"
            mt="48px"
          >
            <List
              display="flex"
              w="100%"
              flexWrap={['nowrap', 'wrap']}
              overflow="auto"
            >
              {cities?.map((city, i) => (
                <ListItem
                  w={['300px', getCol(3)]}
                  minW={['300px', 'unset']}
                  key={city.id}
                  mb="50px"
                  position="relative"
                  pb="15px"
                  pr={['16px', 0]}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '0px',
                    left: 0,
                    width: '70%',
                    height: '1px',
                    backgroundColor: '#000000',
                  }}
                >
                  <Box overflow="hidden" h="203px" mb="20px">
                    <Box
                      as={GatsbyImage}
                      image={getImage(city.frontmatter.thumb)}
                      alt={city.frontmatter.title}
                      transition=".2s all ease-in-out"
                      objectFit="cover"
                      filter="grayscale(1)"
                      _hover={{
                        transform: 'scale(1.25) rotate(10deg)',
                        opacity: '.9',
                      }}
                    />
                  </Box>
                  <Text fontSize="14px" mb="8px">
                    {`${i < 9 ? 0 : ''}${i + 1}`}
                  </Text>
                  <Text fontSize="20px" fontWeight="800" my="15px">
                    {city.frontmatter.title}
                  </Text>
                  <Text display="inline-block" pr="20px" mb="20px">
                    {city.frontmatter.desc}
                  </Text>
                  <ButtonLink mt="auto">
                    Selengkapnya
                  </ButtonLink>
                </ListItem>
              ))}
            </List>
          </Box>
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
        image={ecosystemBanner}
        alt={data.file.name}
      />
      <Container my="48px">
        <Flex justifyContent="center" mb="48px">
          <Box w={['100%', null, getCol(8)]} textAlign="center">
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="700"
              color="brandRed.500"
            >
              Sepuluh Kota, Beragam Sinema
            </Heading>
            <Text fontSize="20px" fontWeight="600" color="brandBlue.500" mb="24px">
              Sinema, layaknya sejarah, tidak pernah tunggal. Setiap kota punya dinamika tersendiri,
              yang tercermin dalam corak karya dan kegiatan sinemanya sehari-hari.
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
                <Text
                  fontSize={['24px', null, '32px']}
                  fontWeight="700"
                  color="brandRed.500"
                  mb="0px"
                >
                  {city.frontmatter.title}
                </Text>
                <Text fontSize="16px" fontWeight="600" color="brandBlue.500" mb="16px">
                  {city.frontmatter.desc}
                </Text>
                <Button as={LinkGatsby} to={`/${city.frontmatter.slug}`} colorScheme="brandRed">
                  Selengkapnya
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
    cities: allMdx(sort: {fields: frontmatter___title, order: ASC}) {
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
