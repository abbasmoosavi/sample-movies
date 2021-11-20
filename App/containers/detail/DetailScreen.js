import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Col } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import Components from '../../Components';
import Style from './style';

const DetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const resultGetTours = useSelector(state => state.tourmega?.resultGetTours);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Col style={Style.container}>
        <Components.lists.DetailsList testID="flatList" data={resultGetTours} />
      </Col>
    </SafeAreaView>
  );
};

export default DetailScreen;
