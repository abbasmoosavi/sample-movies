import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { Row } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import MoviesActions from '../../../stores/Movies/Actions';
import Style from './style';
import { Colors } from '../../../themes';

let searchTimer = null;

const SearchInput = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies?.loadingGetMovies);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    searchTimer = setTimeout(() => {
      getMoviesFromText();
    }, 700);
  }, [searchTerm]);

  const getMoviesFromText = useCallback(() => {
    if (searchTerm !== null) dispatch(MoviesActions.getMovies({ s: searchTerm, page: 1 }));
  }, [searchTerm]);

  return (
    <Row style={Style.searchWraper}>
      <TextInput
        testID="textInput"
        value={searchTerm}
        onChangeText={(value) => setSearchTerm(value)}
        placeholder="Enter title"
        style={Style.textInput}
      />
      <View style={Style.icon}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <OcticonsIcon name="search" size={22} color={Colors.iconColor} />
        )}
      </View>
    </Row>
  );
};

export default SearchInput;
