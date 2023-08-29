import {
  Box,
  Container,
  Flex,
  Heading, Image, List, ListItem,
  TabList, TabPanel, TabPanels, Tabs, Text,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayout from '../hooks/useLayout';
import logoBlueOcean from '../images/logo-blue-ocean.svg';
import CustomTab from '../components/CustomTab';

const teams2022 = [
  {
    division: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    people: [
      'Hilmar Farid',
      'Ahmad Mahendra',
      'Marlina Yulianty Machfud',
      'Pandu Pradana',
      'Tim Direktorat Perfilman, Musik, dan Media',
    ],
  },
  {
    division: 'Cinema Poetica',
    people: [
      'Adinda Zakiah',
      'Adrian Jonathan Pasaribu',
      'Alexander Matius',
      'Dwi Arieska',
      'Levriana Yustriani',
      'Mazda Radita Roromari',
    ],
  },
  {
    division: 'Rangkai',
    people: [
      'Abidzar Ghifary',
      'Brigita Sekar',
      'Muhammad Abraham',
      'Redemptus Rangga Raditya',
      'Sastha Sunu',
      'Trisha Amanda',
      'Valensia Harumi Edgina',
    ],
  },
  {
    division: 'Web & Desain',
    people: [
      'Ardhi Yudho Anggoro',
      'Nurul Iman',
    ],
  },
  {
    division: 'Focus Group Discussion',
    people: [
      'Abdul Rachman Rizky',
      'Agung Sentausa',
      'Arief Akhmad Yani',
      'Alexander Matius',
      'Bowo Leksono',
      'Edo Wulia',
      'Immanuel Prasetya Gintings',
      'Lulu Ratna',
      'Panji Mukadis',
      'Tito Imanda',
    ],
  },
  {
    division: 'Balikpapan',
    people: [
      'Abdul Rachman Rizky',
      'Masitah Fitrianingrum',
    ],
  },
  {
    division: 'Banda Aceh',
    people: [
      'Akbar Rafsanjani',
      'Rizki Dhian Nushur',
    ],
  },
  {
    division: 'Bandung',
    people: [
      'Gorivana Ageza',
      'Minfadly Robby',
    ],
  },
  {
    division: 'Denpasar',
    people: [
      'Ayu Diah Cempaka',
      'Prawira Nugraha',
    ],
  },
  {
    division: 'Kupang',
    people: [
      'Irwan Sebleku',
      'Nurhildayati',
    ],
  },
  {
    division: 'Makassar',
    people: [
      'Alghifahri Jasin',
      'Kemal Putra',
    ],
  },
  {
    division: 'Medan',
    people: [
      'Immanuel Prasetya Gintings',
      'Yesika Natalina Sidabutar',
    ],
  },
  {
    division: 'Purbalingga',
    people: [
      'Muhammad Taufiqurrohman',
      'Wiman Rizkidarajat',
    ],
  },
  {
    division: 'Semarang',
    people: [
      'Khothibul Umam',
      'Yogi Fajri',
    ],
  },
  {
    division: 'Surabaya',
    people: [
      'Dimas Giswa Prasiddha',
      'Yogi Ishabib',
    ],
  },
];

const teams2023 = [
  {
    division: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    people: [
      'Hilmar Farid',
      'Ahmad Mahendra',
      'Marlina Yulianty Machfud',
      'Pandu Pradana',
      'Tim Direktorat Perfilman, Musik, dan Media',
    ],
  },
  {
    division: 'Pengarah Program',
    people: [
      'Adrian Jonathan Pasaribu',
      'Muhammad Abraham',
      'Redemptus Rangga Raditya',
      'Sastha Sunu',
      'Vivian Idris',
    ],
  },
  {
    division: 'Riset dan Editorial',
    people: [
      'Adinda Zakiah',
      'Avicenna Raksa Santana',
      'Dini Adanurani',
      'Raihan Zaky',
    ],
  },
  {
    division: 'Film dan Kuratorial',
    people: [
      'Abidzar Ghifary',
      'Alexander Matius',
      'Mazda Radita Roromari',
    ],
  },
  {
    division: 'Aktivasi & Komunikasi Publik',
    people: [
      'Lintang Aulia Yudhityasari',
      'Yuriko Abi Pratama',
    ],
  },
  {
    division: 'Narasumber Tindak Lanjut',
    people: [
      'Alex Sihar',
      'Angkasa Ramadhan',
      'Ifan Adriansyah Ismail',
      'Nauval Yazid',
    ],
  },
  {
    division: 'Web & Desain',
    people: [
      'Ardhi Yudho Anggoro',
      'Nurul Iman',
    ],
  },
  {
    division: 'Jambi',
    people: [
      'Anton Oktaviano',
      'Melda Ria Sinambela',
    ],
  },
  {
    division: 'Malang',
    people: [
      'Dwi Yusrika Tautin',
      'Nashiru Setiawan',
    ],
  },
  {
    division: 'Palu',
    people: [
      'Rahmadiyah Tria Gayathri',
      'Taufiqurrahman',
    ],
  },
  {
    division: 'Singkawang',
    people: [
      'Agus Muri Arviandi',
      'Frino Bariarcianur',
    ],
  },
  {
    division: 'Sumbawa',
    people: [
      'Harsa Perdana',
      'Reny Suci',
    ],
  },
];
function Apa({ data }) {
  const whatBanner = getImage(data.file);
  const marlianaTalks = getImage(data.marlianaTalks);
  const { getCol } = useLayout();

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
                APA DAN SIAPA
              </Heading>
              <Text>
                Sinema hidup dalam berbagai rupa. Apresiasi Film Indonesia hadir sebagai
                upaya untuk menelusuri akar dan ranting budaya sinema sebagai landasan
                penguatan ekosistem perfilman.
              </Text>
            </Flex>
          </Box>
          <Box position="relative" w={['100%', null, getCol(6)]}>
            <Box
              as={GatsbyImage}
              quality={100}
              image={whatBanner}
              alt="apa banner"
              layout="full_width"
              w="100%"
            />
            <Image
              src={logoBlueOcean}
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
          as="section"
          flexDir={['column', null, 'row']}
          justifyContent="center"
          mt={{ md: '100px' }}
        >
          <Box
            w={['100%', null, getCol(9)]}
            borderTop="2px solid #000000"
            pt="16px"
          >
            <Heading
              as="h3"
              fontSize={['30px', '25px', null, null, '28px']}
              mb="24px"
            >
              APRESIASI FILM INDONESIA
            </Heading>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Sinema, layaknya sejarah, tidak pernah tunggal. Kehadirannya tidak terbatas di
              karpet merah dan panggung para pemenang sebagaimana yang populer diberitakan.
              Ia turut hidup di sekolah, pojok desa, bioskop tua, layar-layar sederhana, dan
              ruang-ruang lain yang jarang dibicarakan. Dalam rupa-rupa wajahnya, sinema
              seringkali menghibur, namun tak jarang ia turut jadi titik temu warga untuk saling
              melebur. Melalui keragaman sinema di akar rumput, terbuka pintu bagi keterlibatan
              publik yang lebih luas dalam perfilman Indonesia.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Kekayaan bentuk dan pengalaman sinema inilah yang menjadi sasaran
              {' '}
              <b>Apresiasi Film Indonesia</b>
              . Diselenggarakan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan
              Teknologi, program ini bertujuan merekam beragam wujud perfilman di Indonesia
              melalui kolaborasi penelitian dan kuratorial. Di tingkat pelaksanaan, Cinema
              Poetica dan Rangkai berkolaborasi dengan berbagai pribadi dan kelompok, membentuk
              suatu tim kerja untuk memetakan dan menghubungkan berbagai sumber daya yang
              dibutuhkan.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Ada dua capaian yang diharapkan. Pertama, melalui kolaborasi penelitian, program
              ini menyajikan himpunan wawasan perihal kegiatan produksi dan ekshibisi di tingkat
              lokal, yang seringnya terjadi di luar lingkup bioskop dan industri. Kedua, melalui
              kolaborasi kuratorial, program ini mengupayakan kesempatan tayang yang lebih luas
              bagi film-film komunitas, yang umumnya hanya terwadahi lewat festival film dan
              inisiatif layar mandiri.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Pada 2022, ada sepuluh kota yang menjadi sasaran penelitian: Banda Aceh, Bandung,
              Balikpapan, Denpasar, Kupang Makassar, Medan, Purbalingga, Semarang, dan Surabaya.
              Kota-kota ini dipilih dengan pertimbangan atas rekam jejak kegiatan yang bisa
              dilacak selama lima tahun terakhir. Di setiap kota, tim program berkolaborasi
              dengan pegiat komunitas setempat untuk mencatat bagaimana budaya sinema mewujud
              dalam keseharian masyarakatnya.
            </Text>
            <Box
              as={GatsbyImage}
              mb="8px"
              mt="50px"
              image={marlianaTalks}
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
              Pada 2023, Apresiasi Film Indonesia memperluas cakupan kerjanya. Lini kerja
              pendataan dan penayangan tetap dijalankan, yang lanjut bergerak ke lima kota lain:
              Jambi, Malang, Palu, Singkawang, dan Sumbawa. Bersamaan dengan itu, tim program
              turut merancang dan melaksanakan serangkaian program yang diberi tajuk Tindak
              Lanjut. Ada tiga kota sasaran yang diseleksi berdasarkan hasil riset tahun
              sebelumnya, yakni Banda Aceh, Balikpapan, dan Kupang. Melalui rangkaian program
              Tindak Lanjut, tim program berkolaborasi dengan komunitas film dan pemerintah
              daerah di ketiga kota untuk penguatan pelaku dan jaringan perfilman setempat.
              Program yang dilaksanakan bersifat jangka pendek, dengan diskusi dan proyeksi
              untuk kepentingan jangka panjang.
            </Text>
            <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
              Hasil penelitian serta laporan kegiatan Apresiasi Film Indonesia bisa diakses
              publik di website komunitasfilm.id, sementara film-film pilihan dari kolaborasi
              kuratorial bisa disaksikan gratis di rangkai.id.
            </Text>
            <Tabs variant="unstyled">
              <TabList borderY="2px solid #000000">
                <CustomTab>
                  Tim Kerja 2023
                </CustomTab>
                <CustomTab
                  borderLeft="2px solid #000000"
                >
                  Tim Kerja 2022
                </CustomTab>
              </TabList>
              <TabPanels>
                <TabPanel p="0" mt="50px">
                  <List>
                    {teams2023.map((team) => (
                      <ListItem
                        key={team.division}
                        pb="15px"
                        borderBottom="1px solid #000000"
                        mb="20px"
                      >
                        <Text
                          fontWeight="800"
                          fontSize="20px"
                          mb="8px"
                          lineHeight="24px"
                        >
                          {team.division}
                        </Text>
                        <Text mb="0" fontSize="14px">
                          {team.people?.join(', ')}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel p="0" mt="50px">
                  <List>
                    {teams2022.map((team) => (
                      <ListItem
                        key={team.division}
                        pb="15px"
                        borderBottom="1px solid #000000"
                        mb="20px"
                      >
                        <Text
                          fontWeight="800"
                          fontSize="20px"
                          mb="8px"
                          lineHeight="24px"
                        >
                          {team.division}
                        </Text>
                        <Text mb="0" fontSize="14px">
                          {team.people?.join(', ')}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Apa;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query WhatPageQuery {
    file(relativePath: {eq: "what/ApaSiapaBW.jpg"}) {
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
    marlianaTalks: file(relativePath: {eq: "what/Marlina-Yulianty-Machfud.jpeg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
