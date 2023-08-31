import {
  Box,
  Container, Flex, Heading, Image,
  Text,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayout from '../hooks/useLayout';
import logoBlueOcean from '../images/logo-blue-ocean.svg';

function Tentang({ data }) {
  const { getCol } = useLayout();
  const aboutBanner = getImage(data.file);
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
                Apresiasi Film Indonesia dirintis oleh
                Kementerian Pendidikan, Kebudayaan, Riset,
                dan Teknologi untuk menjangkau beragam wujud
                perfilman di Indonesia.
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
              alt="logo afi blue"
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
              Sinema hidup dalam berbagai rupa. Apresiasi Film Indonesia hadir sebagai
              upaya untuk menelusuri akar dan ranting budaya sinema sebagai landasan
              penguatan ekosistem perfilman.
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
              Sinema hidup lewat kerjasama. Apresiasi Film Indonesia terlahir
              sebagai kerja pengetahuan dan berkembang sebagai simpul berbagai
              kegiatan dan jaringan perfilman.
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

export default Tentang;

export function Head() {
  return <SEO title="Tentang AFI - Apresiasi Film Indonesia" />;
}

export const query = graphql`
  query AboutPageQuery {
    file(relativePath: {eq: "about/tentang.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
