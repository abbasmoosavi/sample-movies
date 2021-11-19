import React from 'react';
import { CommonActions, DrawerActions, StackActions, TabActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const toggleDrawer = () => {
  navigationRef?.current.dispatch(DrawerActions.toggleDrawer());
};

export const navigate = (name, params) => {
  try {
    navigationRef.current?.navigate(name, params);
  } catch (error) {
    console.log('error', error);
  }
};

export const navigateAndReset = (routes) => {
  try {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes,
      }),
    );
  } catch (error) {
    console.log('error', error);
  }
};

export const nestedNavigate = (stackName, name, params) => {
  try {
    navigationRef.current?.navigate(stackName, {
      screen: name,
      params,
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const jumpTo = (tabName, params) => {
  try {
    const jumpToAction = TabActions.jumpTo(tabName, params);
    navigationRef.current?.dispatch(jumpToAction);
  } catch (error) {
    console.log('error', error);
  }
};

export const naviagetPop = () => {
  try {
    navigationRef.current?.dispatch(StackActions.pop());
  } catch (error) {
    console.log('error', error);
  }
};

export default {
  navigate,
  navigateAndReset,
  nestedNavigate,
  goBack,
  jumpTo,
  naviagetPop,
};
