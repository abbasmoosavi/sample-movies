import { Platform, StatusBar, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const deviceHeight = isIphoneX()
  ? height - 78
  : Platform.OS === 'android'
  ? height - StatusBar.currentHeight
  : height;
function RFValue(percent) {
  const heightPercent = (percent * deviceHeight) / 680;
  return Math.round(heightPercent);
}

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || dimen.height === 896 || dimen.width === 896)
  );
}
export default (num) => {
  if (num < 1 && num > 30) return 0;
  return RFValue(10 + (num - 1) * 2);
};
