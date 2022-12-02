import {
  Box, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import {
  GatsbyImage, getImage,
} from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GridContainer, { GridItemLeftContent } from '../components/GridContainer';
import SquareImage from '../components/SquareImage';

function How({ data }) {
  const howBanner = getImage(data.file);
  const defaultImage = getImage(data.default);

  return (
    <Layout>
      <Box
        as={GatsbyImage}
        height={['220px', null, 'auto']}
        objectFit={['cover', null, 'unset']}
        image={howBanner}
        alt={data.file.name}
      />
      <Container mt="44px">
        <GridContainer>
          <GridItemLeftContent />
          <GridItem>
            <Heading
              as="h3"
              fontSize={['28px', null, '40px']}
              fontWeight="600"
              color="brandRed.500"
            >
              Giaecatque exero blaborum,
              quo ea atectatiat. Equi opta pero
              eos moluptiatur, ut omni aute
              doluptatem etur. Ceris nonsed mo
              te veriatem aut inveni.
            </Heading>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItemLeftContent>
            <SquareImage image={data.default} alt={data.default.name} mb="16px" />
            <Text fontStyle="italic" fontSize="16px" lineHeight="shorter" color="brandBlue.500" fontWeight={700}>
              Mo beaquat dessin cones seque volut vent
              aute sitat.
            </Text>
          </GridItemLeftContent>
          <GridItem>
            <Text fontSize="16px" mb="36px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum inventore
              at asperiores laudantium! Quis ea accusantium sapiente quaerat, quos illo,
              aperiam quibusdam, maxime quam nam fugit. Non, aut magni. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. A qui, optio, animi iure, labore in beatae
              recusandae harum iusto magni esse veniam. Obcaecati distinctio voluptatibus
              doloribus unde ipsa ex est!
            </Text>
            <Text fontSize={['18px', null, '24px']} fontWeight="700" color="brandBlue.500">
              El in coremquias magniatem qui
            </Text>
            <Text fontSize="16px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum inventore
              at asperiores laudantium! Quis ea accusantium sapiente quaerat, quos illo,
              aperiam quibusdam, maxime quam nam fugit. Non, aut magni. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. A qui, optio, animi iure, labore in beatae
              recusandae harum iusto magni esse veniam. Obcaecati distinctio voluptatibus
              doloribus unde ipsa ex est!
            </Text>
          </GridItem>
        </GridContainer>
      </Container>
    </Layout>
  );
}

export default How;

export function Head() {
  return <SEO />;
}

export const query = graphql`
  query HowPageQuery {
    file(relativePath: {eq: "how/how_banner.jpg"}) {
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
  }
`;
