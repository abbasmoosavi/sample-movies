/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Text } from 'react-native';
import { Row } from 'react-native-easy-grid';
import { ApplicationStyles } from '../../../themes';
import Style from './style';

const RowDetailList = ({ item }) => {
  return (
    <Row style={Style.item}>
      <Text style={ApplicationStyles.text}>{item?.key}:</Text>
      <Text style={ApplicationStyles.title}> {item?.value}</Text>
    </Row>
  );
};

export default RowDetailList;
