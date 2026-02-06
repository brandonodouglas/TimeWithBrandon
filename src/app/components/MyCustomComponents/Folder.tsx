import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, GestureResponderEvent, TextInputSubmitEditingEvent } from "react-native";




type FolderProps = {
    folderName: string,
}
export default function Folder(props: FolderProps) {
    function onPress(event: GestureResponderEvent): void {
        Alert.alert("A folder has been clicked.")
    }

    function submitHandler(e: TextInputSubmitEditingEvent): void {
        console.log(e.nativeEvent.text)
    }

    return(<View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize: 60, textAlign: 'center'}}>📁</Text>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '800'}}>{props.folderName}</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={submitHandler}
         
          placeholder="Enter subfolder name"
        />
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
      alignItems: 'center',

      
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