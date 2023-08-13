import { Text } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import arrow from '../images/arrow.svg';

const ArrowStyled = styled(Text)`
  display: inline-block;
  background: url(${arrow}) center center no-repeat;
  background-size: contain;
  transition: .2s all ease-in-out;
`;

const dirOption = {
  right: '270',
};
const colorOption = {
  light: 'brightness(0) invert(1)',
  dark: 'brightness(0)',
};
function Arrow({ dir, color, ...props }) {
  return (
    <ArrowStyled
      as="i"
      transform={`rotate(${dirOption[dir] || 0}deg)`}
      filter={colorOption[color] || 'none'}
      w="15px"
      h="15px"
      ml="10px"
      mb="0"
      {...props}
    />
  );
}

export default Arrow;
