import { takeLatest, all, fork } from 'redux-saga/effects';
import { networkSaga, offlineActionTypes } from 'react-native-offline';
import { onConnectionChange } from './Network/NetworkSaga';
import MoviesSaga from './Movies/MoviesSaga';

export default function* root() {
  yield all([
    // Network
    fork(networkSaga, {
      pingInterval: 10000,
      pingTimeout: 4000,
      pingOnlyIfOffline: true,
      pingServerUrl: 'https://www.google.com/',
    }),
    takeLatest(offlineActionTypes.CONNECTION_CHANGE, onConnectionChange),
    fork(MoviesSaga),
  ]);
}
