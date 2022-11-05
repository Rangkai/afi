import React from 'react';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useMediaQuery,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HamburgerIcon } from '@chakra-ui/icons';

const navList = [
  {
    id: 1,
    text: 'Beranda',
    link: '/',
  },
  {
    id: 2,
    text: 'Tentang Program',
    link: '/about',
    children: [
      {
        id: 1,
        text: 'Apa dan Siapa',
        link: '/what',
      },
      {
        id: 2,
        text: 'Mengapa dan Bagaimana',
        link: '/how',
      },
    ],
  },
  {
    id: 3,
    text: 'Ekosistem Perfilman Lokal',
    link: '/ecosystem',
    children: [
      {
        id: 1,
        text: 'Balikpapan',
        link: '/city-balikpapan',
      },
      {
        id: 2,
        text: 'Banda Aceh',
        link: '/city-banda-aceh',
      },
      {
        id: 3,
        text: 'Purbalingga',
        link: '/city-banda-aceh',
      },
    ],
  },
  {
    id: 4,
    text: 'Tonton di Rangkai',
    link: 'https://rangkai.id/',
    external: true,
  },
  {
    id: 5,
    text: 'Hubungi',
    link: '/contact',
  },
];

const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  width: 108px;
  border-radius: 10px 10px 0 0;
  position: relative;
  height: max-content;
  ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    perspective: 1000px;
    z-index: 2;
  }
  ${(p) => p.hasChild && (
    `
      &:hover {
        background-color: var(--chakra-colors-brandBlue-500);
        a {
          color: #FFFFFF;
        }
        ul {
          opacity: 1;
          top: 100%;
          li {
            display: block;
            a {
              &:hover {
                text-decoration: none;
                color: var(--chakra-colors-brandRed-500);
              }
            }
          }
        }
      }
      `
  )}
`;

const StyledListItemChild = styled.li`
  background-color: var(--chakra-colors-brandBlue-500);
  list-style: none;
  transform-origin: top center;
  animation: ${slideDown} 200ms ${(p) => +p.idx * 60}ms ease-in forwards;
  display: none;
  color: #FFFFFF;
  opacity: 0;
  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
  a {
    display: block;
    color: #FFFFFF;
    font-weight: 700;
    padding: 10px;
    padding-right: 6px;
    font-size: 15px;
    white-space: pre-wrap;
  }

`;

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMd] = useMediaQuery('(min-width: 768px)');

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      desktop: file(relativePath: {eq: "afi_logo.png"}) {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 200
          )
        }
      }
      mobile: file(relativePath: {eq: "afi_logo.png"}) {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 130
          )
        }
      }
    }
  `);

  const afiLogoDesktop = getImage(data.desktop);
  const afiLogoMobile = getImage(data.mobile);

  return (
    <Box as="header" mt={[null, '24px']} mb={[null, '48px']} py="12px">
      <Container>
        <Flex alignItems="center" justifyContent={['space-between', null, 'flex-start']}>
          <Box width={['130px', null, '200px']} minW={['130px', null, '200px']}>
            <Box as={GatsbyImage} image={afiLogoDesktop} display={['none', null, 'block']} alt={data.desktop.name} width="100%" />
            <Box as={GatsbyImage} image={afiLogoMobile} display={['block', null, 'none']} alt={data.desktop.name} width="100%" />
          </Box>
          {isMd ? (
            <Flex
              as="nav"
              justifyContent="flex-end"
              width="100%"
              display={['none', null, 'flex']}
            >
              <Flex
                as="ul"
                px="10px"
                borderBottom="2px solid"
                borderColor="brandRed.500"
              >
                {navList.map((nav) => (
                  <StyledListItem
                    key={nav.id}
                    hasChild={!!nav.children?.length}
                  >
                    <Link
                      as={nav.external ? 'a' : LinkGatsby}
                      to={nav.link}
                      href={nav.link}
                      color="brandBlue.500"
                      fontWeight="700"
                      p="10px"
                      display="block"
                      fontSize="15px"
                      _hover={{
                        color: 'var(--chakra-colors-brandRed-500) !important',
                        textDecoration: 'none',
                      }}
                      target={nav?.external ? '_blank' : ''}
                    >
                      {nav.text}
                    </Link>
                    {!!nav.children?.length && (
                    <ul>
                      {nav.children.map((child, i) => (
                        <StyledListItemChild key={child.id} idx={i + 1}>
                          <Link as={LinkGatsby} to={child.link}>
                            {child.text}
                          </Link>
                        </StyledListItemChild>
                      ))}
                    </ul>
                    )}
                  </StyledListItem>
                ))}
              </Flex>
            </Flex>
          ) : (
            <Button
              onClick={onOpen}
              variant="ghost"
              colorScheme="gray"
              p="16px"
              height="max-content"
              display={['block', null, 'none']}
            >
              <HamburgerIcon />
            </Button>
          )}
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
        <DrawerOverlay />
        <DrawerContent maxW="calc(100vw - 12px)">
          <DrawerCloseButton />
          <DrawerHeader pt="10px">
            <Text color="brandRed.500" fontWeight="700" fontSize="20px">
              Apresiasi Film Indonesia
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Box
              as="ul"
              borderBottom="2px solid"
              borderColor="brandRed.500"
              pb="20px"
            >
              {navList.map((nav) => (
                <Box as="li" listStyleType="none" key={nav.id}>
                  <Link
                    as={LinkGatsby}
                    to={nav.link}
                    target={nav?.external ? '_blank' : ''}
                    p="10px"
                    color="brandRed.500"
                    fontWeight="600"
                    display="block"
                  >
                    {nav.text}
                  </Link>
                  {!!nav.children?.length && (
                    <ul>
                      {nav.children.map((child) => (
                        <Box key={child.id} listStyleType="none">
                          <Link
                            as={LinkGatsby}
                            to={child.link}
                            target={child?.external ? '_blank' : ''}
                            p="10px"
                            pl="25px"
                            color="brandBlue.500"
                            fontWeight="600"
                            display="block"
                          >
                            {child.text}
                          </Link>
                        </Box>
                      ))}
                    </ul>
                  )}
                </Box>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
