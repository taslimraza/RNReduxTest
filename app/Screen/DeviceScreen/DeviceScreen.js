import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import Toast from 'react-native-simple-toast';
import {styles} from './styles';
import Header from '../../components/Header';
import {
  addDeviceAction,
  deleteDeviceAction,
  updateDeviceAction,
} from '../../redux/actions/deviceActions';
import {clearQuoteAction, getQuoteAction} from '../../redux/actions/quoteActions';
import {darkTheme, lightTheme} from '../../theme/theme';

const DeviceScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const quoteData = useSelector(state => state.quoteData);
  const isDark = useSelector(state => state.themeData?.isDark);

  const {item} = route.params;
  const [model, setModel] = useState(item?.model);
  const [os, setOS] = useState(item?.os);
  const [currentOwner, setCurrentOwner] = useState(item?.currentOwner);
  const [note, setNote] = useState(item?.note);
  const [disableInput, setDisableInput] = useState(item ? true : false);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    if (quoteData && quoteData.length > 0) {
      Alert.alert(quoteData[0]?.q);
      dispatch(deleteDeviceAction(item));
      Toast.show('Device Deleted!');
      dispatch(clearQuoteAction());
      goBack();
    }
  }, [quoteData]);

  const goBack = () => {
    navigation.goBack();
  };

  const onEdit = () => {
    setDisableInput(!disableInput);
    if (!disableInput) {
      //update data
      const data = {
        id: item.id,
        model,
        os,
        currentOwner,
        note,
      };
      dispatch(updateDeviceAction(data));
      Toast.show('Device Updated!');
      goBack();
    }
  };

  const onDelete = () => {
    dispatch(getQuoteAction());
  };

  const addDevice = () => {
    if(!model) {
        Toast.show("Please enter model!");
        return;
    }
    if(!os) {
        Toast.show("Please enter os!");
        return;
    }
    if(!currentOwner) {
        Toast.show("Please enter current owner!");
        return;
    }
    if(!note) {
        Toast.show("Please enter note!");
        return;
    }
    const data = {
      id: Math.random().toString(36).substring(2, 8), //random unique Id
      model,
      os,
      currentOwner,
      note,
    };
    dispatch(addDeviceAction(data));
    Toast.show('Device Added!');
    goBack();
  };

  return (
    <SafeAreaView style={styles(isDark).container}>
      <Header
        title={item ? 'Device Details' : 'Add Device'}
        onBackClick={goBack}
        isDark={isDark}
      />
      <TextInput
        style={styles(isDark).input}
        onChangeText={value => setModel(value)}
        value={model}
        placeholder="Enter Model"
        placeholderTextColor={isDark ? darkTheme.placeholderTextColor : lightTheme.placeholderTextColor}
        editable={!disableInput}
      />
      <TextInput
        style={styles(isDark).input}
        onChangeText={value => setOS(value)}
        value={os}
        placeholder="Enter OS"
        placeholderTextColor={isDark ? darkTheme.placeholderTextColor : lightTheme.placeholderTextColor}
        editable={!disableInput}
      />
      <TextInput
        style={styles(isDark).input}
        onChangeText={value => setCurrentOwner(value)}
        value={currentOwner}
        placeholder="Enter Current Owner"
        placeholderTextColor={isDark ? darkTheme.placeholderTextColor : lightTheme.placeholderTextColor}
        editable={!disableInput}
      />
      <TextInput
        style={styles(isDark).input}
        onChangeText={value => setNote(value)}
        value={note}
        placeholder="Enter Note"
        placeholderTextColor={isDark ? darkTheme.placeholderTextColor : lightTheme.placeholderTextColor}
        editable={!disableInput}
      />
      <View style={styles(isDark).btnLayout}>
        {item ? (
          <View style={styles(isDark).btnLayout}>
            <TouchableOpacity
              style={[styles(isDark).btn, styles(isDark).editBtn]}
              activeOpacity={0.5}
              onPress={onEdit}>
              <Text style={styles(isDark).btnTxt}>
                {disableInput ? 'Edit' : 'Submit'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles(isDark).btn, styles.deleteBtn]}
              activeOpacity={0.5}
              onPress={onDelete}>
              <Text style={styles(isDark).btnTxt}>Delete</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles(isDark).btn]}
            activeOpacity={0.5}
            onPress={addDevice}>
            <Text style={styles(isDark).btnTxt}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
      {item && (
        <View style={styles(isDark).QRLayout}>
          <TouchableOpacity
            style={styles(isDark).btn}
            onPress={() => setShowQRCode(!showQRCode)}>
            <Text style={styles(isDark).btnTxt}>
              {showQRCode ? 'Hide QR' : 'Show QR'}
            </Text>
          </TouchableOpacity>
          {showQRCode && (
            <View style={{marginTop: 20}}>
              <QRCode value={item.id} />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default DeviceScreen;
