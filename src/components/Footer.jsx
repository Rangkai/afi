import React from 'react';
import {
  Container, Flex, Text, Box, LinkOverlay, LinkBox,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useLayoutFormatter from '../hooks/useLayout';

function Footer() {
  const { getCol } = useLayoutFormatter();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFile(filter: {relativeDirectory: {eq: "collaborator"}}) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(height: 60, placeholder: BLURRED)
          }
        }
      }
      file(relativePath: {eq: "dikbud_logo.png"}) {
        name
        childImageSharp {
          gatsbyImageData(height: 60, placeholder: BLURRED)
        }
      }
    }
  `);

  const links = {
    poetica_logo: 'https://cinemapoetica.com/en/',
    rangkai_logo: 'https://rangkai/id',
  };

  const collaborators = data.allFile.nodes?.map((collaborator) => ({
    name: collaborator.name,
    img: getImage(collaborator),
    link: links[collaborator.name],
  }));

  const dikbudLogo = getImage(data.file);

  const currYear = new Date().getFullYear();

  return (
    <Box as="footer" py="48px">
      <Container>
        <Flex justifyContent="space-between" alignItems="center" flexDirection={['column', null, 'row']}>
          <Box width={['100%', null, '50%']} h="max-content" mb={['48px', null, 0]}>
            <Text mb={0} textAlign={['center', null, 'start']} color="brandBlue.500" fontSize="16px" fontWeight="600">
              Apresiasi Film Indonesia ©
              {' '}
              {currYear}
            </Text>
          </Box>
          <Flex w={[getCol(12), null, getCol(2)]} mb={['16px', null, 0]} justifyContent={[null, null, 'flex-end']} alignItems="center">
            <Text
              mb={0}
              color="brandBlue.500"
              fontSize="16px"
              fontWeight="600"
              mr="16px"
            >
              Program
              <br />
              Oleh
            </Text>
            <LinkBox>
              <LinkOverlay
                href="https://www.kemdikbud.go.id/main/"
                isExternal
              >
                <GatsbyImage image={dikbudLogo} alt={data.file.name} />
              </LinkOverlay>
            </LinkBox>
          </Flex>
          <Flex w={[getCol(12), null, getCol(4)]} alignItems="center" justifyContent={[null, null, 'center']}>
            <Text
              mb={0}
              color="brandBlue.500"
              fontSize="16px"
              fontWeight="600"
              mr="16px"
            >
              Bekerjasama
              <br />
              dengan
            </Text>
            {collaborators.map((collaborator) => (
              <LinkBox
                key={collaborator.name}
                mr="8px"
              >
                <LinkOverlay
                  href={collaborator.link}
                  isExternal
                >
                  <GatsbyImage
                    image={collaborator.img}
                    alt={collaborator.name}
                  />
                </LinkOverlay>
              </LinkBox>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
