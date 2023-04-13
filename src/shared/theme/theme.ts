import { extendTheme } from 'native-base';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const theme = extendTheme({
  colors: {
    primary: {
      50: '#020b0d',
      100: '#07161a',
      200: '#102d33',
      300: '#1c434d',
      400: '#275966',
      500: '#337080',
      600: '#508c99',
      700: '#72a8b3',
      800: '#ADC8CC',
      900: '#e6e0dc',
    },
  },
  sizes: { screenHeight, screenWidth },
  components: {
    Center: {
      defaultProps: {
        flex: 1,

      },
    },
    Container: {
      defaultProps: {
        flex: 1,
      },
      variants: {
        withHorizontalPadding: {
          backgroundColor: 'red',
        },
      },
    },
    Box: {
      defaultProps: {
        flex: 1,
        width: '100%',
      },
    },
    Button: {
      baseStyle: {
        textAlign: 'center',
      },
    },
   
  },
});

export default theme;
