import {StyleSheet} from 'react-native';
import {darkTheme, lightTheme} from '../../theme/theme';

export const styles = isDark =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark
        ? darkTheme.backgroundColor
        : lightTheme.backgroundColor,
    },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: isDark ? darkTheme.inputBorderColor : lightTheme.inputBorderColor,
      color: isDark ? darkTheme.color : lightTheme.color,
    },
    btnLayout: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    btn: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    editBtn: {
      marginRight: 10,
    },
    deleteBtn: {
      marginLeft: 10,
    },
    btnTxt: {
      color: 'white',
      fontSize: 18,
    },
    QRLayout: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
