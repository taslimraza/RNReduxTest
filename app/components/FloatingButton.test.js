import React from 'react';
import { render } from 'react-native-testing-library';
import FloatingButton from './FloatingButton';

describe('FloatingButton', () => {

  it('renders the component', () => {
    const component = render(<FloatingButton />);
    expect(component).toBeTruthy();
  });

});