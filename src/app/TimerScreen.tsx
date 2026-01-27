import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';
import StopWatchLabel from './components/StopwatchLabel';
import uuid from 'react-native-uuid';

import DragList, {DragListRenderItemInfo} from 'react-native-draglist';
import DraggableStopwatches from './components/DraggableStopwatches';

type StopWatchData = {
  id: string;
  label: string;
}
const DATA: StopWatchData[] = [];
// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  const [idVal, setIdVal] = useState(0);
  const [selectedId, setSelectedId] = useState<string>();
  const [stopWatchLabels, setStopWatchLabels] = useState([{ id: uuid.v4(), label: 'example1' }]); // The name/text of the stopwatches
  const [data, setData] = useState([]);
  // Counter which is an interator for the stopwatches
  const [stopWatchDelete, setStopWatchDelete] = useState(false);
  const editStopwatch = () => {
    Alert.alert("You want to edit a stopwatch");
  }
  function removeItem(idToDelete: string) {
    setStopWatchLabels(stopWatchLabels.filter((listValue) => listValue.id !== idToDelete));
  }
  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>My Timers</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>You currently have {stopWatchLabels.length} timers.</Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}>Tap on the timer name to edit the time name.</Text>
      <TextInput style={styles.input} placeholder='Enter timer name here' onSubmitEditing={event => {
        setStopWatchLabels([...stopWatchLabels, { id: uuid.v4(), label: event.nativeEvent.text }]);
        setIdVal(idVal + 1);
      }} />
      {/* He we iterate through the string list and create a array of stopwatch timer objects */}
      <FlatList
        data={stopWatchLabels}
        renderItem={({ item, index }) => (<View style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}><StopWatch stopWatchName={item.label} deleted={stopWatchDelete} />
          <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 30 }} onPress={() => {
            removeItem(item.id);
          }}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, width: 80, height: 30 }}>Delete</Text>
          </TouchableOpacity>
        </View>
        )}
        keyExtractor={(item) => item.id}
      />


      {/* https://github.com/fivecar/react-native-draglist */}
      <DraggableStopwatches />
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

