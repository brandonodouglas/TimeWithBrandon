import {View, Text, TouchableOpacity, GestureResponderEvent, Alert } from 'react-native';
import React from 'react';
import StopWatch  from './components/StopWatch';
// Screen that opens when the user wants to start a timer
export default function TimerScreen() {
  function AddTimer(event: GestureResponderEvent): void {
    Alert.alert("Timer started");
  }

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center'}}>⏰Timer Screen</Text>
      <Text style={{ fontSize: 25, textAlign: 'center'}}>You currently have 0 timers.</Text>
      <Text style={{ fontSize: 25, textAlign: 'center'}}>Start one below!</Text>
      <TouchableOpacity style={{backgroundColor: "#b94b4bff", borderColor: 'red', margin: 20, padding: 10}} onPress={AddTimer}>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Add Timer</Text>
              </TouchableOpacity>

              {/* <StopWatch activity={'Studying'} />*/}
    </View>
  );
}

  