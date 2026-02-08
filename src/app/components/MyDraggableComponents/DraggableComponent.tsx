

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, FlatList, GestureResponderEvent, SectionList, StatusBar, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

type Text = {
    myText: string,
}


export default function CustomTextInput(props: Text) {

    
    return(

        <View>
        <Text style={styles.title}>{props.myText}</Text>
        </View>
    )
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
      },
      item: {
        backgroundColor: '#b94b4bff',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        backgroundColor: '#b94b4bff',
        fontWeight: 'light',
        color: 'white',
        textAlign: 'left',
      },
      title: {
        fontSize: 24,
        backgroundColor: '#b94b4bff',
        color: 'white',
        padding: 10,
        margin: 10,
        

    }
});

