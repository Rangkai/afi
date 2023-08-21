import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './components/button-theme';
import containerTheme from './components/container-theme';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '993px',
  xl: '1200px',
  '2xl': '1400px',
};

const theme = {
  breakpoints,
  colors: {
    brandBlue: {
      500: '#1C50D6', // background color
      600: '#ff3c00', // hover color
      700: '#ff3c00', // active color
    },
    brandRed: {
      500: '#ff3c00', // background color
      600: '#1C50D6',
      700: '#1C50D6',
    },
    brandPrimary: {
      500: '#61d8ff', // background color
      600: '#007399',
      700: '#61d8ff',
    },
    garlic: {
      500: '#d9dcc9', // background color
      600: '#d9dcc9',
      700: '#d9dcc9',
    },
    fossil: {
      500: '#6d6b5f',
    },
    knit: {
      500: '#8a897f',
    },
    blueOcean: {
      500: '#007399',
    },
    telorAsin: {
      400: '#99c7d6',
      500: '#c2dde7',
    },
  },
  lineHeights: {
    shorter: 1.2,
    base: 1.5,
    tall: 1.7,
  },
  components: {
    Button: buttonTheme,
    Container: containerTheme,
    Text: {
      baseStyle: {
        marginBottom: '8px',
        fontSize: '15px',
        lineHeight: 'tall',
        color: 'colors.blue',
        letterSpacing: '.5',
      },
    },
    Heading: {
      baseStyle: {
        lineHeight: 'shorter',
        marginBottom: '12px',
        fontWeight: '400',
        fontSize: '30px',
      },
    },
  },
  fonts: {
    body: 'Plus Jakarta Sans',
    heading: 'Azeret Mono',
  },
};

export default extendTheme(theme);
