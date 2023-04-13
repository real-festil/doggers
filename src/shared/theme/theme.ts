import { extendTheme } from 'native-base';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const theme = extendTheme({
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
      },
    },
   
  },
});

export default theme;
