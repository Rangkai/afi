import {
  Box, Heading, Text,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

function CakupanRiset() {
  const data = useStaticQuery(graphql`
    query CakupanRisetSectionQuery {
      file(relativePath: {eq: "semesta-data/Picture 1_Salah satu kegiatan Malang Film Festival 2018 yang diselenggarakan oleh Kine Klub Universitas Muhammadiyah Malang (UMM)BW.jpg"}) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const malangFilmFestival = getImage(data.file);

  return (
    <Box borderTop="2px solid #000000" pt="20px">
      <Heading
        as="h3"
        fontSize={['30px', '25px', null, null, '28px']}
        mb="32px"
      >
        CAKUPAN RISET APRESIASI FILM INDONESIA
      </Heading>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Teknik Pengambilan Data
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        <b>
          [Kuantitatif]
        </b>
        {' '}
        Survei menggunakan kuesioner online.
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        <b>
          [Kualitatif]
        </b>
        {' '}
        Wawancara mendalam sekitar lima narasumber tiap kota.
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="24px">
        Tim riset akan berkolaborasi dengan koordinator untuk mengidentifikasi komunitas sasaran
        (kuantitatif) dan penulis lokal untuk mengidentifikasi narasumber (kualitatif)
      </Text>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Sampling
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="24px">
        Purposive sampling.
      </Text>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Komunitas Sasaran
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="24px">
        Dalam pendataan kuantitatif, komunitas yang dicari adalah komunitas produksi dan/atau
        ekibisi yang berdaya dan aktif selama lima tahun terakhir.
      </Text>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Narasumber Sarasaran
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="24px">
        Narasumber yang penulis cari adalah narasumber yang memiliki wawasan mengenai
        keberdayaan komunitas
      </Text>

      <Text fontWeight="600" fontSize="18px" mb="12px">
        Periode Koleksi Data
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        Balikpapan, Bandung, Banda Aceh, Denpasar, Kupang, Medan, Makassar, Purbalingga, Semarang,
        dan Surabaya.
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        <b>
          [Kuantitatif]
        </b>
        {' '}
        27 Juli – 17 Oktober 2022
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="24px">
        <b>
          [Kualitatif]
        </b>
        {' '}
        25 Juli – 26 September 2022
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        Jambi, Malang, Palu, Singkawang, Sumbawa
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        <b>
          [Kuantitatif]
        </b>
        {' '}
        29 Mei – 11 Juli 2023
      </Text>
      <Text lineHeight="36px" fontSize="16px" mb="8px">
        <b>
          [Kualitatif]
        </b>
        {' '}
        26 Mei – 28 Juni 2023
      </Text>

      <Box
        as={GatsbyImage}
        mb="8px"
        mt="50px"
        image={malangFilmFestival}
        alt="Kota Malang – Malang Film Festival 2018 yang diselenggarakan
        oleh Kine Klub Universitas Muhammadiyah Malang (UMM)"
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
        Foto 2. Kota Malang – Malang Film Festival 2018 yang diselenggarakan oleh Kine Klub
        Universitas Muhammadiyah Malang (UMM)
      </Text>
    </Box>
  );
}

export default CakupanRiset;
