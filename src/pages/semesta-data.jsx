import React from 'react';
import {
  Box, Container, Flex, Heading, Image, Text,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';
import logoGold from '../images/logo-gold.svg';
import SEO from '../components/SEO';
import SekilasTentangAFI from '../layouts/semesta-data/SekilasTentangAFI';
import CakupanRiset from '../layouts/semesta-data/CakupanRiset';
import CapaianRiset from '../layouts/semesta-data/CapaianRiset';

function SemestaData({ data }) {
  const semestaBanner = getImage(data.file);
  const { getCol } = useLayout();

  return (
    <Layout>
      <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
        <Flex
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent={['center', null, 'flex-end']}
          background="#a89062"
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
                SEMESTA DATA
              </Heading>
              <Text>
                Menerjemahkan sinema beserta jaringan kegiatan
                di setiap kota dalam bentuk angka dan wacana.
              </Text>
            </Flex>
          </Box>
          <Box position="relative" w={['100%', null, getCol(6)]}>
            <Box
              as={GatsbyImage}
              quality={100}
              image={semestaBanner}
              alt="semesta banner"
              layout="full_width"
              w="100%"
            />
            <Image
              src={logoGold}
              position="absolute"
              w="100px"
              h="100px"
              top="50%"
              right="0"
              transform="translate(0%, -50%)"
              zIndex={1}
            />
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box w={['100%', null, getCol(8)]} pt="100px">
            <SekilasTentangAFI />
            <CakupanRiset />
            <CapaianRiset />
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default SemestaData;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query SemestaDataPageQuery {
    file(relativePath: {eq: "semesta-data/semesta-data-header.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
