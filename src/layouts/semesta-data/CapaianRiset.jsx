import {
  Box, Heading,
} from '@chakra-ui/react';
import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import Slider from 'react-slick';
import ButtonLink from '../../components/ButtonLink';

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
          allFile(
            filter: {relativeDirectory: {eq: "semesta-data/capaian"}}
            sort: {fields: name, order: ASC}
          ) {
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
          pdf: file(relativePath: { eq: "Komunitas 26 v5.pdf" }) {
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
