

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, FlatList, GestureResponderEvent, SectionList, StatusBar, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

type CustomTextInputProps = {
    showCustomTextInput: boolean;
}


export default function CustomTextInput(props: CustomTextInputProps) {

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];
    
    let result: { id: string, title: string }[] = [];
    const [folderNameList, setFolderNameList] = useState(result)
    function addFolder(e: TextInputSubmitEditingEvent): void {
        console.log("Adding new folder")
        setFolderNameList([...folderNameList, { id: uuid.v4(), title: e.nativeEvent.text }])
        console.log({ folderNameList })
    }
    if (props.showCustomTextInput) {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item} ⏱️</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>📁 {title}</Text>
                    )}
                />
            </View>
        );
    } else {
        return (null)
    }
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
        color: 'white',
        textAlign: 'center',

    }
});

function folderHandler(event: GestureResponderEvent): void {
    Alert.alert("Folder has been clicked")
}
