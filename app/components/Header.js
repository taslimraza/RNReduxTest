import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useDispatch} from 'react-redux';
import { setIsDarkThemeAction } from '../redux/actions/themeAction';

const Header = ({title, onBackClick, isDark}) => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(isDark);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    dispatch(setIsDarkThemeAction(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    setIsEnabled(isDark);
  }, [isDark])

  return (
    <View style={styles.container}>
      {onBackClick && (
        <TouchableOpacity style={styles.backBtn} onPress={onBackClick}>
          <Image
            style={styles.backImg}
            source={require('../assets/arrow.png')}></Image>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <Switch
        style={{position: "absolute", right: 20}}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
  },
  backBtn: {
    padding: 15,
  },
  backImg: {
    width: 16,
    height: 16,
  },
});

export default Header;
