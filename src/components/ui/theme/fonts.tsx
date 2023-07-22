import {Platform} from 'react-native';

const fonts = {
  interBold:
    Platform.OS === 'android' ? 'fonts-interBoldAndroid' : 'fonts-interBoldIos',
};

export default fonts;