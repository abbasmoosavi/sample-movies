import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Helpers } from '../../themes';

export default StyleSheet.create({
  container: { flex: 1, width: wp(96), alignSelf: 'center', marginTop: hp(1) },
  searchContainer: { height: hp(10), ...Helpers.center },
});
