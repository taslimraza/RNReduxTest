/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;

  it('render component', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(component).toBeTruthy();
  });
});
