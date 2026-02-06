import { View, Text, StyleSheet, TouchableOpacity, Alert, GestureResponderEvent } from "react-native";




type FolderProps = {
    folderName: string,
}
export default function Folder(props: FolderProps) {
    function onPress(event: GestureResponderEvent): void {
        Alert.alert("A folder has been clicked.")
    }

    return(<View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize: 60, textAlign: 'center'}}>📁</Text>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '800'}}>{props.folderName}</Text>
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
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  })