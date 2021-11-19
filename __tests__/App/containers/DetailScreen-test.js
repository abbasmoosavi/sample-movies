/**
 * @format
 */

import 'react-native';
import React from 'react';
import * as ReactRedux from 'react-redux';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import DetailScreen from '../../../App/containers/detail/DetailScreen';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

describe('DetailScreen', () => {
  it('renders correctly', async () => {
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
    ReactRedux.useSelector = jest.fn().mockImplementation(() => mockSelector);

    const route = { params: { geometry: { location: { lat: 111, lng: 1 } } } };
    let root;
    renderer.act(() => {
      root = renderer.create(<DetailScreen route={route} />);
    });
  });

  it('Has a FlatList', () => {
    const { getByTestId } = render(<DetailScreen />);
    expect(getByTestId('flatList')).toBeDefined();
  });

  it('FlatList should scroll', () => {
    const eventData = {
      nativeEvent: {
        contentOffset: {
          x: 0,
          y: 425,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 885,
          width: 328,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 469,
          width: 328,
        },
      },
    };

    const { getByTestId } = render(<DetailScreen />);
    const flatList = getByTestId('flatList');
    fireEvent.scroll(flatList, eventData);
  });
});
