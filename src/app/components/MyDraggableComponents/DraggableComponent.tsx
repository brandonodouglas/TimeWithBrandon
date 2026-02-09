import React, { useState } from 'react';
import { Alert, GestureResponderEvent, StyleSheet, Text, TextInput, TextInputSubmitEditingEvent, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

const SOUND_OF_SILENCE = ['Cooking', 'Reading', 'Gym Workout', 'Coding', 'Grocery Shopping'];

export default function DraggableLyrics() {
  const [data, setData] = useState(SOUND_OF_SILENCE);
  const [showInput, setShowInput] = useState(false)


  function handleFolderAddButton(event: GestureResponderEvent): void {
    setShowInput(true)
  }


  function keyExtractor(str: string, _index: number) {
    return str;
  }

  function clearArray () {
    setData([])
  }

  function renderItem(info: DragListRenderItemInfo<string>) {
    const { item, onDragStart, onDragEnd, isActive } = info;

    function handleFolderPress(event: GestureResponderEvent): void {
      Alert.alert("Hello")
    }

    return (
      <TouchableOpacity
        key={item}
        onPress={handleFolderPress}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}>
        <Text style={{ fontSize: 40, backgroundColor: '#b94b4bff' }}>📁 {item}</Text>
      </TouchableOpacity>
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
    setData(copy);
  }

  function folderSubmitHandler(e: TextInputSubmitEditingEvent): void {
    setData([...data, e.nativeEvent.text])
    console.log(data)

  }

  return (
    <View>
<DragList
      data={data}
      keyExtractor={keyExtractor}
      onReordered={onReordered}
      renderItem={renderItem}
    />
     <TextInput
            style={styles.input}
            onSubmitEditing={folderSubmitHandler}
            placeholder='Enter foldername'
        
          />


    </View>
    

  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
