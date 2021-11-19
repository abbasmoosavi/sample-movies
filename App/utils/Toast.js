import RNToast from 'react-native-toast-message';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

class Toast {
  /**
   *
   * @param {String} title Title of toast
   * @param {String} text Text of toast
   * @param {String} type ToastType.success | ToastType.ERROR | ToastType.INFO
   * @param {Number} duration Duration of show toast
   */
  constructor(title, text, type, duration) {
    this.RNToast = RNToast;
    this.title = title;
    this.text = text;
    this.type = type;
    this.duration = duration;
  }

  /**
   * Show toast
   */
  show() {
    this.RNToast.show({
      type: this.type,
      text1: this.title,
      text2: this.text,
      visibilityTime: this.duration,
      autoHide: true,
      topOffset: StaticSafeAreaInsets.safeAreaInsetsTop,
    });
  }
}

export const ToastType = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

export const ToastDuration = {
  SHORT: 2000,
  MIDDLE: 3000,
  LONG: 4000,
};

export default Toast;
