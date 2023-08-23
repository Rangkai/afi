import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Box, Button, Container, Flex, Heading, LinkBox, LinkOverlay, SimpleGrid, Text,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import useLayout from '../hooks/useLayout';
import ButtonLink from '../components/ButtonLink';

function Kontak({ data }) {
  const banner = getImage(data.file);
  const { getCol } = useLayout();

  return (
    <Layout>
      <Container py={{ md: '48px' }} paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
        <Flex justifyContent="center">
          <Box w={['100%', null, getCol(9)]} borderTop="2px solid #000000" pt="24px">
            <Heading
              as="h2"
              fontSize={['30px', '25px', null, null, '28px']}
              mb="24px"
            >
              CONTACT US AT APRESIASI FILM INDONESIA
            </Heading>
            <Box pr={['0', null, '208px']}>
              <Text lineHeight="36px" fontSize="16px" mb="16px" textAlign="justify">
                If you have any questions or comments, please don&apos;t hesitate to reach out to
                us using the button below. For general enquiries, you can also send us a message
                using the button on the left side of this page. Our team is happy to assist
                you - we look forward to hearing from you!
              </Text>
            </Box>
            <Box
              borderY="2px solid #000000"
              background="brandPrimary.500"
              px={['8px', null, '48px']}
              py={['8px', null, '16px']}
              w="100%"
            >
              <ButtonLink
                h="100%"
                to="https://docs.google.com/forms/d/e/1FAIpQLScQcK8zZ0MqBcqgv7DhTtf4ZtDn5Vlmper2M8svyDxaME1IQA/viewform"
                isExternal
              >
                <Text as="b" fontWeight="700" fontSize="20px">
                  Tanya kami
                </Text>
                {' '}
                dengan mengisi form
              </ButtonLink>
            </Box>
          </Box>
        </Flex>
        <Flex
          borderY="2px solid #000000"
          mt={['48px', null, '100px']}
          h={['max-content', null, '180px']}
          flexWrap={['wrap', null, 'unset']}
          mb="50px"
        >
          <Flex
            background="garlic.500"
            px={['8px', null, '48px']}
            py={['8px', null, '16px']}
            w="100%"
            alignItems="center"
          >
            <div>
              <Text fontSize="20px" fontWeight="700" mb="0">
                General inquiries
              </Text>
              <ButtonLink
                h="max-content"
                fontSize="16px"
                to="mailto:apresiasi@komunitasfilm.id"
                isExternal
              >
                apresiasi@komunitasfilm.id
              </ButtonLink>
            </div>
          </Flex>
          <Flex
            background="garlic.500"
            px={['8px', null, '48px']}
            py={['8px', null, '16px']}
            w="100%"
            borderLeft={{ md: '2px solid #000000' }}
            borderTop={['2px solid #000000', null, 'unset']}
            alignItems="center"
          >
            <div>
              <Text fontSize="20px" fontWeight="700" mb="0">
                Instagram
              </Text>
              <ButtonLink
                h="max-content"
                fontSize="16px"
                to="https://www.instagram.com/komunitasfilm.id/"
                isExternal
              >
                @komunitasfilm.id
              </ButtonLink>
            </div>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Kontak;

export const query = graphql`
  query ContactPageQuery {
    file(relativePath: {eq: "AFI_Hubungi Hero.jpg"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
