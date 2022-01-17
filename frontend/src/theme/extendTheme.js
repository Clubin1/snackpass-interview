import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#f77070',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0098ae',
    },
    red: {
      100: '#ff3d3d',
      200: '#f77070'
    },
    white: {
      100: '#ffffff'
    }
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default customTheme;