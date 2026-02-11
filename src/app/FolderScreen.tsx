

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import { Alert, Button, TextInput, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, StatusBar, FlatList } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import BrandonAccordion from './components/MyCustomComponents/brandonAccordion';
import  FolderComponent  from './components/folder-feature-components-finished/FolderComponent'
import CustomTextInput from './components/MyCustomComponents/CustomTextInput';
import DraggableComponent from './components/MyDraggableComponents/DraggableComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function FolderScreen() {

  const [showInput, setShowInput] = useState(false)

  const myArray = useLocalSearchParams();
  const router = useRouter();
  const [idVal, setIdVal] = useState(0);
  const [selectedId, setSelectedId] = useState<string>();
  const [stopWatchLabels, setStopWatchLabels] = useState([{ id: uuid.v4(), label: 'example1' }]); // The name/text of the stopwatches
  const [data, setData] = useState([]);
  // Counter which is an interator for the stopwatches
  const [stopWatchDelete, setStopWatchDelete] = useState(false);






  function removeItem(idToDelete: string) {
    setStopWatchLabels(stopWatchLabels.filter((listValue) => listValue.id !== idToDelete));
  }

  return (
    <View style={{justifyContent: 'center', padding: 20}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold' }}>Capture your folders.</Text>
        <Text style={{ textAlign: 'center',}}>Here is your go-to spot for folder entry</Text>
        <TextInput style={styles.input} placeholder='Enter folder name here' onSubmitEditing={event => {
        setStopWatchLabels([...stopWatchLabels, { id: uuid.v4(), label: event.nativeEvent.text }]);
        setIdVal(idVal + 1);
      }} />

<FlatList
        data={stopWatchLabels}
        renderItem={({ item, index }) => (<View style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}><Text style={{fontSize: 40, textAlign: 'center', color: 'white', backgroundColor: '#b94b4bff', width: '100%'}}>📁 {item.label}</Text>
          
        </View>
        )}
        keyExtractor={(item) => item.id}
      />


        {/* <DraggableComponent /> */}
        {/* <FolderComponent list={['one', 'two', 'three', 'four', 'five', 'six','seven','eight']}  /> */}
       










    </View>

  );



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  input: {
    fontSize: 15,
    textAlign: 'center',
    borderColor: '#b94b4bff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 10,
    padding: 10,
  }
}); 

