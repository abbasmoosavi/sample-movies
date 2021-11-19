import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import { AppNavigator } from '.';

const RootScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default RootScreen;
