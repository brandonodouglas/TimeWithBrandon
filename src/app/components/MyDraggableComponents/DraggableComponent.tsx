

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, FlatList, GestureResponderEvent, SectionList, StatusBar, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

type Text = {
    myText: string,
}

// The list of data that will be rendered and dragagbel
const DATA = [
    {
        id: 0,
        text: 'item 1'
    },
    {
        id: 1,
        text: 'item 2'
    },
    {
        id: 2,
        text: 'item 3'
    },
    {
        id: 3,
        text: 'item 4'
    },
    {
        id: 4,
        text: 'item 5'
    },
    {
        id: 5,
        text: 'item 6'
    },
    {
        id: 6,
        text: 'item 7'
    },
    {
        id: 7,
        text: 'item 8'
    },
    {
        id: 8,
        text: 'item 9'
    },
    {
        id: 9,
        text: 'item 10'
    },
    {
        id: 10,
        text: 'item 11'
    },
]

export default function CustomTextInput(props: Text) {

    
    return(

        <View>
        <ScrollView>
            
        </ScrollView>
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

