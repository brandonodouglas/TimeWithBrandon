import { View, Text, TouchableOpacity, GestureResponderEvent, Alert, FlatList, StatusBar, StyleSheet, TextInput, TextInputSubmitEditingEvent } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';







let nextId = 0;



// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  const result: string[] = [];
  const [stopWatchLabels, setStopWatchLabels] = useState(result); // The name/text of the stopwatches
  const [data, setData] = useState([]);
  // Counter which is an interator for the stopwatches
  const [counter, setCounter] = useState(0);


  //function to delete stopwatch by removing it from data lisst
  const deleteStopwatch = () => {
    Alert.alert('You want to delete a stopwatch.');
  };

  const editStopwatch = () => {
    Alert.alert("You want to edit a stopwatch")
      ;
  }


  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>My Timers</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>You currently have {stopWatchLabels.length} timers.</Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}>Tap on the timer name to edit the time name.</Text>


      <TextInput style={styles.input} placeholder='Enter timer name here' onSubmitEditing={event => {
        setStopWatchLabels([...stopWatchLabels, event.nativeEvent.text]);

        // setData([...data, { stopWatchName: mystopWatchName}]);


        // Add stopwatch label names to string list
        // For each component, put into array of objects
        // Call flatlist




      }} />

      {/* He we iterate through the string list and create a array of stopwatch timer objects */}

      <FlatList
        data={stopWatchLabels}
        renderItem={({ item, index }) => (<View><StopWatch stopWatchName={item} />
          <TouchableOpacity style={{ backgroundColor: 'grey', width: 80, height: 80 }} onPress={() => {


            setStopWatchLabels([...stopWatchLabels.slice(0, index), ...stopWatchLabels.slice(index + 1)]);


          }}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>delete stopwatch</Text>
          </TouchableOpacity>
          

        </View>
        )}
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

