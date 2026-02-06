import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, GestureResponderEvent, TextInputSubmitEditingEvent } from "react-native";




type FolderProps = {
    folderName: string,
}
export default function Folder(props: FolderProps) {



    const [folderNames, setFolderName] = useState([])
    function onPress(event: GestureResponderEvent): void {
        Alert.alert("A folder has been clicked.")
    }

    function submitHandler(e: TextInputSubmitEditingEvent): void {
        console.log(e.nativeEvent.text)
        
    }

    return(<View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize: 40}}>📁</Text>
        <Text style={{fontSize: 10, fontWeight: '800'}}>{props.folderName}</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={submitHandler}
         
          placeholder="Enter subfolder name"
        />
                <TouchableOpacity style={styles.button}>
                    <Text>Add Timer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Add subfolder</Text>
                </TouchableOpacity>
        </TouchableOpacity>
    
    </View>)




}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {

      
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  })