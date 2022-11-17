import {
  Box,
  Container,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Content = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: var(--chakra-colors-brandRed-500);
    margin-bottom: 16px;
    line-height: var(--chakra-lineHeights-shorter);
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--chakra-colors-brandBlue-500);
    margin-bottom: 8px;
    line-height: var(--chakra-lineHeights-shorter);
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }
  p {
    font-family: 'Raleway';
    margin-bottom: 16px;
    line-height: var(--chakra-lineHeights-tall);
    em {
      color: var(--chakra-colors-brandBlue-500);
      font-weight: 600;
    }
    &.caption {
      font-size: 16px;
      line-height: var(--chakra-lineHeights-shorter);
      color: var(--chakra-colors-brandBlue-500);
      font-weight: 700;
      font-style: italic;
    }
    &.info {
      font-size: 28px;
      line-height: var(--chakra-lineHeights-shorter);
      color: var(--chakra-colors-brandRed-500);
      font-weight: 700;

    }
  }

  hr {
    border-color: var(--chakra-colors-brandRed-500);
    margin-bottom: 36px;
    margin-top: 16px;
  }
`;

function EcosystemDetail({ data, children }) {
  const {
    title, banner,
  } = data.detail.frontmatter;
  const cityBanner = getImage(banner);

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={cityBanner}
        alt={title}
        w="100vw"
      />
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
  query EcosystemDetailQuery($slug: String, $relativeDir: String) {
    detail: mdx(frontmatter: {slug: {eq: $slug}}) {
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
  }
`;
