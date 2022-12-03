import {
  Box, Container, Divider, GridItem, Heading, List, ListItem, SimpleGrid, Text, useDimensions,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import GridContainer, { GridItemLeftContent } from '../components/GridContainer';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';
import SquareImage from '../components/SquareImage';
import useLayout from '../hooks/useLayout';

const teams = [
  {
    division: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    people: [
      'Ahmad Mahendra',
      'Marlina Yulianti',
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
      'Mazda Radita',
    ],
  },
  {
    division: 'Rangkai',
    people: [
      'Abidzar Ghifary',
      'Brigita Sekar',
      'Muhammad Abraham',
      'Redemptus Rangga',
      'Sastha Sunu',
      'Trisha Amanda',
      'Valensia Edgina',
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
    division: 'Purbalinga',
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

function What({ data }) {
  const whatBanner = getImage(data.file);
  const images = data.allFile.nodes;

  const people = [
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Adinda')),
      name: 'Adinda Zakiah',
      division: 'Field Researcher',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Adrian')),
      name: 'Adrian Jonathan',
      division: 'Research Director',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Alex')),
      name: 'Alexander Mathius',
      division: 'Film Curator',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Ardhi')),
      name: 'Ardhi Yudho',
      division: 'Web & Design',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Dwi')),
      name: 'Dwi Arieska',
      division: 'Field Researcher',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Levri')),
      name: 'Levriana Yustriani',
      division: 'Editor',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Mazda')),
      name: 'Mazda Radita',
      division: 'Peneliti & Manajer Pemutaran',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Muhammad')),
      name: 'Muhammad Abraham',
      division: 'Tech & Data Advisor',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Redemptus')),
      name: 'Redemptus Rangga',
      division: 'Program Director',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Roeliman')),
      name: 'Nurul Iman',
      division: 'Web & Design',
    },
    {
      image: getImage(images.find((image) => image.name === 'AFI_Apa Sastha')),
      name: 'Sastha Sunu',
      division: 'Research Advisor',
    },
  ];

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={whatBanner}
        alt="what banner"
      />
      <Container mt="48px">
        <GridContainer>
          <GridItemLeftContent />
          <GridItem>
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="600"
              color="brandRed.500"
            >
              Apresiasi Film Indonesia 2022
            </Heading>

            <Text fontSize="16px" mb="24px">
              Sinema, layaknya sejarah, tidak pernah tunggal. Kehadirannya tidak terbatas
              di karpet merah dan panggung para pemenang sebagaimana yang populer
              diberitakan. Ia turut hidup di sekolah, pojok desa, bioskop tua, layar-layar
              sederhana, dan ruang-ruang lain yang jarang dibicarakan. Dalam rupa-rupa
              wajahnya, sinema seringkali menghibur, namun tak jarang ia turut jadi titik temu
              warga untuk saling melebur. Melalui keragaman sinema di tingkat akar rumput,
              terbuka pintu bagi keterlibatan publik yang lebih luas dalam perfilman Indonesia.
            </Text>

            <Text fontSize="16px" mb="24px">
              Kekayaan bentuk dan pengalaman sinema inilah yang menjadi sasaran
              {' '}
              <b>
                Apresiasi Film Indonesia 2022.
              </b>
              {' '}
              Diselenggarakan oleh Kementerian Pendidikan,
              Kebudayaan, Riset, dan Teknologi, program ini bertujuan merekam beragam
              wujud perfilman di Indonesia melalui kolaborasi penelitian dan kuratorial. Di
              tingkat pelaksanaan, Cinema Poetica dan Rangkai saling berkolaborasi untuk
              memetakan dan menghubungkan berbagai sumber daya yang dibutuhkan.
            </Text>

            <Text fontSize="16px" mb="24px">
              Ada dua capaian yang diharapkan. Pertama, melalui kolaborasi penelitian,
              program ini menyajikan himpunan wawasan perihal kegiatan produksi dan
              ekshibisi di tingkat lokal, yang seringnya terjadi di luar lingkup bioskop dan
              industri. Kedua, melalui kolaborasi kuratorial, program ini mengupayakan
              kesempatan tayang yang lebih luas bagi film-film komunitas, yang umumnya
              hanya terwadahi lewat festival film dan inisiatif layar mandiri.
            </Text>

            <Text fontSize="16px" mb="24px">
              Sepuluh kota menjadi sasaran penelitian: Banda Aceh, Bandung, Balikpapan,
              Denpasar, Kupang Makassar, Medan, Purbalingga, Semarang, dan Surabaya.
              Kota-kota ini dipilih dengan pertimbangan atas rekam jejak kegiatan yang bisa
              dilacak selama lima tahun terakhir. Di setiap kota, Cinema Poetica dan Rangkai
              berkolaborasi dengan pegiat komunitas setempat untuk mencatat bagaimana
              budaya sinema mewujud dalam keseharian masyarakatnya.
            </Text>

            <Text fontSize="16px" mb="24px">
              Hasil penelitian Apresiasi Film Indonesia 2022 bisa diakses publik di website
              komunitasfilm.id, sementara film-film pilihan dari kolaborasi kuratorial bisa
              disaksikan gratis di rangkai.id.
            </Text>

            <Divider opacity={1} borderColor="brandRed.500" mb="32px" />
          </GridItem>
        </GridContainer>

        <Box
          as={GatsbyImage}
          height={['220px', null, 'auto']}
          objectFit={['cover', null, 'unset']}
          image={getImage(images.find((image) => image.name === 'AFI_Apa Tim'))}
          alt="what banner"
          border="1px solid"
          borderColor="brandRed.500"
        />

        <Heading
          as="h3"
          fontSize={['28px', null, '40px']}
          fontWeight="700"
          color="brandRed.500"
          mt="48px"
          mb="32px"
        >
          Tim Kerja
        </Heading>
        <SimpleGrid
          columns={[1, null, 3]}
          gap={['0px', null, '10vw']}
          mb={['20px', null, '40px']}
        >
          <Box>
            {teams.slice(0, 4).map((team) => (
              <Box mb={['16px', null, '24px']}>
                <Text fontSize={['14px', null, '16px']} fontWeight="700" color="brandBlue.500">
                  {team.division}
                </Text>
                <List>
                  {team.people.map((person) => (
                    <ListItem fontSize={['14px', null, '16px']}>
                      {person}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Box>
            {teams.slice(4, 9).map((team) => (
              <Box mb={['16px', null, '24px']}>
                <Text fontSize={['14px', null, '16px']} fontWeight="700" color="brandBlue.500">
                  {team.division}
                </Text>
                <List>
                  {team.people.map((person) => (
                    <ListItem fontSize={['14px', null, '16px']}>
                      {person}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Box>
            {teams.slice(9, 15).map((team) => (
              <Box mb={['16px', null, '24px']}>
                <Text fontSize={['14px', null, '16px']} fontWeight="700" color="brandBlue.500">
                  {team.division}
                </Text>
                <List>
                  {team.people.map((person) => (
                    <ListItem fontSize={['14px', null, '16px']}>
                      {person}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[2, null, 4]} gap={['20px', null, '40px']} mb="80px">
          {people.map((person) => (
            <div>
              <Lightbox image={person.image} alt={person.name} mb="16px">
                <SquareImage image={person.image} alt={person.name} />
              </Lightbox>
              <Text
                fontSize={['14px', null, '16px']}
                fontWeight="700"
                color="brandRed.500"
                mb="0px"
                lineHeight={1}
              >
                {person.name}
                {' -'}
              </Text>
              <Text
                fontSize={['14px', null, '16px']}
                mb="0px"
              >
                {person.division}
              </Text>
            </div>
          ))}
        </SimpleGrid>

        <GridContainer mb="20px">
          <GridItemLeftContent>
            <Box
              as={GatsbyImage}
              image={getImage(images.find((image) => image.name === 'AFI_Apa CP'))}
              width="140px"
              mb="24px"
            />
          </GridItemLeftContent>
          <GridItem>
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="600"
              color="brandRed.500"
            >
              Cinema Poetica
            </Heading>

            <Text fontSize="16px" mb="24px">
              Dibentuk pada 2010, Cinema Poetica merupakan respons terhadap minimnya
              literatur tentang film dan perfilman di Indonesia. Cinema Poetica utamanya
              mengupayakan produksi dan distribusi pengetahuan sinema bagi publik.
              Idealnya, dalam ekosistem perfilman yang sehat, produksi-distribusi
              pengetahuan dan produksi-distribusi film bisa saling mengisi.
            </Text>

            <Divider opacity={1} borderColor="brandRed.500" mb="52px" />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItemLeftContent>
            <Box
              as={GatsbyImage}
              image={getImage(images.find((image) => image.name === 'AFI_Apa Rangkai'))}
              width="220px"
              mb="24px"
            />
          </GridItemLeftContent>
          <GridItem>
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="600"
              color="brandRed.500"
            >
              Rangkai
            </Heading>

            <Text fontSize="16px" mb="24px">
              Mengudara pada 28 Oktober 2021, Rangkai adalah startup film Indonesia yang
              berfokus pada koleksi Film Digital Nasional. Fokus utama Rangkai adalah
              mengupayakan sarana menonton yang mudah diakses publik dengan harga
              terjangkau. Rangkai juga menargetkan akses pendapatan baru dan upaya
              pendataan yang komprehensif bagi pembuat film di berbagai layar
            </Text>

          </GridItem>
        </GridContainer>
      </Container>
    </Layout>
  );
}

export default What;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query WhatPageQuery {
    file(relativePath: {eq: "what/what_banner.jpg"}) {
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
    allFile(filter: {relativeDirectory: {eq: "what"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
