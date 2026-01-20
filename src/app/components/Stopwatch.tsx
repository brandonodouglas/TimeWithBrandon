import { useEffect, useState, } from "react";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



// Props, activity of stopwatch e.g. studying
type StopWatchProps = {
    activity: string;
};

// The stopwatch itself which follows - https://www.online-stopwatch.com/
export default function StopWatch(props: StopWatchProps) {
    const [timerID, setTimerID] = useState(0)
    const [seconds, setSeconds] = useState(0);
    // State management for the stopwatch
    const [isPlaying, setIsPlaying] = useState(false);
    // STATES: INITIAL, RUNNING, CLEARED, PAUSED,
    const [buttonState, setButtonState] = useState('INITIAL');



    function start() {
        // start the timer and store the intervalID
        var intervalID = setInterval(function () { setSeconds(seconds => seconds + 1) }, 1000);
        setTimerID(intervalID);
        setButtonState('RUNNING');

    }

    function clear() {
        console.log('Attempting to stop timerID: ' + { timerID });
        clearInterval(timerID);
        setSeconds(0);
        setButtonState('CLEARED');

        console.log("Timer stopped");
    }




    function pause() {
        console.log("Paused pressed and seconds is currently: " + { seconds });
        clearInterval(timerID);
        setSeconds(seconds)
        setButtonState('PAUSED')
        console.log("timer paused");
    }
    if (buttonState == "INITIAL") {
        return (
            <View style={{flexDirection:'column', justifyContent: 'center'}}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} seconds</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'lightgreen', width: 80, height: 80 }} onPress={start}>
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
        return (<View style={{flexDirection:'column', justifyContent: 'center'}}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} seconds</Text>
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
        return (<View style={{flexDirection:'column', justifyContent: 'center'}}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} seconds</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'lightgreen', width: 80, height: 80 }} onPress={start}>
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
        return (<View style={{flexDirection:'column', justifyContent: 'center'}}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} seconds</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

            <TouchableOpacity style={{ backgroundColor: 'lightgreen', width: 80, height: 80 }} onPress={start}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Start</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
            </TouchableOpacity>

        </View>
        </View>)

    }
      return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity}</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{seconds} </Text>
                <TouchableOpacity style={{ backgroundColor: 'lightgreen', width: 80, height: 80 }} onPress={start}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', width: 80, height: 80 }} onPress={clear}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Clear</Text>
                </TouchableOpacity>
            </View>
        )




}