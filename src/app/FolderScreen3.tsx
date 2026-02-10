

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import BrandonAccordion from './components/MyCustomComponents/brandonAccordion';
import  FolderComponent  from './components/folder-feature-components-finished/FolderComponent'
import CustomTextInput from './components/MyCustomComponents/CustomTextInput';
import DraggableComponent from './components/MyDraggableComponents/DraggableComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function FolderScreen3() {

  const [showInput, setShowInput] = useState(false)

  const myArray = useLocalSearchParams();
  const router = useRouter();






 

  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold' }}>Capture your acitivies.</Text>
        <Text style={{ textAlign: 'center',}}>Here is your go-to spot for folder and timer entry.</Text>
        <Text style={{ textAlign: 'center',}}>Some folders have been set up for you, add more below!</Text>

        {/* <DraggableComponent /> */}
        <FolderComponent list={['one', 'two', 'three', 'four']}  />
       










    </GestureHandlerRootView>

  );



}


