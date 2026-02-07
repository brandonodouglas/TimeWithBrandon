

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, FlatList, GestureResponderEvent, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

type CustomTextInputProps = {
    showCustomTextInput: boolean;
}

export default function CustomTextInput(props: CustomTextInputProps) {
    type ItemProps = { id: string, title: string };
    const Item = ({ id, title }: ItemProps) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={folderHandler}>
                <Text style={{ fontSize: 60 }}>📁</Text>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
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
                <TextInput
                    style={styles.input}
                    onSubmitEditing={addFolder}
                    placeholder="Enter folder name"
                />
                <FlatList
                    data={folderNameList}
                    renderItem={({ item }) => <Item id={item.id} title={item.title} />}
                    keyExtractor={(item: {
                        title: string; id: string;
                    }) => item.id}
                />
            </View>
        );
    } else {
        return (null)
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
    button: {
        alignItems: 'center',
        padding: 10,
    },
});

function folderHandler(event: GestureResponderEvent): void {
    Alert.alert("Folder has been clicked")
}
