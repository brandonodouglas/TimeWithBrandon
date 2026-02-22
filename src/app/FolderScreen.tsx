

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';
import { router } from "expo-router";


import { Alert, Button, TextInput, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, StatusBar, FlatList, TextInputSubmitEditingEvent } from 'react-native';
import Folder from './Folder';
import FolderLabel from './FolderLabel';
import StopWatchLabel from './components/StopwatchRelatedComponents/StopwatchLabel';
import AsyncStorage from "@react-native-async-storage/async-storage";


// create a storage instance for the folders

export default function FolderScreen() {
  const [editing, setEditing] = useState(false);
  const [folderName, setFolderName] = useState('example1')
  const [stopWatchLabels, setStopWatchLabels] = useState([{ id: uuid.v4(), label: folderName }]) // The name/text of the stopwatches



  const fetchFolderData = async () => {
    try {
      const storedFolders = await AsyncStorage.getItem('folders')
      if (storedFolders !== null) {
        console.log(storedFolders)
      }

    } catch (error) {
      console.error('Error fetching folders: ', error)

    }
  }

  const addFolderData = async () => {
    try {
      await AsyncStorage.setItem('folders', 'foldervalue')

    } catch (error) {
      console.error('Error fetching folders: ', error)


    }
  }







  function removeItem(idToDelete: string) {
    setStopWatchLabels(stopWatchLabels.filter((listValue) => listValue.id !== idToDelete))
  }

  function newScreen(screenName: string, itemId: string) {
    console.log("Folder with name: " + screenName + " has been clicked on. " + "with id: " + itemId)
    router.push({ pathname: "/TimerScreen", params: { screenName } });



  }

  function editFolderName(screenName: string, itemId: string) {
    console.log("User wishes to edit Folder with name: " + screenName + " has been clicked on. " + "with id: " + itemId)


  }

  if (!editing) {
    return (<View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Capture your folders here.</Text>
      <TextInput style={styles.input} placeholder='Enter folder name here' onSubmitEditing={event => {
        console.log(event.nativeEvent.text)
        setStopWatchLabels([...stopWatchLabels, { id: uuid.v4(), label: event.nativeEvent.text }]);
      }} />


      <FlatList
        data={stopWatchLabels}

        renderItem={({ item }) => (<View style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>

          <Text style={{ color: 'black', textAlign: 'center', fontSize: 0, fontWeight: "800" }}>{"📁" + item.label}</Text>
          <Button onPress={() => { setEditing(true) }} title="Edit folder name"></Button>
          <Button onPress={() => newScreen(item.label, item.id)} title="new screen"></Button>
          <Button onPress={() => removeItem(item.id)} title="Delete"></Button>
          <Button onPress={addFolderData} title="Database"></Button>
          <Button onPress={fetchFolderData} title="Database"></Button>










        </View>

        )}


        keyExtractor={(item) => item.id}

      />

    </View>


    )

  } else {
    return (<View style={{ justifyContent: 'center', padding: 20 }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Capture your folders here.</Text>
      <TextInput style={styles.input} placeholder='Enter folder name here' onSubmitEditing={event => {
        console.log(event.nativeEvent.text)
        setStopWatchLabels([...stopWatchLabels, { id: uuid.v4(), label: event.nativeEvent.text }]);
      }} />
      <FlatList
        data={stopWatchLabels}
        renderItem={({ item }) => (<View style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>

          <TextInput style={styles.input} placeholder='Enter new folder name' onSubmitEditing={event => {
            setEditing(false)
            for (let i = 0; i < stopWatchLabels.length; i++) {
              console.log('BEFORE: Label: ' + stopWatchLabels[i].label + " and id: " + stopWatchLabels[i].id)


            }

            setStopWatchLabels(stopWatchLabels.map(element => ({ id: element.id, label: event.nativeEvent.text })))

            for (let i = 0; i < stopWatchLabels.length; i++) {
              console.log('AFTER: Label: ' + stopWatchLabels[i].label + " and id: " + stopWatchLabels[i].id)


            }
          }} />
          <Button onPress={() => editFolderName(item.label, item.id)} title="Edit folder name"></Button>
          <Button onPress={() => newScreen(item.label, item.id)} title="new screen"></Button>
          <Button onPress={() => removeItem(item.id)} title="Delete"></Button>




        </View>

        )}


        keyExtractor={(item) => item.id}

      />

    </View>


    )
  }











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

