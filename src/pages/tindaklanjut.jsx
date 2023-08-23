import React, { useEffect, useState } from 'react';
import {
  Box, Container, Flex, Heading, Image, TabList, TabPanel, TabPanels, Tabs, Text,
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';
import SEO from '../components/SEO';
import logoFossil from '../images/logo-fossil.svg';
import CustomTab from '../components/CustomTab';
import useParams from '../hooks/useParams';

const citiesData = [
  {
    id: 1,
    city: 'balikpapan',
    label: 'Balikpapan',
    content: (images) => (
      <>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Kegiatan implementasi tindak lanjut Apresiasi Film Indonesia di Kota
          Balikpapan yang diadakan pada Sabtu,15 April 2023, di Senyiur Meeting Room,
          Swiss-Belhotel Balikpapan. Acara yang berlangsung dari pukul 09.00 hingga
          18.00 WITA ini mempertemukan sejumlah pembicara dan peserta dengan tujuan
          menggali potensi serta mengembangkan sumber daya, khususnya di bidang perfilman.
        </Text>
        <Box
          as={GatsbyImage}
          mb="8px"
          mt="20px"
          image={getImage(images.find((item) => item.name === 'balikpapan1'))}
          alt="Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman) memberi tanggapan terhadap paparan hasil riset"
          _hover={{
            opacity: '.9',
          }}
        />
        <Text
          fontFamily="'Azeret Mono', monospace"
          fontSize="12.25px"
          lineHeight="18.375px"
          mb="50px"
        >
          Marlina Yulianty Machfud (Pamong Budaya Bidang Perfilman)
          memberi tanggapan terhadap paparan hasil riset
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Pembicara yang hadir dalam acara ini antara lain, Marlina Yulianti –Pamong Budaya
          Perfilman di Direktorat Perfilman, Musik dan Media Kementerian Kebudayaan, Pendidikan,
          Riset dan Teknologi, Nauval Yazid–Direktur Festival Europe on Screen, dan Angkasa
          Ramadhan–penulis dan sutradara film pendek. Masing-masing pembicara membantu memberikan
          pemahaman tentang program Kemdikbud, pengelolaan festival, dan penulisan naskah film
          secara mendalam.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Acara ini dihadiri oleh 18 peserta yang terdiri dari para pelaku perfilman baik yang
          mewakili komunitas maupun individu dan para pegiat film di Balikpapan. Dalam kegiatan
          ini, Lintang Aulia selaku manajer proyek Tindak Lanjut dan project manager dan Redemptus
          Rangga Raditya selaku direktur program Apresiasi Film Indonesia sebagai pelaksana program.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Salah satu sorotan penting dalam acara ini adalah perbincangan mengenai penyelenggaraan
          Balikpapan Film Festival (BFF) dan tantangan yang dihadapi oleh penyelenggara. Dalam
          forum diskusi yang penuh ide, disorot juga infrastruktur Gedung Kesenian Balikpapan yang
          dianggap sangat mampu mendukung kegiatan seni di kota ini, termasuk BFF. Menurut
          pembicara, Nauval Yazid, mengungkapkan pandangan bahwa fasilitas infrastruktur di
          Balikpapan sangat baik, dengan kapasitas yang besar dan harga sewa yang terjangkau, ruang
          ini mampu mengakomodir kegiatan seni dan budaya di Balikpapan.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Namun, dengan infrastruktur yang memadai, pembicara juga menggambarkan kendala yang
          dihadapi oleh para pelaku film di Balikpapan. Minimnya pengetahuan tentang eksibisi
          atau pengelolaan festival film menjadi salah satu faktor berkembangannya BFF,
          terutama dalam aspek programasi atau kuratorial film. Sebagai solusi, pembicara
          berpendapat bahwa pelatihan dalam bidang ini dapat meningkatkan kualitas pelaksanaan
          BFF serta menghasilkan program film yang lebih berkualitas.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Di sisi lain, pelatihan skenario juga dibahas secara mendalam dalam acara ini oleh
          Angkasa Ramadhan. Meskipun kebanyakan diskusi terfokus pada teknis penulisan naskah,
          pembicara menyoroti kurangnya kepekaan untuk pengembangan dan kedalaman cerita.
          Menurut Angkasa, fasilitas dan hal-hal yang berkaitan dengan materi seperti alat
          produksi dan pendanaan sudah cukup memadai untuk produksi film pendek. Namun, dalam
          hal penulisan skenario, pembicara menyarankan perlunya pelatihan yang lebih mendalam
          dan berkelanjutan. Komunitas film Balikpapan disarankan untuk lebih peka terhadap
          fenomena sekitar dan memanfaatkan lokalitas yang dimiliki secara optimal dalam berkarya.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Dalam perbandingan dengan kota Palangkaraya, pembicara menunjukkan bahwa cerita film
          pendek di Balikpapan masih memiliki ruang untuk pertumbuhan yang lebih besar dan menarik.
          Ini menjadi tantangan bagi komunitas film untuk terus berinovasi dalam pengembangan
          karya-karya berkualitas.
        </Text>
        <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
          Kegiatan Tindak Lanjut yang dilakukan Apresiasi Film Indonesia adalah bentuk upaya jangka
          pendek untuk pengembangan sumber daya dan pengetahuan pelaku perfilman. Di Balikpapan,
          melalui serangkaian dialog dan pelatihan, acara ini berhasil membuka pintu menuju
          perkembangan seni dan budaya yang lebih cemerlang di Balikpapan. Diharapkan, semangat dan
          antusiasme yang tercipta dalam acara ini akan terus berkembang dalam langkah-langkah
          selanjutnya menuju kemajuan yang lebih besar.
        </Text>
      </>
    ),
  },
  {
    id: 2,
    city: 'aceh',
    label: 'Banda Aceh',
    content: () => (
      <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
        data Aceh
      </Text>
    ),
  },
  {
    id: 3,
    city: 'kupang',
    label: 'Kupang',
    content: () => (
      <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
        data Kupang
      </Text>
    ),
  },
];

function TindakLanjut({ data }) {
  const [city, setCity] = useState('balikpapan');
  const { getParams } = useParams();
  const params = getParams();

  const { getCol } = useLayout();
  const followBanner = getImage(data.file);
  const images = data.allFile.nodes;

  useEffect(() => {
    if (params?.city) {
      setCity(params.city);
    }
  }, [params?.city]);

  return (
    <Layout>
      <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
        <Flex
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent={['center', null, 'flex-end']}
          background="fossil.500"
          mt={{ md: '62px' }}
        >
          <Box w={['100%', null, getCol(5)]}>
            <Flex
              flexDir="column"
              justifyContent="center"
              p={['30px', null, '0 25px 0 0']}
              h="100%"
              color="white"
            >
              <Heading
                as="h2"
              >
                TINDAK LANJUT
              </Heading>
              <Text>
                Elia dolupta tenimolut paruntem liate estiae. Ut quas que et acestium,
                net eos exerum assinus aut alis ressunt rest quo elestibus exerspid
                quam atur am nobiti abo. Omnis essed eriat.
              </Text>
            </Flex>
          </Box>
          <Box position="relative" w={['100%', null, getCol(6)]}>
            <Box
              as={GatsbyImage}
              quality={100}
              image={followBanner}
              alt="mengapa banner"
              layout="full_width"
              w="100%"
            />
            <Image
              src={logoFossil}
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
        <Flex
          justifyContent="center"
          mt="100px"
        >
          <Box w={['100%', null, getCol(9)]}>
            <Tabs
              variant="unstyled"
              index={citiesData.findIndex((item) => item.city === city)}
            >
              <TabList
                borderY="2px solid #000000"
                flexWrap={['wrap', null, 'unset']}
              >
                {citiesData.map((item) => (
                  <CustomTab
                    key={item.id}
                    _notFirst={{
                      borderLeft: ['0', null, '2px solid #000000'],
                    }}
                    onClick={() => {
                      setCity(item.city);
                    }}
                  >
                    {item.label}
                  </CustomTab>
                ))}
              </TabList>
              <TabPanels mt="50px">
                {citiesData.map((item) => (
                  <TabPanel key={item.id} p="0" mt="50px">
                    {item.content(images)}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default TindakLanjut;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query TindakLanjutQuery {
    file(relativePath: {eq: "follows/follows-header.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    allFile(filter: {relativeDirectory: {eq: "follows"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
