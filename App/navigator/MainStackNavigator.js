import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { NStrings } from '.';
import { DetailScreen, HomeScreen } from '../containers';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const userInfo = useSelector(state => state.auth?.user);

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        keyboardHandlingEnabled: false,
      }}
      initialRouteName={NStrings.Routes.HOME_SCREEN}>
      <Stack.Screen
        options={{ title: 'HOME' }}
        name={NStrings.Routes.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ title: 'DETAIL' }}
        name={NStrings.Routes.DETAIL_SCREEN}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
