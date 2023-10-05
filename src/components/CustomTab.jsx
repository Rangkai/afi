import { Button, useMultiStyleConfig, useTab } from '@chakra-ui/react';
import React from 'react';
import Arrow from './Arrow';

const CustomTab = React.forwardRef((props, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps['aria-selected'];

  const styles = useMultiStyleConfig('Tabs', tabProps);

  return (
    <Button
      __css={styles.tab}
      p="20px 40px"
      fontSize="20px"
      width="100%"
      justifyContent="flex-start"
      bg="fossil.400"
      color="#000000"
      marginBottom="0"
      borderBottom="0"
      _selected={{ color: 'white', bg: 'fossil.500' }}
      {...tabProps}
    >
      {tabProps.children}
      <Arrow dir="right" color={isSelected ? 'light' : 'dark'} />
    </Button>
  );
});

export default CustomTab;
