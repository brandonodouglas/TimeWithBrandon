

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
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
      <TouchableOpacity
        key={item}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}>
        <Text>{item}</Text>
      </TouchableOpacity>
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
      <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
      />
  <Button title="Go to About" onPress={() => (setData([]), console.log(data), router.back())} />
    </View>
  );
}