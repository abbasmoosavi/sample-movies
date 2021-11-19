import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '.';
import { navigationRef } from './NavigationService';

const AppNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
