import { StyleSheet } from 'react-native';
import { ScreenSize } from '../utils';

const size = {
  h1: ScreenSize(8.3),
  h2: ScreenSize(6.8),
  h3: ScreenSize(5.8),
  h4: ScreenSize(4.8),
  h5: ScreenSize(3.8),
  input: ScreenSize(3.8),
  header: ScreenSize(4.3),
  medium: ScreenSize(2.8),
  regular: ScreenSize(2.4),
  small: ScreenSize(1.3),
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  input: {
    fontSize: size.input,
  },
  normal: {
    fontSize: size.regular,
  },
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  header: {
    fontSize: size.header,
  },
});
