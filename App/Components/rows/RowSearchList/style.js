import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors, Helpers, Metrics } from '../../../themes';

export default StyleSheet.create({
  icon: {
    flex: 1,
    height: '100%',
    ...Helpers.center,
  },
  itemContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.diactive,
    borderRadius: 10,
    ...Metrics.smallTopMargin,
    ...Metrics.smallPadding,
  },
  startSection: { flex: 3, height: '100%', justifyContent: 'center', alignItems: 'flex-start' },
  endSection: {
    flex: 7,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    height: wp(40),
    width: wp(40),
    borderRadius: 10,
  },
});
