import React from 'react';
import { Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Components from '../..';
import Style from './style';

const HEADER_EXPANDED_HEIGHT = hp(55);
const HEADER_COLLAPSED_HEIGHT = hp(30);

const VerticalDetailList = ({ data, resultGetDetail }) => {
  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });
  const keyExtractor = (item, index) => index?.toString();
  const renderItem = ({ item }) => <Components.rows.RowDetailList item={item} />;
  const ListHeaderComponent = () => (
    <Animated.View style={{ height: headerHeight }}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: resultGetDetail?.Poster,
        }}
        style={Style.image}
      />
    </Animated.View>
  );

  return (
    <Animated.FlatList
      testID="flatList"
      data={data}
      bounces={false}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        { useNativeDriver: false },
      )}
      contentContainerStyle={{ minHeight: hp(150) }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      scrollEventThrottle={1}
    />
  );
};

export default VerticalDetailList;
