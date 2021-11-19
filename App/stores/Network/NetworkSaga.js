import { put } from 'redux-saga/effects';

// eslint-disable-next-line require-yield
export function* onConnectionChange(action) {
  console.log('action', action);
}
