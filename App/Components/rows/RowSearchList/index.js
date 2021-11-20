/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Row } from 'react-native-easy-grid';
import FastImage from 'react-native-fast-image';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useDispatch } from 'react-redux';
import MoviesActions from '../../../stores/Movies/Actions';
import { ApplicationStyles, Colors } from '../../../themes';
import Style from './style';

const RowSearchList = ({ item }) => {
  const dispatch = useDispatch();
  const onSelectMovies = () => {
    dispatch(MoviesActions.getDetail({ i: item?.imdbID }));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={Style.itemContainer}
      onPress={onSelectMovies.bind(null, item)}>
      <Row>
        <View style={Style.startSection}>
          <Text style={ApplicationStyles.title}>{item?.Title}</Text>
        </View>
        <View style={Style.endSection}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={{ uri: item?.Poster }}
            style={Style.image}
          />
        </View>
      </Row>
      <Row>
        <View style={Style.startSection}>
          <Text style={ApplicationStyles.text}>Year: {item?.Year}</Text>
        </View>
        <View style={Style.endSection}>
          <OcticonsIcon name="chevron-right" size={22} color={Colors.iconColor} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default RowSearchList;
