import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import { reducer as NetworkReducer } from 'react-native-offline';
import rootSaga from './Saga';
import configureStore from './CreateStore';
import { reducer as MoviesReducer } from './Movies/Reducers';

// Add a nested state of reducer for rehydrated
const moviesPersistConfig = {
  key: 'movies',
  storage,
  blacklist: ['loadingGetmovies', 'resultGetmovies'],
};

// Add a nested state of reducer for rehydrated
const networkPersistConfig = {
  key: 'network',
  storage,
  blacklist: ['isConnected'],
};

export default () => {
  const rootReducer = combineReducers({
    network: persistReducer(networkPersistConfig, NetworkReducer),
    movies: persistReducer(moviesPersistConfig, MoviesReducer),
  });

  return configureStore(rootReducer, rootSaga);
};
