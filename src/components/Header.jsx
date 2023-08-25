import { HamburgerIcon } from '@chakra-ui/icons';
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
  Image,
  Link, LinkBox, List, Text,
  useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, Link as LinkGatsby, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import logo from '../images/logo.svg';
import logoMobile from '../images/logo-mobile.svg';

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

const StyledListItem = styled(Box)`
  list-style: none;
  border-radius: 10px 10px 0 0;
  position: relative;
  height: max-content;
  padding: 25px 0;
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
        background-color: #FFFFFF;
        a {
          color: #000000;
        }
        ul {
          opacity: 1;
          top: 100%;
          li {
            display: block;
          }
        }
      }
      `
  )}
`;

const StyledListItemChild = styled.li`
  background-color: #FFFFFF;
  list-style: none;
  transform-origin: top center;
  /* animation: ${slideDown} 200ms ${(p) => +p.idx * 60}ms ease-in forwards; */
  animation: ${slideDown} 300ms ease-in forwards;
  display: none;
  color: #FFFFFF;
  opacity: 0;
  border-bottom: 1px solid #000000;
  width: 100%;
  a {
    display: block;
    color: #000000;
    font-weight: 400;
    padding-right: 6px;
    font-size: 15px;
    white-space: pre-wrap;
    transition: .2s all ease-in-out;
    padding: 15px 25px;
    width: 100%;
    &:hover {
      text-decoration: none;
      color: var(--chakra-colors-brandPrimary-600);
      background: #eeefed;
    }
  }

