import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ApplicationStyles, Colors, Helpers } from '../../themes';

export default StyleSheet.create({
  container: { flex: 1, width: wp(96), alignSelf: 'center', marginTop: hp(1) },
  searchContainer: { height: hp(10), ...Helpers.center },
  searchWraper: {
    width: '100%',
    height: '95%',
    backgroundColor: Colors.searchBack,
    borderRadius: 10,
  },
  textInput: { flex: 6, height: '100%', ...ApplicationStyles.title },
  icon: {
    flex: 1,
    height: '100%',
    ...Helpers.center,
  },
  itemContainer: {
    height: hp(10),
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.diactive,
    borderRadius: 10,
    marginTop: hp(2),
    padding: wp(4),
    flexDirection: 'row',
  },
  addressWraper: { flex: 6, height: '100%', justifyContent: 'center' },
  rightIcon: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
