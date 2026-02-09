

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import BrandonAccordion from './components/MyCustomComponents/brandonAccordion';
import Folder from './components/MyCustomComponents/Folder';
import CustomTextInput from './components/MyCustomComponents/CustomTextInput';
import DraggableComponent from './components/MyDraggableComponents/DraggableComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FolderScreen3TextInput from './components/FolderScreen3Components/FolderScreen3TextInput';
export default function FolderScreen3() {

  const [showInput, setShowInput] = useState(false)

  const myArray = useLocalSearchParams();
  const router = useRouter();





  function handleFolderAddButton(event: GestureResponderEvent): void {
    Alert.alert("Add a folder thing")
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold' }}>Capture your acitivies.</Text>
        <Text style={{ textAlign: 'center',}}>Here is your go-to spot for folder and timer entry.</Text>
        <Text style={{ textAlign: 'center',}}>Some folders have been set up for you, add more below!</Text>

        <DraggableComponent />
        <FolderScreen3TextInput />
        <TouchableOpacity onPress={handleFolderAddButton}><Text style={{backgroundColor: '#b94b4bff', textAlign: 'center',color: 'white',  borderStyle: 'solid', borderRadius: 100, fontSize: 40, marginLeft: 170, marginRight: 170, marginTop: 20 }}>+</Text></TouchableOpacity>












    </GestureHandlerRootView>

  );



}


