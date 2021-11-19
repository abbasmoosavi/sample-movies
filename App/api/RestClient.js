import RNFetchBlob from 'rn-fetch-blob';
import NetInfo from '@react-native-community/netinfo';
import { store } from '..';
import { AppConfig } from '../configs';
import { StatusCodes } from './StatusCodes';
import Toast, { ToastDuration, ToastType } from '../utils/Toast';
import { navigate } from '../navigator/NavigationService';
import { NStrings } from '../navigator';

class RestClient {
  constructor() {
    this.defaultHeader = {
      'Accept-Language': 'fa',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  // eslint-disable-next-line class-methods-use-this
  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split('')
        .map((c) => {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
        })
        .join(''),
    );
  }

  // request method
  async request({ method, url, data = {}, customHeader = {}, useToast = true}) {
    const headers = { ...this.defaultHeader, ...customHeader };
    console.log('headers: ', headers);
    console.log('url: ', url);
    console.log('data: ', data);
    const result = await new Promise((resolve, reject) => {
      RNFetchBlob.config({ timeout: AppConfig.TIMEOUT })
        .fetch(method, url, headers, JSON.stringify(data))
        .then((response) => {
          console.log(`response`, response)
          if (response.type === 'base64') {
            resolve({ ...response, data: JSON.parse(this.b64DecodeUnicode(response.data)) });
          } else {
            resolve({ ...response, data: JSON.parse(response.data) });
          }
        })
        .catch((errorMessage, statusCode) => {
          // error handling
          console.log('statusCode', statusCode);
          console.log('errorMessage', JSON.stringify(errorMessage));
          NetInfo.fetch().then((state) => {
            console.log('Is connected?', state.isConnected);
            if (state.isConnected && statusCode) {
              resolve(statusCode);
            } else {
              resolve({ data: { success: false, message: 'No Internet connection' } });
            }
          });
        });
    })
      .then(async (response) => {
        const res = await this.responseHandler(response, useToast, headers, url, data, method);
        return res;
      })
      .catch(async (error) => {
        const res = await this.errorHandler(error);
        return res;
      });
    return result;
  }
  
  // eslint-disable-next-line class-methods-use-this
  async responseHandler(response, useToast, headers, url, params, method) {
    if (AppConfig.IS_DEBUG) console.log('response', JSON.stringify(response));
    const data = response.data;

    if (
      response?.respInfo?.status === StatusCodes.Faild.UNAUTHORIZED &&
      store.getState().auth?.token === null
    ) {
      if (store.getState().auth.token) {
        let result = await this.refreshTokenHandler();
        if (result.type === 'base64') {
          result = JSON.parse(this.b64DecodeUnicode(response.data));
        } else {
          result = JSON.parse(response.data);
        }
        if (result.success) {
          store.dispatch(
            AuthenticationActions.newTokenSuccess(
              result?.data?.token?.token,
              result?.data?.token?.refreshToken,
              result?.data?.expirationTime,
            ),
          );
          this.request({ method, url, data: params, customHeader: headers, useToast });
        } else {
          // token expired and user must be logout
          navigate(NStrings.Routes.AUTH_STACK);
          useToast = true;
        }
      } else {
        navigate(NStrings.Routes.AUTH_STACK);
        useToast = true;
      }
    } else if (response?.respInfo?.status === StatusCodes.Faild.INTERNAL_SERVER_ERROR) {
    } else if (response?.data?.data === 'E_INVALID_JWT_TOKEN') {
      navigate(NStrings.Routes.AUTH_STACK);
      useToast = true;
    }

    if (useToast)
      new Toast(
        '',
        data.message,
        data.success ? ToastType.SUCCESS : ToastType.ERROR,
        ToastDuration.MIDDLE,
      ).show();

    return data;
  }

  // eslint-disable-next-line class-methods-use-this
  async errorHandler(error) {
    if (AppConfig.IS_DEBUG) console.log('error in request', JSON.stringify(error));
    const object = {
      success: false,
      message: 'No Internet connection',
      data: {},
    };
    new Toast(object.message, '', ToastType.ERROR, ToastDuration.MIDDLE).show();
    return object;
  }
}

export default new RestClient();
