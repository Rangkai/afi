import {
  Box, Heading, List, ListItem, Text,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const researchQuestions = [
  {
    id: 1,
    label: 'Bagaimana ragam bentuk praktik komunitas film dan karya film di sepuluh kota?',
  },
  {
    id: 2,
    label: 'Bagaimana komunitas film mengelola komunitasnya?',
  },
  {
    id: 3,
    label: 'Siapa sajakah pelaku komunitas film?',
  },
  {
    id: 4,
    label: 'Apa saja dorongan dan hambatan dalam menjalankan komunitas film?',
  },
  {
    id: 5,
    label: 'Bagaimana bentuk kolaborasi antar komunitas film?',
  },
];

const researchObjectives = [
  {
    id: 1,
    label: 'Untuk mendata, merekam, dan mengungkap wujud dan capaian ekosistem per filman, khususnya komunitas produksi dan eksibisi, di 15 kota pilihan.',
  },
  {
    id: 2,
    label: 'Untuk menghimpun berbagai wawasan untuk menjadi acuan bagi penyelenggara negara dalam pemajuan sinema di tingkat akar rumput.',
  },
];

function SekilasTentangAFI() {
  const data = useStaticQuery(graphql`
    query SekilasSectionQuery {
      file(relativePath: {eq: "semesta-data/bts 3BW.jpg"}) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const bts3BW = getImage(data.file);

  return (
    <Box borderTop="2px solid #000000" pt="20px">
      <Heading
        as="h3"
        fontSize={['30px', '25px', null, null, '28px']}
        mb="32px"
      >
        SEKILAS TENTANG APRESIASI FILM INDONESIA
      </Heading>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Berbeda-Beda Bersama Dalam Sinema
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
        Film Indonesia rupa-rupa wajahnya, rupa-rupa pula rasanya. Untuk mengapresiasi film
        Indonesia seluas-luasnya, perlu berbagai cara untuk membahasakan keragamannya.
        APRESIASI FILM INDONESIA adalah upaya untuk menelusuri akar dan ranting budaya
        perfilman di Indonesia melalui kolaborasi pendataan dan kuratorial.
        Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
        dan dikelola oleh Cinema Poetica dan Rangkai
      </Text>
      <Box
        as={GatsbyImage}
        mb="8px"
        mt="50px"
        image={bts3BW}
        alt="Kota Makassar – Syuting Film Candu"
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
        Foto 1. Kota Makassar – Syuting Film Candu
      </Text>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Pertanyaan Penelitian
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
        Peneliti menformulasikan pertanyaan-pertanyaan utama yang nantinya
        diturunkan menjadi pertanyaan survei dan wawancara pendalam:
      </Text>
      <List listStyleType="disc" pl="16px" mb="36px">
        {researchQuestions.map((item) => (
          <ListItem key={item.id} mb="16px">
            {item.label}
          </ListItem>
        ))}
      </List>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Tujuan Penelitian
      </Text>

      <List listStyleType="disc" pl="16px" mb="36px">
        {researchObjectives.map((item) => (
          <ListItem key={item.id} mb="16px">
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SekilasTentangAFI;
