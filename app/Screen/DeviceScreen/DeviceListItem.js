import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {darkTheme, lightTheme} from '../../theme/theme';

const DeviceListItem = ({item, onClick, isDark}) => {
  return (
    <TouchableOpacity style={styles(isDark).container} onPress={onClick}>
      <Text style={styles(isDark).txtColor}>Model - {item.model ? item.model : 'NA'}</Text>
      <Text style={styles(isDark).txtColor}>OS - {item.os ? item.os : 'NA'}</Text>
      <Text style={styles(isDark).txtColor}>
        Current Owner - {item.currentOwner ? item.currentOwner : 'NA'}
      </Text>
      <Text style={styles(isDark).txtColor}>note - {item.note ? item.note : 'NA'}</Text>
    </TouchableOpacity>
  );
};

const styles = isDrak =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    txtColor: {
      color: isDrak ? darkTheme.color : lightTheme.color,
    },
  });

export default DeviceListItem;
