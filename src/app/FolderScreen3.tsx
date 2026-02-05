

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import StopWatchFolderV2 from './components/FolderFeatureComponents/StopWatchFolderV2';
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
  return (
    <View>
      <Text>Click and drag the stopwatch to change its position</Text>

      <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
      />
      
      <StopWatchFolderV2 />
    </View>
  );
}