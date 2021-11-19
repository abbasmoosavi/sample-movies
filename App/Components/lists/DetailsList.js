import React from 'react';
import { FlatList } from 'react-native';
import Components from '..';

const DetailsList = ({ data, testID }) => {
  const renderItem = ({ item }) => <Components.rows.DetailsRow item={item} />;
  const keyExtractor = item => item?.id.toString();

  return (
    <FlatList
      testID={testID}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={data?.length > 20}
      scrollEventThrottle={1}
    />
  );
};

export default DetailsList;
