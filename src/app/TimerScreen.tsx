import {View, Text, TouchableOpacity, GestureResponderEvent, Alert } from 'react-native';
import StopWatch from './components/Stopwatch';
import Timer from './components/Timer';
import React from 'react';

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
      <TouchableOpacity style={{backgroundColor: "green"}} onPress={AddTimer}>
                <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>ADD TIMER</Text>
              </TouchableOpacity>

              <Timer />
    </View>
  );
}

  