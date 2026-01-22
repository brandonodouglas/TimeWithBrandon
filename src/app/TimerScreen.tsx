import { View, Text, TouchableOpacity, GestureResponderEvent, Alert, FlatList, StatusBar, StyleSheet, TextInput, TextInputSubmitEditingEvent } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';





type stopwatchesProps = { activity: string };
let nextId = 0;



// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  const myArray : { activity: string; }[] = [];
  const [data, setData] = useState(myArray);
  const [stopWatchName, setStopWatchName] = useState('');


  // For the activity timer on input
  const [text, onChangeText] = useState('useless text');
  const [number, onChangeNumber] = useState('');

  function AddTimer(e: TextInputSubmitEditingEvent): void {
    setStopWatchName(e.nativeEvent.text);
    console.log(stopWatchName)
    setData([...data, {activity: stopWatchName}]);
    return (Alert.alert(data.length.toString()));

  }


  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>My Timers</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>You currently have {data.length - 1} timers.</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Start one below!</Text>
      <TextInput style={styles.input} placeholder='Enter timer activity here' onSubmitEditing={AddTimer} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (<StopWatch activity={stopWatchName} />)}
        keyExtractor={(contact, index) => String(index)}


      />
      {/* Timer component would go here>*/}
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

