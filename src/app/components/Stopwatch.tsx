import { use, useEffect, useState, } from "react";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



// Props, activity of stopwatch e.g. studying
type StopWatchProps = {
    activity: string;
};

// The stopwatch itself which follows - https://www.online-stopwatch.com/
export default function StopWatch(props: StopWatchProps) {
    const [timerID, setTimerID] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    // State management for the stopwatch
    const [isPlaying, setIsPlaying] = useState(false);
    // STATES: INITIAL, RUNNING, CLEARED, PAUSED,
    const [buttonState, setButtonState] = useState('INITIAL');


// This function handles the majority of the hh:mm:ss processing
    function start() {
        let mySeconds;
        // start the timer and store the intervalID
        var intervalID = setInterval(function () {
            // Just a fancy arrow function
            setSeconds((seconds) => {
                if (seconds == 6) {
                    setMinutes((minutes => {
                         return minutes + 1 }))
                    return 0
                }
                else {
                    return seconds + 1
                }
            })
        }, 1000);
        setTimerID(intervalID);
        setButtonState('RUNNING');
    }
    function clear() {
        console.log('Attempting to stop timerID: ' + { timerID });
        clearInterval(timerID);
        setSeconds(0);
        setMinutes(0);
        setButtonState('CLEARED');
        console.log("Timer stopped");
    }

    function pause() {
        console.log("Paused pressed and seconds is currently: " + { seconds });
        clearInterval(timerID);
        setSeconds(seconds)
        setMinutes(minutes);
        setButtonState('PAUSED')
        console.log("timer paused");
    }

    // Here is the the return related code


    if (buttonState == "INITIAL") {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{minutes}:{seconds} (mm:ss)</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'limegreen', width: 80, height: 80 }} onPress={start}>
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (buttonState == 'RUNNING') {
        return (<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{minutes}:{seconds} (mm:ss)</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'lightgreen', width: 80, height: 80 }} onPress={pause}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Pause</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
                </TouchableOpacity>

            </View>
        </View>)
    }

    if (buttonState == 'PAUSED') {
        return (<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{minutes}:{seconds} (mm:ss)</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'lightblue', width: 80, height: 80 }} onPress={start}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Continue</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
                </TouchableOpacity>

            </View>
        </View>


        )
    }

    if (buttonState == "CLEARED") {
        return (<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{minutes}:{seconds} (mm:ss)</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'limegreen', width: 80, height: 80 }} onPress={start}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Start</Text>
                </TouchableOpacity>



                <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
                </TouchableOpacity>

            </View>
        </View>)

    }





}