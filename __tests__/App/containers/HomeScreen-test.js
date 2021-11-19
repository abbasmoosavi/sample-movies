/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../../../App/containers/home/HomeScreen';
import * as ReactRedux from 'react-redux';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

describe('HomeScreen', () => {
  it('renders correctly', () => {
    renderer.create(<HomeScreen />);
  });

  it('Has a TextInput', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('textInput')).toBeDefined();
  });

  it('TextInput should value is Rome', () => {
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
    ReactRedux.useSelector = jest.fn().mockImplementation(() => mockSelector);

    const { getByTestId } = render(<HomeScreen />);
    const textInput = getByTestId('textInput');
    fireEvent.changeText(textInput, 'Rome');
    expect(textInput.props.value).toBe('Rome');
  });

  it('Has a FlatList', () => {
    const { getByTestId } = render(<HomeScreen />);
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

    const { getByTestId } = render(<HomeScreen />);
    const flatList = getByTestId('flatList');
    fireEvent.scroll(flatList, eventData);
  });
});
