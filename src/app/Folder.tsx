

import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { Alert, Button, TextInput, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View, StatusBar, FlatList, TextInputSubmitEditingEvent } from 'react-native';
import FolderLabel from './FolderLabel';


type FolderProps = {
  folderName: string,
  deleted: boolean,
}
export default function Folder(props: FolderProps) {
    const [isDeleted, setIsDeleted] = useState(false);



 





   if(!isDeleted) {
    return (<View style={{ justifyContent: 'center', padding: 20 , backgroundColor:"#b94b4bff", width: "100%"}}>
        <FolderLabel initialLabel={"📁" + props.folderName}  />
      </View>
      )


   } else {
     return (<View><Text>Deleted itemnidk</Text></View>);

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

