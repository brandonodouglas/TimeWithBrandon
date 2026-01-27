import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/Stopwatch';
import uuid from 'react-native-uuid';
import { router } from 'expo-router';


export default function FolderScreen() {
  
  return (
    <View style={{ justifyContent: 'center', padding: 20 }}>
        <Text style={{textAlign: 'center', fontSize: 90}}>📁</Text>        
        <Text style={{textAlign: 'center'}}>Welcome to the folder screen.</Text>
            <Text style={{textAlign: 'center'}}>This is where you create the folders your timers will live in. </Text>
            <Text style={{textAlign: 'center'}}>Below is some folders set up for you to get you started.</Text>
            
            <TextInput style={styles.input} placeholder='Enter folder name' onSubmitEditing={event => {
      
        
      }} />

       
<Text style={{textAlign: 'center'}}>Tap continue once finished.</Text>
        <TouchableOpacity style={styles.button} onPress={() => {router.push("/TimerScreen")}}>
          <Text style={{color: 'white', fontSize: 40}}>CONTINUE ⏰</Text>
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

