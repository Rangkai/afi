import {
  Box, Heading, Table, Text, Tr,
} from '@chakra-ui/react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import Slider from 'react-slick';
import ButtonLink from '../../components/ButtonLink';

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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function PhotoItem({ image, thumb, group }) {
  return (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} alt="test" style={{ width: '100%' }} />
    </LightgalleryItem>
  );
}

function CapaianRisetLayout({ data }) {
  const images = data.allFile?.nodes;

  return (
    <Box borderTop="2px solid #000000" pt="20px">
      <Heading
        as="h3"
        fontSize={['30px', '25px', null, null, '28px']}
        mb="32px"
      >
        CAPAIAN RISET AFI 2022-2023
      </Heading>
      <Box
        borderY="2px solid #000000"
        background="garlic.500"
        px={['8px', null, '48px']}
        py={['8px', null, '16px']}
        w="100%"
        my="48px"
      >
        <ButtonLink
          h="100%"
          to={data.pdf?.publicURL}
          isExternal
        >
          Download Capaian Riset
        </ButtonLink>
      </Box>
      {/* <Text lineHeight="36px" fontSize="16px" mb="24px">
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
      </Table> */}
      <LightgalleryProvider>
        <Slider
          className="custom-slick custom-slick--images"
          {...settings}
        >
          {images?.map((p) => (
            <PhotoItem key={p.id} image={p.childImageSharp?.original?.src} group="group2" />
          ))}
        </Slider>
      </LightgalleryProvider>
    </Box>
  );
}

function CapaianRiset(props) {
  return (
    <StaticQuery
      query={graphql`
        query CapaianRisetSectionQuery {
          allFile(filter: {relativeDirectory: {eq: "semesta-data/capaian"}}) {
            nodes {
              id
              name
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
          pdf: file(relativePath: { eq: "GrafikData_Balikpapan.pdf" }) {
            name
            extension
            publicURL
          }
        }
      `}
      render={(data) => <CapaianRisetLayout data={data} {...props} />}
    />
  );
}

export default CapaianRiset;
