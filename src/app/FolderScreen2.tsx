import { View, Text, TouchableOpacity, Alert, FlatList, StatusBar, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import StopWatch from './components/StopwatchRelatedComponents/Stopwatch';
import uuid from 'react-native-uuid';
import { router } from 'expo-router';
import StopWatchFolder from './components/StopwatchRelatedComponents/StopWatchFolder';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Checkbox } from '@futurejj/react-native-checkbox';


let userChoiceId = 0;
export default function FolderScreen2() {

  const initArr: string[] = [];
  const [userFolderChoices, setUserFolderChoices] = useState([''])
  const [choice, setChoice] = useState('');
  const [checkedCardio, setCheckedCardio] = useState(false);

  const toggleCheckboxCardio = () => {
    setCheckedCardio(!checkedCardio);
    setUserFolderChoices([...userFolderChoices, 'cardio']);
  };

  const [checkedGym, setCheckedGym] = useState(false);
  const toggleCheckboxGym = () => {
    setCheckedGym(!checkedGym);
    setUserFolderChoices([...userFolderChoices, 'gym']);
  };

  const [checkedCooking, setCheckedCooking] = useState(false);
  const toggleCheckboxCooking = () => {
    setCheckedCooking(!checkedCooking);
    setUserFolderChoices([...userFolderChoices, 'cooking']);

  };

  const [checkedStudying, setCheckedStudying] = useState(false);
  const toggleCheckboxStudying = () => {
    setCheckedStudying(!checkedStudying);
    setUserFolderChoices([...userFolderChoices, 'studying']);

  };

  return (
    <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems:'center'}}>
      <Text style={{ textAlign: 'center', fontSize: 40 }}>📁 Folder Setup</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <Text style={{ textAlign: 'center', fontSize: 90 }}>🤔</Text>
      <Text style={{ textAlign: 'center' }}>What are some types of activities you want to time manage and be more productive in?</Text>
      <Text style={{ textAlign: 'center' }}>(Don't worry, you can change these options later.)</Text>

      <ScrollView style={{backgroundColor: 'lightgrey'}}>
     

      
      <View style={{flexDirection: 'row', flex: 0,  justifyContent: 'center', alignItems:'center'}}>
      <Text style={{flex:0, fontSize: 32  }}>💪 Gym</Text>
       <Checkbox
         status={checkedGym ? 'checked' : 'unchecked'}
         onPress={toggleCheckboxGym}
         size={32}
       />
       
     </View>
     <View style={{flexDirection: 'row', flex: 0,  justifyContent: 'center', alignItems:'center'}}>
      <Text style={{flex:0, fontSize: 32  }}>🏃 Cardio</Text>
       <Checkbox
         status={checkedCardio ? 'checked' : 'unchecked'}
         onPress={toggleCheckboxCardio}
         size={32}
       />
       
     </View>
     <View style={{flexDirection: 'row', flex: 0,  justifyContent: 'center', alignItems:'center'}}>
      <Text style={{flex:0, fontSize: 32  }}>🍳 Cooking</Text>
       <Checkbox
         status={checkedCooking ? 'checked' : 'unchecked'}
         onPress={toggleCheckboxCooking}
         size={32}
       />
       
     </View>
     <View style={{flexDirection: 'row', flex: 0,  justifyContent: 'center', alignItems:'center'}}>
      <Text style={{flex:0, fontSize: 32  }}>📚 Studying</Text>
       <Checkbox
         status={checkedStudying ? 'checked' : 'unchecked'}
         onPress={toggleCheckboxStudying}
         size={32}
       />
       
     </View>
 
    
     
     
     
     </ScrollView>
     

     

 
     



      <Text style={{ textAlign: 'center' }}>Tap finish to go to the folder screen!</Text>
      <TouchableOpacity style={styles.button} onPress={() => { router.push({pathname: "/FolderScreen3", params: {userFolderChoices}})}}>
        <Text style={{ color: 'white', fontSize: 40 }}>Finish.</Text>
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

