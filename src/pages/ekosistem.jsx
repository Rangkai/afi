import {
  Box,
  Container, Flex, Heading, Image, List, ListItem,
  Text,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayout from '../hooks/useLayout';
import logoBrown from '../images/logo-brown.svg';

function Ekosistem({ data }) {
  const { getCol } = useLayout();
  const ecosystemBanner = getImage(data.file);
  const cities = data.cities.nodes;

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
              </Heading>
              <Text>
                Melihat dan memetakan apa, siapa, dan
                bagaimana sinema bekerja di berbagai kota.
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
                <Box overflow="hidden" h="320px" mb="20px">
                  <Box
                    as={GatsbyImage}
                    image={getImage(city.frontmatter.thumb)}
                    alt={city.frontmatter.title}
                    transition=".2s all ease-in-out"
                    objectFit="cover"
                    _hover={{
                      transform: 'scale(1.25) rotate(10deg)',
                      opacity: '.9',
                    }}
                  />
                </Box>
                <Text
                  my="20px"
                  fontSize="14px"
                >
                  Periode riset:
                  {' '}
                  {city.frontmatter.year}
                </Text>
                <Text fontSize="20px" fontWeight="800" my="15px">
                  {city.frontmatter.title}
                </Text>
                <Text mb="0">
                  Terdata:
                </Text>
                <List mb="20px">
                  <ListItem>
                    {city.frontmatter.info?.community}
                    {' '}
                    komunitas
                  </ListItem>
                  <ListItem>
                    {city.frontmatter.info?.filmProduction}
                    {' '}
                    produksi film
                  </ListItem>
                  <ListItem>
                    {city.frontmatter.info?.filmExhibition}
                    {' '}
                    ekshibisi film
                  </ListItem>
                </List>
                <ButtonLink mt="auto" to={`/${city.frontmatter.slug}`}>
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

export default Ekosistem;

export function Head() {
  return <SEO title="Ekosistem AFI - Apresiasi Film Indonesia" />;
}

export const query = graphql`
  query EcosystemPageQuery {
    file(relativePath: {eq: "ecosystem/EkosistemBW.jpg"}) {
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
    cities: allMdx(sort: {
      fields: [frontmatter___year, frontmatter___title],
      order: [DESC, ASC],
    }) {
      nodes {
        frontmatter {
          slug
          title
          info {
            community
            filmProduction
            filmExhibition
          }
          year
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
