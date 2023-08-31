import {
  Box, Heading, Table, Text, Tr,
} from '@chakra-ui/react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const achievements = [
  {
    id: 1,
    total: 107,
    label: 'Komunitas',
  },
  {
    id: 2,
    total: 314,
    label: 'Karya',
  },
  {
    id: 3,
    total: 86,
    label: 'Eksibisi',
  },
];

function CapaianRisetLayout({ data }) {
  const achievementImage = getImage(data.file);

  return (
    <Box borderTop="2px solid #000000" pt="20px">
      <Heading
        as="h3"
        fontSize={['30px', '25px', null, null, '28px']}
        mb="32px"
      >
        CAPAIAN RISET AFI 2022-2023
      </Heading>

      <Text lineHeight="36px" fontSize="16px" mb="24px" textAlign="justify">
        Selama dua tahun melakukan riset di 15 kota, AFI telah mengumpulkan:
      </Text>

      <Table w="220px">
        <tbody>
          {achievements.map((item) => (
            <Tr key={item.id} fontFamily="'Azeret Mono', monospace" fontSize="20px">
              <td>{item.total}</td>
              <td>{item.label}</td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <Box
        as={GatsbyImage}
        mb="8px"
        mt="50px"
        image={achievementImage}
        alt="Capaian Riset"
        _hover={{
          opacity: '.9',
        }}
      />
    </Box>
  );
}

function CapaianRiset(props) {
  return (
    <StaticQuery
      query={graphql`
        query CapaianRisetSectionQuery {
          file(relativePath: {eq: "semesta-data/Capaian.png"}) {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      `}
      render={(data) => <CapaianRisetLayout data={data} {...props} />}
    />
  );
}

export default CapaianRiset;