`;

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery('(min-width: 1400px)');

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      cities: allMdx(sort: {
        fields: [frontmatter___year, frontmatter___title],
        order: [DESC, ASC],
      }) {
        nodes {
          frontmatter {
            slug
            title
            year
          }
          id
        }
      }
    }
  `);

  const navList = [
    {
      id: 1,
      text: 'Beranda',
      link: '/',
    },
    {
      id: 2,
      text: 'Tentang Program',
      link: '/tentang',
      children: [
        {
          id: 1,
          text: 'Apa dan Siapa',
          link: '/apa',
        },
        {
          id: 2,
          text: 'Mengapa dan Bagaimana',
          link: '/mengapa',
        },
      ],
    },
    {
      id: 3,
      text: 'Ekosistem Perfilman Lokal',
      link: '/ekosistem',
      children: data.cities.nodes.map((node) => ({
        id: node.id,
        text: node.frontmatter.title,
        link: `/${node.frontmatter.slug}`,
      })),
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
      link: '/kontak',
    },
  ];
  const navListNew = [
    {
      id: 2,
      text: 'Program',
      link: '/tentang',
      children: [
        {
          id: 1,
          text: 'Apa dan Siapa',
          link: '/apa',
        },
        {
          id: 2,
          text: 'Mengapa dan Bagaimana',
          link: '/mengapa',
        },
      ],
    },
    {
      id: 3,
      text: 'Ekosistem Perfilman',
      link: '/ekosistem',
      children: data.cities.nodes.map((node) => ({
        id: node.id,
        text: node.frontmatter.title,
        link: `/${node.frontmatter.slug}`,
      })),
    },
    {
      id: 4,
      text: 'Tindak Lanjut',
      link: '/tindaklanjut',
      children: [
        {
          id: 1,
          text: 'Balikpapan',
          link: '/tindaklanjut?city=balikpapan',
        },
        {
          id: 2,
          text: 'Banda Aceh',
          link: '/tindaklanjut?city=aceh',
        },
        {
          id: 3,
          text: 'Kupang',
          link: '/tindaklanjut?city=kupang',
        },
      ],
    },
    {
      id: 5,
      text: 'Semesta Data',
      link: '/',
    },
    {
      id: 6,
      text: 'Kemdikbudristek',
      link: '/',
      children: [
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
      ],
    },
    {
      id: 7,
      text: 'Kontak',
      link: '/kontak',
    },
  ];

  if (true) {
    return (
      <Box
        as="header"
        py={['28px', null, '8px']}
        borderBottom="1px solid black"
        position="fixed"
        top={0}
        left={0}
        zIndex={2}
        w="100%"
        maxW="100vw"
        background="#FFFFFF"
      >
        <Container>
          <Flex alignItems="center" justifyContent={{ base: 'space-between', xl: 'flex-start' }}>
            <LinkBox as={LinkGatsby} to="/" width={['130px', null, '300px']} minW={['130px', null, '300px']}>
              <Image
                src={logo}
                alt="afi_logo"
                width={300}
                height="auto"
                display={['none', null, 'block']}
                my="30px"
              />
              <Image
                src={logoMobile}
                alt="afi_logo"
                width={100}
                height="auto"
                display={['block', null, 'none']}
              />
            </LinkBox>
            <Flex
              as="nav"
              justifyContent="flex-end"
              width="100%"
              display={{ base: 'none', xl: 'flex' }}
            >
              <Flex
                justifyContent="flex-end"
                as="ul"
              >
                {navListNew.map((item) => (
                  <StyledListItem
                    as="li"
                    key={item.id}
                    hasChild={!!item.children?.length}
                  >
                    <Link
                      as={LinkGatsby}
                      fontSize={16}
                      fontWeight={400}
                      letterSpacing=".5px"
                      px="10px"
                      display="block"
                      _hover={{
                        color: 'var(--chakra-colors-brandPrimary-600) !important',
                        textDecoration: 'none',
                      }}
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                    {!!item.children?.length && (
                      <Flex
                        as="ul"
                        flexDir="column"
                        flexWrap="wrap"
                        maxH={item.id === 3 ? '270px' : 'unset'}
                        w={item.id === 3 ? 'auto' : 'max-content !important'}
                      >
                        {item.children.map((child, i) => (
                          <StyledListItemChild key={child.id} idx={i + 1}>
                            <Link as={LinkGatsby} to={child.link}>
                              {child.text}
                            </Link>
                          </StyledListItemChild>
                        ))}
                      </Flex>
                    )}
                  </StyledListItem>
                ))}
              </Flex>
            </Flex>
            <Button
              onClick={onOpen}
              variant="ghost"
              colorScheme="gray"
              p="2px"
              height="max-content"
              display={{ base: 'block', xl: 'none' }}
              id="buttonMenu"
              minH="unset"
              aria-label="buttonMenu"
            >
              <HamburgerIcon w="30px" h="30px" />
            </Button>
          </Flex>
        </Container>
        {!isDesktop && (
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
            size={['full', null, 'sm']}
            blockScrollOnMount
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="#000000" opacity="0.5" />
              <DrawerHeader p="16px">
                <Image
                  src={logo}
                  alt="afi_logo"
                  width={250}
                  height="auto"
                  mt="10px"
                  ml="10px"
                />
              </DrawerHeader>
              <DrawerBody p="16px">
                <Box
                  as="ul"
                  pb="20px"
                >
                  <Box as="li" py={['5px', null, '25px']} listStyleType="none">
                    <Link
                      as={LinkGatsby}
                      to="/"
                      p={['5px 10px', null, null, '0 20px']}
                      color={['brandPrimary.500', null, null, '#000000']}
                      fontWeight="500"
                      display="block"
                      transition=".2s all ease-in-out"
                    >
                      Beranda
                    </Link>
                  </Box>
                  {navListNew.map((nav) => (
                    <Box as="li" py={['5px', null, '25px']} listStyleType="none" key={nav.id}>
                      <Link
                        as={LinkGatsby}
                        to={nav.link}
                        target={nav?.external ? '_blank' : ''}
                        p={['5px 10px', null, null, '0 20px']}
                        color={['brandPrimary.500', null, null, '#000000']}
                        fontWeight="500"
                        display="block"
                        transition=".2s all ease-in-out"
                      >
                        {nav.text}
                      </Link>
                      {!!nav.children?.length && (
                        <List boxShadow="0px 2px 16px rgba(0, 0, 0, 0.05)">
                          {nav.children.map((child) => (
                            <Box as="li" key={child.id} listStyleType="none">
                              <Link
                                as={LinkGatsby}
                                to={child.link}
                                target={child?.external ? '_blank' : ''}
                                p="10px"
                                pl={['40px', null, null, '25px']}
                                color="#0000000"
                                fontWeight="500"
                                display="block"
                                borderBottom="1px solid #000000"
                                transition=".2s all ease-in-out"
                              >
                                {child.text}
                              </Link>
                            </Box>
                          ))}
                        </List>
                      )}
                    </Box>
                  ))}
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Box>
    );
  }
  return (
    <Box as="header" mt={[null, '24px']} mb={[null, '48px']} py="12px">
      <Container>
        <Flex alignItems="center" justifyContent={['space-between', null, 'flex-start']}>
          <LinkBox as={LinkGatsby} to="/" width={['130px', null, '200px']} minW={['130px', null, '200px']}>
            <StaticImage
              src="../images/afi_logo.svg"
              alt="afi_logo"
              placeholder="blurred"
              quality={100}
            />
          </LinkBox>
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
              pb="20px"
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
          <Button
            onClick={onOpen}
            variant="ghost"
            colorScheme="gray"
            p="16px"
            height="max-content"
            display={['block', null, 'none']}
            id="buttonMenu"
            aria-label="buttonMenu"
          >
            <HamburgerIcon />
          </Button>
        </Flex>
      </Container>
      {!isDesktop && (
        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="full">
          <DrawerOverlay />
          <DrawerContent maxW="calc(100vw - 12px)">
            <DrawerCloseButton color="brandRed.500" />
            <DrawerHeader pt="16px">
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
      )}
    </Box>
  );
}

export default Header;
