import React, { useState } from 'react';
import {
  Box, Container, Flex, Heading, Image, Select, TabList, TabPanel, TabPanels, Tabs, Text,
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
import CustomTab from '../components/CustomTab';

const tabsList = [
  {
    value: 'sekilas-tentang-afi',
    label: 'Sekilas Tentang AFI',
    component: SekilasTentangAFI,
  },
  {
    value: 'cakupan-riset',
    label: 'Cakupan Riset',
    component: CakupanRiset,
  },
  {
    value: 'capaian-riset',
    label: 'Capaian Riset',
    component: CapaianRiset,
  },
  {
    value: 'semua',
    label: 'Semua',
    component: () => (
      <>
        <SekilasTentangAFI />
        <CakupanRiset />
        <CapaianRiset />
      </>
    ),
  },
];

function SemestaData({ data }) {
  const [selectedTab, setSelectedTab] = useState('sekilas-tentang-afi');
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
                Menerjemahkan sinema beserta jaringan kegiatan di
                setiap kota dalam bentuk angka dan wacana.
                Data dan teks di laman ini akan terus diperbaharui
                secara bertahap.
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
        <Tabs
          variant="unstyled"
          index={tabsList.findIndex((item) => item.value === selectedTab)}
        >
          <Flex justifyContent="center">
            <Box w={getCol(4)} display={['none', null, 'block']} pt="116px" pr="24px">
              <TabList position="sticky" top="0" borderY="2px solid #000000" display="flex" flexDir="column">
                {tabsList.map((item) => (
                  <CustomTab
                    key={item.value}
                    textAlign="left"
                    p={{ md: '20px 10px', lg: '20px 40px' }}
                    fontSize={{ md: '16px', lg: '20px' }}
                    onClick={() => {
                      setSelectedTab(item.value);
                    }}
                  >
                    {item.label}
                  </CustomTab>
                ))}
              </TabList>
            </Box>
            <Box w={['100%', null, getCol(8)]} pt="100px">
              <TabPanels>
                {tabsList.map((item) => (
                  <TabPanel key={item.value}>
                    {item.component()}
                  </TabPanel>
                ))}
              </TabPanels>
            </Box>
          </Flex>
          <Box
            p="16px"
            position="fixed"
            display={['block', null, 'none']}
            bottom="0"
            left="0"
            w="100vw"
            bg="white"
            zIndex="1"
            boxShadow="-5px -2px 10px -6px rgba(0, 0, 0, 0.2)"
          >
            <Select
              onChange={(e) => setSelectedTab(e.target.value)}
              defaultValue={selectedTab}
              value={selectedTab}
            >
              {tabsList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
        </Tabs>
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
    file(relativePath: {eq: "semesta-data/SemestaBW.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
