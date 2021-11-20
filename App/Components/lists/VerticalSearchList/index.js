import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Components from '../..';

const VerticalSearchList = () => {
  const resultGetMovies = useSelector((state) => state.movies?.resultGetMovies);
  const keyExtractor = (item) => item?.imdbID?.toString();
  const renderItem = ({ item }) => <Components.rows.RowSearchList item={item} />;

  return (
    <FlatList
      testID="flatList"
      data={resultGetMovies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={resultGetMovies?.length > 20}
      scrollEventThrottle={1}
    />
  );
};

export default VerticalSearchList;
