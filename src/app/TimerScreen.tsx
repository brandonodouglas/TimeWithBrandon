import { View, Text, TouchableOpacity, GestureResponderEvent, Alert, FlatList, StatusBar, StyleSheet, TextInput, TextInputSubmitEditingEvent } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';







  let nextId = 0;



// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  const result : string[] = [];

  const [stopWatchLabels, setStopWatchLabels] = useState(result); // The name/text of the stopwatches

  const [data, setData] = useState([]);
  const [mystopWatchName, setMyStopWatchName] = useState('');


  // For the activity timer on input
  const [text, onChangeText] = useState('useless text');
  const [number, onChangeNumber] = useState('');

 

  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>My Timers</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>You currently have {data.length} timers.</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Start one below!</Text>
      <TextInput style={styles.input} placeholder='Enter timer activity here'  onSubmitEditing={event => {
        setStopWatchLabels([...stopWatchLabels, event.nativeEvent.text]);
        console.log('The array looks like: ' + stopWatchLabels.toString() + ' and has length of: ' + stopWatchLabels.length);

       // setData([...data, { stopWatchName: mystopWatchName}]);


        // Add stopwatch label names to string list
        // For each component, put into array of objects
        // Call flatlist
       



      }} />

      {/* He we iterate through the string list and create a array of stopwatch timer objects */}

      <FlatList
        data={stopWatchLabels}
        renderItem={({ item, index }) => (<StopWatch stopWatchName={item} />)}
        keyExtractor={(item, index) => String(index)}


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

