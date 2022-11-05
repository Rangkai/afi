import {
  Box, Container, Flex, Text, useDimensions,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';

function What({ data }) {
  const { getCol } = useLayout();
  const ref = useRef();
  const dimensions = useDimensions(ref);

  const whatBanner = getImage(data.file);
  const defaultImage = getImage(data.default);

  return (
    <Layout>
      <GatsbyImage image={whatBanner} alt="what banner" />
      <Container mt="48px">
        {[1, 2, 3].map((item) => (
          <Flex
            key={item}
            pb="48px"
            borderBottom="1px solid"
            borderColor="brandRed.500"
            mb="48px"
          >
            <Box
              width={getCol(4)}
              textAlign="center"
              pr="60px"
              ref={ref}
            >
              <Box
                w="100%"
                h={dimensions?.contentBox?.width}
                border="2px solid"
                borderColor="brandRed.500"
              >
                <Box as={GatsbyImage} image={defaultImage} alt="default" objectFit="cover" h="100%" w="100%" />
              </Box>
            </Box>
            <Box width={getCol(7)} pl="48px">
              <Text as="h3" color="brandRed.500" fontWeight={700} fontSize="28px">
                Aque voluptiant que qui con conseceste
              </Text>
              <Text fontSize="16px">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus maxime
                tempora aspernatur hic officiis voluptas accusantium, cumque, sit ad consequuntur
                magnam maiores, distinctio velit facilis! Ad quas obcaecati harum optio!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid voluptatum provident facere necessitatibus similique unde iusto dolor,
                dicta eligendi adipisci ratione optio consequuntur eaque, assumenda debitis quia
                pariatur laboriosam. Nobis
              </Text>
              <ul>
                <Box as="li" listStyleType="none" fontWeight={700}>
                  John Doe
                </Box>
                <Box as="li" listStyleType="none" fontWeight={700}>
                  Vinsmoke Sanji
                </Box>
              </ul>
            </Box>
          </Flex>
        ))}
      </Container>
    </Layout>
  );
}

export default What;

export const query = graphql`
  query WhatPageQuery {
    file(relativePath: {eq: "what/what_banner.jpg"}) {
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
