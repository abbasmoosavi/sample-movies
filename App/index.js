import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ReduxNetworkProvider } from 'react-native-offline';
import CreateStore from './stores';
import { RootScreen } from './navigator';

enableScreens(false);
export const { store, persistor } = CreateStore();

const App = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider
        pingOnlyIfOffline
        pingServerUrl="https://google.com/"
        pingTimeout={5000}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <RootScreen />
          </SafeAreaProvider>
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
};
export default App;
