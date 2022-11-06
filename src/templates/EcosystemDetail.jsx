import {
  Box,
  Container, Flex, Grid, GridItem, Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import useLayout from '../hooks/useLayout';

const Content = styled.div`
  h2, h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--chakra-colors-brandRed-500);
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 16px;
    em {
      color: var(--chakra-colors-brandBlue-500);
      font-weight: 600;
    }
  }
`;

function EcosystemDetail({ data }) {
  const { title, desc, banner } = data.detail.frontmatter;
  const { getCol } = useLayout();
  const cityBanner = getImage(banner);
  return (
    <Layout>
      <GatsbyImage image={cityBanner} alt={title} />
      <Container my="48px">
        <Flex justifyContent="center">
          <Box w={getCol(10)}>
            <Grid templateColumns="4fr 7fr" gap="92px">
              <GridItem>
                <Flex>
                  <Text as="h2" fontSize="32px" fontWeight="600" color="brandRed.500">
                    {desc}
                  </Text>
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
      }
      html
    }
  }
`;
