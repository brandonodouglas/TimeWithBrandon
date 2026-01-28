import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';
import uuid from 'react-native-uuid';
import { router } from 'expo-router';
import StopWatchFolder from './components/StopWatchFolder';


export default function FolderScreen() {

  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 40 }}>✨ Tutorial ✨</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />


      <Text style={{ textAlign: 'center', fontSize: 90 }}>🗂️</Text>
      
      <Text style={{ textAlign: 'center' }}>This brown folder is called the root folder. It represents a single day.</Text>


      <Text style={{ textAlign: 'center', fontSize: 90 }}>📁</Text>
     


      <Text style={{ textAlign: 'center' }}>This is called a header activity folder, for example cooking, gym workout, morning routine. They contain subfolders of stopwatches. </Text>
    

      <Text style={{ textAlign: 'center', fontSize: 90 }}>⏱️📁</Text>
  


      <Text style={{ textAlign: 'center' }}>This is called a stopwatch subfolder, denoted by the stopwatch and folder emojis.</Text>
      <Text></Text>
      <Text style={{ textAlign: 'center' }}>This is where all of your stopwatch timers live.</Text>
      <TextInput style={styles.input} placeholder='Enter folder name' onSubmitEditing={event => {
      }} />




      <Text style={{ textAlign: 'center' }}>Tap continue once finished.</Text>
      <TouchableOpacity style={styles.button} onPress={() => { router.push("/TimerScreen") }}>
        <Text style={{ color: 'white', fontSize: 40 }}>CONTINUE ⏰</Text>
      </TouchableOpacity>
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

