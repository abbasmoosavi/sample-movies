import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ApplicationStyles } from '../../themes';
import Style from './style';

const DetailsRow = ({ item }) => {
  return (
    <View style={Style.itemContainer}>
      <View style={Style.addressWraper}>
        <Text style={ApplicationStyles.text}>{item?.name}</Text>
        <Text style={ApplicationStyles.text}>{item?.city}</Text>
      </View>
      <View style={Style.rightIcon}>
        <FastImage
          source={{ uri: item?.thumbnail_url }}
          style={Style.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </View>
  );
};

export default DetailsRow;
