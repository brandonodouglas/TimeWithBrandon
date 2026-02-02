import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';
import uuid from 'react-native-uuid';
import { router } from 'expo-router';
import StopWatchFolder from './components/StopWatchFolder';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Checkbox } from '@futurejj/react-native-checkbox';


export default function FolderScreen3() {
    

  return (
    <View><Text>Here are your folders.</Text></View>




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
  button: {
    alignItems: 'center',
    backgroundColor: '#b94b4bff',
    padding: 10,
    margin: 20,
    width: 300,
    borderCurve: 'circular',
    borderRadius: 40
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

