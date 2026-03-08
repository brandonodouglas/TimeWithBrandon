

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
  type FolderParamList = {
    id: undefined;
    label: undefined;
  }
  const [editing, setEditing] = useState(false);
  const [folderName, setFolderName] = useState('')
  const [globalStoredFolders, setGlobalStoredFolders] = useState<any[]>([])

  const [stopWatchLabels, setStopWatchLabels] = useState<any[]>([])
  // Store folder data within the database itself
  // If just landing
  const [isStart, setIsStart] = useState(true)
  



  // Get all folders inside of the database
  const getAllFolders = async () => {
    const folderKeys = await AsyncStorage.getAllKeys(); // returns a string
    for (const key of folderKeys) {
      let arrayKey = key // key
      let arrayValue = await AsyncStorage.getItem(arrayKey) // value
      setGlobalStoredFolders([...stopWatchLabels, { id: arrayKey, label: arrayValue}]);
    
    }

    return folderKeys;
  }
  // If the folder is an empty string array, the folders are empty
  const getFolderCount = async () => {
    const folderCount = await AsyncStorage.getAllKeys();
    return folderCount;
  }

  
  // Clear the folder database
  const clearFolderDatabase = async () => {
    await AsyncStorage.clear();
  }

  




  const fetchAllFolderData = async () => {
    try {
      const storedFolders = await AsyncStorage.getAllKeys();
      return storedFolders;

    } catch (error) {
      return null;

    }
  }

  const fetchFolderData = async () => {
    try {
      const storedFolders = await AsyncStorage.getItem('folders')
      if (storedFolders !== null) {
        return storedFolders;
      }

    } catch (error) {
      return null;

    }
  }



  async function clearAllFolders() {
    await AsyncStorage.clear()
    console.log("All folders have now been cleared.")
    const clearedFolderSet = await AsyncStorage.getAllKeys()
    // Clear the folders from the database
    setGlobalStoredFolders([])
    console.log(clearedFolderSet.length)
  }


  // Getsn the folders from the database and formats it for stopwatchlabels array
  async function formatDBFolders() {
    const formattedArray = await fetchAllFolderData()
    const finalObject = {}
    let folderArray = [] // This stores the formatted array

    if (formattedArray == null) {
      return null;
    } else {
      for (const values of formattedArray) {
        const key = await AsyncStorage.getItem(values)
        let folderObject = {id: values, label: key}
        folderArray.push(folderObject)
       


      }

    }
    return folderArray;
  
    

  }

  // Revised function to put folder into the database given its foldername as the value and id as the key
  async function addFolderData(foldername: string, id: string) {
    try {
      await AsyncStorage.setItem(id, foldername)
    } catch (error) {
      console.error('Error adding folder to database: ', error)
    }
  }








    // Deletes folder item from the database AND the stopwatch list given unique id string

  async function removeItem(idToDelete: string) {
    setStopWatchLabels(stopWatchLabels.filter((listValue) => listValue.id !== idToDelete))
    setGlobalStoredFolders(stopWatchLabels.filter((listValue) => listValue.id !== idToDelete))
    // Remove from local database
    await AsyncStorage.removeItem(idToDelete)
  




  }

  function newScreen(screenName: string, itemId: string) {
    router.push({ pathname: "/TimerScreen", params: { screenName } });



  }

  function editFolderName(screenName: string, itemId: string) {


  }
// there's folders found within the database, display them basically.



    console.log('[DATABASE]: Beginning storage.') // Used for the developer
    // get the folders from the database
    

    // if there's folders in the datbase
    if (globalStoredFolders.length != 0) {
      console.log(globalStoredFolders.length)
      // If the user hasn't clicked on a folder to change the folder name itself
    if (!editing) {
      return (<View style={{ justifyContent: 'center', padding: 20 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Capture your folders here.</Text>
        <TextInput style={styles.input} placeholder='Enter folder name here' onSubmitEditing={event => {
          let myID = uuid.v4()
          setStopWatchLabels([...stopWatchLabels, { id: myID, label: event.nativeEvent.text }]);
          setGlobalStoredFolders(stopWatchLabels)
          addFolderData(event.nativeEvent.text, myID) // this add data into the database
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
            <Button onPress={fetchFolderData} title="Database"></Button>










          </View>

          )}


          keyExtractor={(item) => item.id}

        />
        <Button onPress={() => clearAllFolders()} title="Delete and clear all folders"></Button>


      </View>


      )

    } else {
      // If the user has clicked a folder then a textbox appears to change the name
      return (<View style={{ justifyContent: 'center', padding: 20 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Capture your folders here.</Text>
        <TextInput style={styles.input} placeholder='Enter folder name here' onSubmitEditing={event => {
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


              }

              setStopWatchLabels(stopWatchLabels.map(element => ({ id: element.id, label: event.nativeEvent.text })))

              for (let i = 0; i < stopWatchLabels.length; i++) {


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
    // When there's folders in the database
    else {
      console.log("hello")
      return (<View><Text>You currently have no folers in the database! Enter some below now!</Text></View>)
      // Here we 
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

