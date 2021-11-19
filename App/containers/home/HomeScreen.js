import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { NStrings } from '../../navigator';
import { navigate } from '../../navigator/NavigationService';
import LocationActions from '../../stores/Movies/Actions';
import { ApplicationStyles, Colors } from '../../themes';
import Style from './style';

const preventExtraRequest = false;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const resultGetLocation = useSelector(state => state.location?.resultGetLocation);

  useEffect(() => {
    if (searchTerm !== '') getLocationFromText();
  }, [searchTerm]);

  const getLocationFromText = () => {
    dispatch(LocationActions.getLocation({ address: searchTerm }));
  };

  const onSelectLocation = item => {
    navigate(NStrings.Routes.DETAIL_SCREEN, item);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={Style.itemContainer} onPress={onSelectLocation.bind(null, item)}>
        <View style={Style.addressWraper}>
          <Text style={ApplicationStyles.text}>{item?.formatted_address}</Text>
        </View>
        <View style={Style.rightIcon}>
          <OcticonsIcon name="chevron-right" size={22} color={Colors.iconColor} />
        </View>
      </TouchableOpacity>
    );
  };
  const keyExtractor = item => item?.place_id.toString();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <Col style={Style.container}>
          <View style={Style.searchContainer}>
            <Row style={Style.searchWraper}>
              <TextInput
                testID="textInput"
                value={searchTerm}
                onChangeText={value => setSearchTerm(value)}
                placeholder="Enter country or city name"
                style={Style.textInput}
              />
              <View style={Style.icon}>
                <OcticonsIcon name="search" size={22} color={Colors.iconColor} />
              </View>
            </Row>
          </View>
          <View style={{ flex: 8 }}>
            <FlatList
              testID="flatList"
              data={resultGetLocation}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={resultGetLocation?.length > 20}
              scrollEventThrottle={1}
            />
          </View>
        </Col>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
