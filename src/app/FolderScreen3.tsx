

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import BrandonAccordion from './components/MyCustomComponents/brandonAccordion';
import Folder from './components/MyCustomComponents/Folder';
export default function FolderScreen3() {
  const myArray = useLocalSearchParams();
  const router = useRouter();
  // Seperate the below, split by commas
  var str_array = (myArray.userFolderChoices.toString()).split(',')
  const [data, setData] = useState(str_array);
  function keyExtractor(str: string, _index: number) {
    return str;
  }
  function renderItem(info: DragListRenderItemInfo<string>) {
    const { item, onDragStart, onDragEnd, isActive } = info;
    return (
      <View>
        <TouchableOpacity
        key={item}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}
        style={{backgroundColor: 'grey', borderColor: 'black', borderRadius: 10, borderWidth: 2}}
        
        >
        <StopWatch stopWatchName={item} deleted={false} />
      </TouchableOpacity>
      </View>
      
    )
  }
  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
    setData(copy);
  }
  function handleAddTimer(event: GestureResponderEvent): void {
    console.log("Adding folder")
  }

  return (
    <View style={{justifyContent: 'center',
      alignItems: 'center'}}>
      <Text style={{textAlign:"center", fontWeight: 'bold'}}>Capture your acitivies.</Text>
      <Text style={{textAlign:"center"}}>Here is your go-to spot for folder and timer entry.</Text>
      <TouchableOpacity style={{borderRadius: 20, backgroundColor: '#b94b4bff', width: 100, height:20}} onPress={handleAddTimer}><Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>+  Add folder</Text></TouchableOpacity>


      {/* 
           <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
      />

      
      
      */}
 




</View>
  );
}