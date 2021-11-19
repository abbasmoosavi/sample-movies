import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from '@react-native-community/async-storage';
import { createNetworkMiddleware } from 'react-native-offline';
import Rehydration from './Rehydration';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'movies',
  ],
  whitelist: null,
  timeout: null,
};

export default (rootReducer, rootSaga) => {
  const middleware = [];

  /**
   * Create network middleware and queue configs
   * regexActionType listen to those actions that cointains following regex
   */
  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 1000,
    regexActionType: /FETCH|GET|REQUEST|SEND/,
  });

  middleware.push(networkMiddleware);

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

  const persistor = persistStore(store);

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  Rehydration.updateReducers(store);

  return { store, persistor };
};
