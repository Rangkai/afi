import React from 'react';
import {
  Container, Flex, Text, Box, LinkOverlay, LinkBox, Heading, List, ListItem, Image, Divider,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useLayoutFormatter from '../hooks/useLayout';
import ButtonLink from './ButtonLink';
import logoFooter from '../images/logo-footer.svg';

const dikbudPrograms = [
  {
    id: 1,
    text: 'Dana Indonesiana',
    external: true,
    link: 'https://danaindonesiana.kemdikbud.go.id/berita/tentang/',
  },
  {
    id: 2,
    text: 'Indonesiana Film',
    external: true,
    link: 'https://kebudayaan.kemdikbud.go.id/ ',
  },
  {
    id: 3,
    text: 'Layar Indonesia',
    external: true,
    link: 'https://kebudayaan.kemdikbud.go.id/',
  },
  {
    id: 4,
    text: 'Indonesia TV',
    external: true,
    link: 'https://indonesiana.tv/',
  },
];

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
      file(relativePath: {eq: "logo-dikbud.png"}) {
        name
        childImageSharp {
          gatsbyImageData(height: 68, placeholder: BLURRED)
        }
      }
    }
  `);

  const links = {
    poetica_logo: 'https://cinemapoetica.com/en/',
    rangkai_logo: 'https://rangkai.id',
  };

  const collaborators = data.allFile.nodes?.map((collaborator) => ({
    name: collaborator.name,
    img: getImage(collaborator),
    link: links[collaborator.name],
  }));

  const dikbudLogo = getImage(data.file);

  const currYear = new Date().getFullYear();

  if (true) {
    return (
      <>
        <Box as="footer" py="48px" bgColor="#007399" color="white">
          <Container paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDirection={['column', null, 'row']}
            >
              <Flex
                width={['100%', null, getCol(6), getCol(4)]}
                flexDir={['column', null, 'row']}
                h="max-content"
                mb={['48px', null, 0]}
              >
                <Box w={['100%', null, getCol(4)]} px={[0, null, '12px']}>
                  <Image src={logoFooter} w="123px" mt={[0, null, '8px']} mb={['24px', null, '0']} />
                </Box>
                <Box w={['100%', null, getCol(8)]} pl={[0, null, '24px']} pr={[0, null, '12px']}>
                  <Text>
                    Program ini dirintis oleh Kementerian Pendidikan, Kebudayaan, Riset,
                    dan Teknologi dan dikelola oleh Cinema Poetica dan Rangkai.
                  </Text>
                </Box>
              </Flex>
              <Divider
                borderColor="white"
                borderBottomWidth="2px"
                mb="48px"
                opacity="1"
                display={['block', null, 'none']}
              />
              <Flex
                w={['100%', null, getCol(6), getCol(5)]}
                flexDir={['column', null, 'row']}
              >
                <Box mr="36px" mb={['24px', null, 0]}>
                  <GatsbyImage image={dikbudLogo} alt={data.file.name} />
                </Box>
                <div>
                  <Heading
                    as="h3"
                    textTransform="uppercase"
                    fontSize={['23px', '27px', null, null, '28px']}
                  >
                    Program Kemendikbudristek
                  </Heading>
                  <List>
                    {dikbudPrograms.map((item) => (
                      <ListItem key={item.id} mb="8px">
                        <ButtonLink iconColor="light" to={item.link} isExternal={item.external}>
                          {item.text}
                        </ButtonLink>
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box bg="rgb(33, 37, 41)" py="16px">
          <Container paddingInlineStart={['20px', null, '12px']} paddingInlineEnd={['20px', null, '12px']}>
            <Text mb="0" color="white" fontSize="10px">
              © 2023 Apresiasi Film Indonesia. All Rights Reserved.
              Bekerjasama dengan Cinema Poetica dan Rangkai.
            </Text>
          </Container>
        </Box>
      </>
    );
  }

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
                href="https://kebudayaan.kemdikbud.go.id/ditpmmb/"
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
