/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { I18nManager } from 'react-native';
import Colors from './Colors';
import Constansts from './Constansts';
import Helpers from './Helpers';
import Metrics from './Metrics';
import Fonts from './Fonts';

export default {
  containerHeader: {
    backgroundColor: Colors.background,
    height: Constansts.HeaderHeight,
    ...Helpers.fullWidth,
    ...Helpers.row,
    ...Metrics.horizantalPadding,
  },
  containerScreen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.text,
    // textAlign: I18nManager.isRTL ? 'left' : 'right',
    ...Fonts.header,
  },
  subTitle: {
    color: Colors.text,
    // textAlign: I18nManager.isRTL ? 'left' : 'right',
    ...Fonts.h5,
  },
  text: {
    color: Colors.text,
    // textAlign: I18nManager.isRTL ? 'left' : 'right',
    ...Fonts.normal,
  },
  textButton: {
    color: Colors.white,
    ...Fonts.normal,
  },
  button: {
    backgroundColor: Colors.primary,
    width: Constansts.WidthButton,
    ...Helpers.borderRadiusButton,
    ...Metrics.heightButton,
  },
};
