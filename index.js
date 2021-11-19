/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App/index';
import { decode, encode } from 'base-64';
import { name as appName } from './app.json';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

AppRegistry.registerComponent(appName, () => App);
