import AsyncStorage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';

const updateReducers = (store) => {
  const reducerVersion = '1.0';

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        // console.log({
        //   name: 'PURGE',
        //   value: {
        //     'Old Version:': localVersion,
        //     'New Version:': reducerVersion,
        //   },
        //   preview: 'Reducer Version Change Detected',
        //   important: true,
        // });
        persistStore(store, null, null).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, null);
      }
    })
    .catch(() => {
      persistStore(store, null, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
