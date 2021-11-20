import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  item: {
    width: '96%',
    height: hp(5),
    alignSelf: 'center',
    alignItems: 'center',
  },
});
