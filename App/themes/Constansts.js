import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScreenSize } from '../utils';

const HeaderHeight = hp(10);
const BottomBarHeight = 55;
const HeaderIconSize = wp(4.5);
const BottomBarIconSize = ScreenSize(7);
const IconSize = ScreenSize(5);
const WidthButton = wp(88);
const PaddingIcon = wp(3);
const paddingText = wp(3);
const SafeAreaViewBottomBar = ScreenSize(3.5);
const paddingModal = wp(4);
const widthModal = wp(96);

export default {
  HeaderHeight,
  BottomBarHeight,
  HeaderIconSize,
  BottomBarIconSize,
  IconSize,
  WidthButton,
  PaddingIcon,
  paddingText,
  SafeAreaViewBottomBar,
  paddingModal,
  widthModal,
};
