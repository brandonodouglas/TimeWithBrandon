import { View, Text, TouchableOpacity, GestureResponderEvent, Alert, FlatList, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import StopWatch from './components/Stopwatch';


const STOPWATCHES = [{ id: '0', activity: 'Enter your stopwatches below.' }];

type stopwatchesProps = { activity: string };


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  function AddTimer(event: GestureResponderEvent): void {
    Alert.alert("Timer started");
  }

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>⏰Timer Screen</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>You currently have 0 timers.</Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Start one below!</Text>
      <TouchableOpacity style={{ backgroundColor: "#b94b4bff", borderColor: 'red', margin: 20, padding: 10 }} onPress={AddTimer}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Add Timer</Text>
      </TouchableOpacity>
      <FlatList
        data={STOPWATCHES}
        renderItem={({ item }) => <StopWatch activity={item.activity} />}
        keyExtractor={item => item.id}
      />

      {/* />*/}
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
    fontSize: 32,
  },
});

