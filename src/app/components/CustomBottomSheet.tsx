import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, use, useEffect, useState, } from "react";
import { Alert, Button, GestureResponderEvent, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";



// The stopwatch itself which follows - https://www.online-stopwatch.com/
export default function CustomBottomSheet() {
    function onPress() {
        Alert.alert("Creating new stopwatch todo")
        return 1;
    }

    return (<View style={styles.container}>
        <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontWeight: "thin", fontStyle: "normal", marginTop: 25 }}>Enter your stopwatch todo below</Text>
        <TextInput onSubmitEditing={onPress} style={{ backgroundColor: 'white', borderColor: 'red', borderRadius: 20, height: 40, margin: 12, borderWidth: 1, padding: 10 }} placeholder="hellooooo" keyboardType="default"></TextInput>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>Submit</Text></TouchableOpacity>
    </View>);
}



const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        width: '100%',

    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});