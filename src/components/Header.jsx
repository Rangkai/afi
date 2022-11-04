import React from 'react';
import {
  Box, Container, Flex, Link,
} from '@chakra-ui/react';
import { graphql, Link as LinkGatsby, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      file(relativePath: {eq: "afi_logo.png"}) {
        name
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
    }
  `);

  const afiLogo = getImage(data.file);

  return (
    <Box as="header" mt={[null, '32px']} mb={[null, '56px']}>
      <Container>
        <Flex alignItems="center">
          <GatsbyImage image={afiLogo} alt={data.file.name} />
          <Flex
            as="nav"
            justifyContent="flex-end"
            width="100%"
          >
            <Flex
              as="ul"
              mb="20px"
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
                    as={LinkGatsby}
                    to={nav.link}
                    color="brandBlue.500"
                    fontWeight="700"
                    p="10px"
                    display="block"
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
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: {eq: "afi_logo.png"}) {
//       name
//       childImageSharp {
//         gatsbyImageData(width: 200)
//       }
//     }
//   }
// `;
