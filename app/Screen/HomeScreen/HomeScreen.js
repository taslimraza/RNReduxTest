import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import FileWriter from 'react-native-file-writer';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import DeviceListItem from '../DeviceScreen/DeviceListItem';
import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  const devices = useSelector(state => state.deviceData);
  const isDark = useSelector(state => state.themeData?.isDark);

  const openDeviceScreen = item => {
    navigation.navigate('Device', {item});
  };

  const exportDevices = () => {};

  const renderEmptyList = () => {
    return (
      <View style={styles(isDark).emptyListContainer}>
        <Text style={styles(isDark).emptyTxt}>
          No Devices Available! Please Add your device!
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles(isDark).container}>
      <Header title="Devices List" isDark={isDark} />
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={devices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <DeviceListItem
            item={item}
            onClick={() => openDeviceScreen(item)}
            isDark={isDark}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={styles(isDark).separator}></View>
        )}
        ListEmptyComponent={renderEmptyList}
      />
      {devices && devices.length > 0 && (
        <TouchableOpacity
          style={styles(isDark).exportBtn}
          activeOpacity={0.5}
          onPress={exportDevices}>
          <Text style={styles(isDark).exportBtnTxt}>Export</Text>
        </TouchableOpacity>
      )}
      <FloatingButton onClick={() => openDeviceScreen()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
