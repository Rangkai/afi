import {
  Box, Container, Flex, Text,
} from '@chakra-ui/react';
import {
  GatsbyImage, getImage,
} from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';

function How({ data }) {
  const { getCol } = useLayout();
  const howBanner = getImage(data.file);
  const defaultImage = getImage(data.default);

  return (
    <Layout>
      <GatsbyImage image={howBanner} alt={data.file.name} />
      <Container>
        <Flex justifyContent="center">
          <Box w={getCol(10)}>
            <Flex justifyContent="flex-end" borderBottom="1px solid" borderColor="brandRed.500" pb="48px" my="48px">
              <Box w={getCol(8)}>
                <Text as="h3" fontSize="40px" fontWeight="600" color="brandRed.500">
                  Lis ab ilitatur ad qui berum cor simus. Aximpor poreper ferenec atiossi
                  ommoluptur mos a simus el ius atur modit, ut optatur, con eum et.
                  Giae et laturit quae erorem fugitem sunt.
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="flex-end">
              <Box w={getCol(8)}>
                <Text fontSize="28px" fontWeight="700" color="brandRed.500">
                  Dolorehentis mo Dolores Quos Volorestis
                </Text>
                <Text fontSize="16px" mb="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum inventore
                  at asperiores laudantium! Quis ea accusantium sapiente quaerat, quos illo,
                  aperiam quibusdam, maxime quam nam fugit. Non, aut magni. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. A qui, optio, animi iure, labore in beatae
                  recusandae harum iusto magni esse veniam. Obcaecati distinctio voluptatibus
                  doloribus unde ipsa ex est!
                </Text>
                <Box as={GatsbyImage} image={defaultImage} alt={data.default.name} my="16px" />
                <Text mb="16px">
                  <Text as="em" fontSize="12px" fontWeight="600" fontStyle="italic" color="brandBlue.500">
                    Debis quidenite laborum aspid etur, conse illabo. Aperat.
                  </Text>
                </Text>
                <Text fontSize="16px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum inventore
                  at asperiores laudantium! Quis ea accusantium sapiente quaerat, quos illo,
                  aperiam quibusdam, maxime quam nam fugit. Non, aut magni. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. A qui, optio, animi iure, labore in beatae
                  recusandae harum iusto magni esse veniam. Obcaecati distinctio voluptatibus
                  doloribus unde ipsa ex est!
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export default How;

export const query = graphql`
  query HowPageQuery {
    file(relativePath: {eq: "how/how_banner.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FIXED)
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
