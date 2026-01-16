import { useEffect, useState, } from "react";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



// Props, activity of stopwatch e.g. studying
type StopWatchProps = {
    activity: string;
};

export default function StopWatch(props: StopWatchProps) {
    function onPress(event: GestureResponderEvent): void {
        Alert.alert('Stopwatch ' + {props}.props.activity + ' started.');
    }





    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity}  StopWatch</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>0 seconds</Text>
            <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80}} onPress={onPress}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 70 }}>▶︎</Text>
            </TouchableOpacity>




        </View>
    );
}