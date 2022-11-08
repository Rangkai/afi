import {
  Box,
  Container, Flex, Grid, GridItem, Heading, useDimensions,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import useLayout from '../hooks/useLayout';

const Content = styled.div`
  h2, h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--chakra-colors-brandRed-500);
    margin-bottom: 8px;
    line-height: var(--chakra-lineHeights-shorter);
  }
  p {
    font-family: 'Raleway';
    margin-bottom: 16px;
    line-height: var(--chakra-lineHeights-tall);
    em {
      color: var(--chakra-colors-brandBlue-500);
      font-weight: 600;
    }
  }
`;

function EcosystemDetail({ data }) {
  const {
    title, desc, banner, thumb,
  } = data.detail.frontmatter;
  const { getCol } = useLayout();
  const cityBanner = getImage(banner);
  const cityThumb = getImage(thumb);
  const ref = useRef();
  const dimensions = useDimensions(ref);

  return (
    <Layout>
      <Box as={GatsbyImage} height={['220px', null, 'auto']} objectFit={['cover', null, 'unset']} image={cityBanner} alt={title} />
      <Container my="48px">
        <Flex justifyContent="center">
          <Box w={getCol(10)}>
            <Grid templateColumns={['1fr', null, '4fr 7fr']} gap={['24px', null, '92px']}>
              <GridItem>
                <Flex flexDirection="column" justifyContent="space-between" h="100%">
                  <Heading
                    as="h2"
                    fontSize={['24px', null, '32px']}
                    fontWeight="600"
                    color="brandRed.500"
                  >
                    {desc}
                  </Heading>
                  <Box
                    textAlign="center"
                    ref={ref}
                  >
                    <Box
                      w="100%"
                      h={dimensions?.contentBox?.width}
                      border="2px solid"
                      borderColor="brandRed.500"
                    >
                      <Box as={GatsbyImage} image={cityThumb} alt="default" objectFit="cover" h="100%" w="100%" />
                    </Box>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem>
                <Content>
                  <Box dangerouslySetInnerHTML={{ __html: data.detail.html }} />
                </Content>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
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
  query CityDetail($slug: String) {
    detail: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        desc
        title
        banner {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        thumb {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      html
    }
  }
`;
