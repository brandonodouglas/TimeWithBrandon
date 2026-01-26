import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, use, useEffect, useState, } from "react";
import { Alert, StyleSheet, Button, GestureResponderEvent, Text, TextInput, TouchableOpacity, View, TextInputSubmitEditingEvent } from "react-native";



// Initial label
type StopWatchLabelProps = {
    initialLabel: string;
}

export default function StopWatchLabel(props: StopWatchLabelProps) {
    const [editing, setEditing] = useState(false);
    const [myLabel, setMyLabel] = useState(props.initialLabel);



    // Edit stopwatch label
    function startEdit(event: GestureResponderEvent): void {
        setEditing(true);
    }
    function submitHandler(e: TextInputSubmitEditingEvent): void {
        setMyLabel(e.nativeEvent.text);
        setEditing(false);
    }
    if (!editing) {
        return (
            <View>
                <TouchableOpacity style={{}} onPress={startEdit}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 , fontWeight: "800"}}>{myLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
       

        return(<TextInput style={styles.input} onSubmitEditing={submitHandler}></TextInput>);

    }



}
 const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  