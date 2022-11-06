import { defineStyleConfig } from '@chakra-ui/react';

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: '700',
    borderRadius: 15,
  },
  sizes: {
    md: {
      fontSize: '22px',
      minHeight: '65px',
      height: 'max-content',
      px: '40px',
      py: '15px',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default buttonTheme;
