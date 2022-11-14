import { Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const GridItemLeftContent = styled(GridItem)`
  @media screen and (min-width: 768px) {
    padding-right: 40px;
  }
`;

function GridContainer({ children }) {
  return (
    <Grid templateColumns={['1fr', null, '4fr 6fr']}>
      {children}
    </Grid>
  );
}

export default GridContainer;
