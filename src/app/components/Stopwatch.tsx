import { useEffect, useState, } from "react";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



// Props, activity of stopwatch e.g. studying
type StopWatchProps = {
    activity: string;
};

export default function StopWatch(props: StopWatchProps) {
    const [timerID, setTimerID] = useState(0)
    const [seconds, setSeconds] = useState(0);


    function start() {
        // start the timer and store the intervalID
        var intervalID = setInterval(function () {setSeconds(seconds => seconds + 1)}, 1000);
        setTimerID(intervalID);
    }

    function stop() {
        console.log('Attempting to stop timerID: ' + {timerID});
        clearInterval(timerID);
        setSeconds(0);
        console.log("Timer stopped");
    }

    function pause() {
        console.log("Paused pressed and seconds is currently: " + {seconds});
        clearInterval(timerID);
        setSeconds(seconds)
        console.log("timer paused");
        
        
    }

















    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity}  StopWatch</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} seconds</Text>
            <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={start}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 70 }}>▶︎</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'orange', width: 80, height: 80 }} onPress={stop}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 30 }}>STOP</Text>
            </TouchableOpacity>
             <TouchableOpacity style={{ backgroundColor: 'yellow', width: 80, height: 80 }} onPress={pause}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 30 }}>PAUSE</Text>
            </TouchableOpacity>
           


        </View>
    );
}