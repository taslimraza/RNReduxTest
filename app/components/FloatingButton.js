import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FloatingButton = ({onClick}) => {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onClick}>
            <Text style={styles.item}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute", 
        right: 30, 
        bottom: 30,
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center"
    },
    item: {
        color: 'white',
        fontSize: 28
    }
})

export default FloatingButton;