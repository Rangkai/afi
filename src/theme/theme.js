import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './components/button-theme';
import containerTheme from './components/container-theme';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1400px',
};

const theme = {
  breakpoints,
  colors: {
    brandBlue: {
      500: '#1C50D6', // background color
      600: '#1740a8', // hover color
      700: '#1740a8', // active color
    },
    brandRed: {
      500: '#ff3c00', // background color
    },
  },
  components: {
    Button: buttonTheme,
    Container: containerTheme,
    Text: {
      baseStyle: {
        marginBottom: '8px',
        fontSize: '20px',
      },
    },
  },
};

export default extendTheme(theme);
