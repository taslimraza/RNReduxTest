import {StyleSheet} from 'react-native';
import {lightTheme, darkTheme} from '../../theme/theme';

export const styles = isDark =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? darkTheme.backgroundColor : lightTheme.backgroundColor,
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: isDark ? darkTheme.separatorColor : lightTheme.separatorColor,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyTxt: {
      fontSize: 18,
      textAlign: 'center',
      marginHorizontal: 20,
      color: isDark ? darkTheme.color : lightTheme.color,
    },
    exportBtn: {
      height: 40,
      width: 120,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: 'blue',
      borderRadius: 5
    },
    exportBtnTxt: {
      color: 'white',
      fontSize: 18
    }
  });
