import {
  Box, Flex, Grid, GridItem,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import useLayout from '../hooks/useLayout';

export const GridItemLeftContent = styled(GridItem)`
  @media screen and (min-width: 768px) {
    padding-right: 76px;
  }
`;

function GridContainer({ children }) {
  const { getCol } = useLayout();
  return (
    <Flex justifyContent="center">
      <Box w={['100%', null, getCol(8)]}>
        <Grid templateColumns="1fr">
          {children}
        </Grid>
      </Box>
    </Flex>
  );
}

export default GridContainer;
