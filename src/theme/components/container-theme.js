import { defineStyleConfig } from '@chakra-ui/react';

const containerTheme = defineStyleConfig({
  sizes: {
    md: {
      maxWidth: ['100%', '540px', '720px', '960px', '1140px', '1320px'],
      px: '12px',
    },
  },
  defaultProps: {
    size: 'md',
  },
});

export default containerTheme;
