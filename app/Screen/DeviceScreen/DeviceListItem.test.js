import React from 'react';
import { render } from 'react-native-testing-library';
import DeviceListItem from './DeviceListItem';

describe('DeviceListItem', () => {

  it('renders the component', () => {
    const item = {
        model: "Test",
        os: "Test",
        currentOwner: "Test",
        note: "Test"
    }
    const component = render(<DeviceListItem item={item}/>);
    expect(component).toBeTruthy();
  });

});