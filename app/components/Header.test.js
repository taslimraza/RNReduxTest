import React from 'react';
import { render } from 'react-native-testing-library';
import Header from './Header';

describe('Header', () => {

  it('renders the component', () => {
    const component = render(<Header title="Test"/>);
    expect(component).toBeTruthy();
  });

});