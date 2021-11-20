import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Helpers, Metrics } from '../../../themes';

export default StyleSheet.create({
  searchWraper: {
    width: '100%',
    height: '95%',
    backgroundColor: Colors.searchBack,
    borderRadius: 10,
    ...Metrics.smallHorizontalPadding,
  },
  textInput: { flex: 6, height: '100%', ...ApplicationStyles.title },
  icon: {
    flex: 1,
    height: '100%',
    ...Helpers.center,
  },
});
