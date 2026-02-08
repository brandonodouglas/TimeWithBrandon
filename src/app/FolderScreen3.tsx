

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import BrandonAccordion from './components/MyCustomComponents/brandonAccordion';
import Folder from './components/MyCustomComponents/Folder';
import CustomTextInput from './components/MyCustomComponents/CustomTextInput';
import DraggableComponent from './components/MyDraggableComponents/DraggableComponent';
export default function FolderScreen3() {

  const [showInput, setShowInput] = useState(false)

  const myArray = useLocalSearchParams();
  const router = useRouter();
 
 
 
 
  
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: "center", fontWeight: 'bold' }}>Capture your acitivies.</Text>
        <Text style={{ textAlign: "center" }}>Here is your go-to spot for folder and timer entry.</Text>
        <DraggableComponent />
        








      </View>
    );

  

  }


