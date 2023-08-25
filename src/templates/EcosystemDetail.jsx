import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LightgalleryItem, LightgalleryProvider, useLightgallery } from 'react-lightgallery';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLayout from '../hooks/useLayout';
import ButtonLink from '../components/ButtonLink';
import logoBlue from '../images/logo-blue.svg';

const Content = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: var(--chakra-colors-brandPrimary-500);
    margin-bottom: 16px;
    line-height: var(--chakra-lineHeights-shorter);
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: var(--chakra-lineHeights-shorter);
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }
  h5 {
    font-size: 20px;
    line-height: 33px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 800;
    margin-bottom: 16px;
    margin-top:30px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    font-family: 'Plus Jakarta Sans';
    margin-bottom: 16px;
    line-height: 33px;
    text-align: justify;
    letter-spacing: .5px;
    &.caption {
      font-size: 12.25px;
      line-height: var(--chakra-lineHeights-shorter);
      color: #000000;
      text-align: left;
      font-family: "Azeret Mono", monospace;
    }
    &.info {
      font-size: 28px;
      line-height: var(--chakra-lineHeights-shorter);
      color: var(--chakra-colors-garlic-500);
      font-weight: 700;
      text-align: left;
    }
    &.highlight {
      font-size: 18px;
      line-height: 36px;
      color: #000;
      letter-spacing: .5px;
      margin-bottom: 30px;
      font-weight: 700;
    }
  }

  b {
    line-height: 33px;
  }

  hr {
    border-color: #000000;
    margin-bottom: 36px;
    margin-top: 16px;
  }
`;

function PhotoItem({ image, thumb, group }) {
  return (
    <Box display="none">
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} alt="test" style={{ width: '100%' }} />
      </LightgalleryItem>
    </Box>
  );
}
function OpenButtonWithHook(props) {
  const { openGallery } = useLightgallery();
  return (
    <Box background="garlic.500" px={['8px', null, '48px']} py={['8px', null, '16px']} w="100%">
      <ButtonLink
        h="100%"
        as="button"
        onClick={() => openGallery('group2')}
        {...props}
      >
        Dokumentasi
      </ButtonLink>
    </Box>
  );
}

function EcosystemDetail({ data, children }) {
  const {
    title, banner, headline, author, year,
  } = data.detail.frontmatter;
  const cityBanner = getImage(banner);
  const getCol = useLayout;

  return (
    <Layout>
      <Container pt="50px">
        <Flex flexDir={['column-reverse', null, 'row']}>
          <Flex flexFlow="column" justifyContent="space-between" w={{ base: '100%', md: getCol(6) }}>
            <Box borderTop="2px solid #000000" pt="30px">
              <Text
                letterSpacing="1px"
                fontSize="14px"
                mb="5px"
              >
                Kota
              </Text>
              <Heading as="h1" textTransform="uppercase" fontSize="30px">
                {title}
              </Heading>
            </Box>
            <Box borderTop="2px solid #000000" pt="30px">
              <Text
                letterSpacing="1px"
                fontSize="14px"
                mb="5px"
              >
                Judul
              </Text>
              <Heading as="h2" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="24px">
                {headline}
              </Heading>
            </Box>
            <Box borderTop="2px solid #000000" pt="30px">
              <Text
                letterSpacing="1px"
                fontSize="14px"
                mb="5px"
              >
                Author
              </Text>
              <Heading
                as="h3"
                fontFamily="Plus Jakarta Sans"
                fontSize="21px"
                lineHeight="1.2"
                letterSpacing="1px"
              >
                {author}
              </Heading>
            </Box>
            <Flex borderY="2px solid #000000">
              <Box background="brandPrimary.500" px={['8px', null, '48px']} py={['8px', null, '16px']} w="100%">
                <ButtonLink h="100%" to={data.pdf?.publicURL} isExternal download>
                  Grafik Data
                </ButtonLink>
              </Box>
              {year === 2023 && (
                <LightgalleryProvider>
                  {data.docs.nodes.map((p) => (
                    <PhotoItem key={p.id} image={p.childImageSharp.original.src} group="group2" />
                  ))}
                  <OpenButtonWithHook />
                </LightgalleryProvider>
              )}
            </Flex>
          </Flex>
          <Box w={{ base: '100%', md: getCol(6) }} position="relative">
            <Box
              as={GatsbyImage}
              height={['220px', null, 'auto']}
              objectFit={['cover', null, 'unset']}
              image={cityBanner}
              alt={title}
              minH={['unset', null, '407px']}
              filter={year === 2022 ? 'grayscale(100%)' : 'unset'}
            />
            <Image
              src={logoBlue}
              position="absolute"
              w="100px"
              h="100px"
              top="50%"
              right="0%"
              transform="translate(0, -50%)"
              zIndex={1}
            />
          </Box>
        </Flex>
      </Container>
      <Container my="48px">
        <Content>
          {children}
        </Content>
      </Container>
    </Layout>
  );
}

export default EcosystemDetail;

export function Head({ data }) {
  const { title } = data.detail.frontmatter;
  return <SEO title={`${title} - Apresiasi Film Indonesia`} />;
}

export const query = graphql`
  query EcosystemDetailQuery($slug: String, $relativeDir: String, $docsDir: String, $graphFile: String) {
    detail: mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        author
        headline
        year
        title
        banner {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        thumb {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      body
    }
    gallery: allFile(filter: {relativeDirectory: {eq: $relativeDir}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    docs: allFile(filter: {relativeDirectory: {eq: $docsDir}}) {
      nodes {
        id
        name
        relativeDirectory
        childImageSharp {
          original {
            src
          }
        }
      }
    }
    pdf: file(relativePath: { eq: $graphFile }) {
      name
      extension
      publicURL
    }
  }
`;
