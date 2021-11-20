import React from 'react';
import { View, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Col } from 'react-native-easy-grid';
import Components from '../../Components';
import Style from './style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <Col style={Style.container}>
          <View style={Style.searchContainer}>
            <Components.common.SearchInput />
          </View>
          <View style={{ flex: 8 }}>
            <Components.lists.VerticalSearchList />
          </View>
        </Col>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
