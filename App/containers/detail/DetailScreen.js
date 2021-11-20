import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Helpers } from '../../themes';
import Components from '../../Components';

const DetailScreen = () => {
  const loading = useSelector((state) => state.movies?.loadingGetDetail);
  const resultGetDetail = useSelector((state) => state.movies?.resultGetDetail);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (resultGetDetail) {
      const array = [];
      Object.keys(resultGetDetail).forEach((key) => {
        const value = resultGetDetail[key];
        if (key !== 'Poster' && key !== 'Ratings' && key !== 'Response') {
          array.push({ key, value });
        }
      });
      setData(array);
    }
  }, [resultGetDetail]);

  return (
    <SafeAreaView style={[{ flex: 1 }, loading ? Helpers.center : []]}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Components.lists.VerticalDetailList data={data} resultGetDetail={resultGetDetail} />
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;
