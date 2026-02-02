import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput, GestureResponderEvent} from 'react-native';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import StopWatch from './components/Stopwatch';
import uuid from 'react-native-uuid';
import { router } from 'expo-router';
import StopWatchFolder from './components/StopWatchFolder';
import TaskComponent from './components/TaskComponent';
import MyBottomSheet from './components/MyBottomSheet';
import StopWatchLabel from './components/StopwatchLabel';
import Stopwatch from './components/Stopwatch';
import Octicons from "@expo/vector-icons/Octicons";
import CustomBottomSheet from './components/CustomBottomSheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  type ItemProps = {title: string};
  
  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title} lol</Text>
      <TouchableOpacity style={styles.button} onPress={showBottomSheet}>
          <Text style={{color: 'white', fontSize: 10}}>Add Subtask</Text>
        </TouchableOpacity>
    </View>
  );
  

export default function SetupScreen() {

  function handlePress(event: GestureResponderEvent): void {
    Alert.alert("Addsing task")
  }

  return (

<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ textAlign: 'center', fontSize: 40 }}>✨ Setup ✨</Text>
      <Text>What are some daily activities that you would like to time?</Text>
      <Text> e.g. cooking, workout, morning routine, topic or concept to study</Text>
      <Text>Press the add button to add task activities.</Text>
      <Text>Currently, you have zero activities, when you add activities they will be shown in a list below</Text>
      {/* <MyBottomSheet /> */}
      {/* <Stopwatch stopWatchName={'lol'} deleted={false} /> */}
      <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
        <Octicons name="clock" size={30} color="white" />
      </TouchableOpacity>
      <CustomBottomSheet />
    


      </SafeAreaView>    




  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center'
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
    width: 60,
    borderCurve: 'circular',
    borderRadius: 40
  },
  floatingButton: {
    backgroundColor: 'red', // Replace with your primary color
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 30,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
    textAlign: 'center',
},
  input: {
    fontSize: 15,
    textAlign: 'center',
    borderColor: '#b94b4bff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,


  }
});

function showBottomSheet(event: GestureResponderEvent): void {
  Alert.alert("Showing bottom sheet");
}

