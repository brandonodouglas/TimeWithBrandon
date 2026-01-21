import { use, useEffect, useState, } from "react";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



// Props, activity of stopwatch e.g. studying
type StopWatchProps = {
    activity: string;
};

// The stopwatch itself which follows - https://www.online-stopwatch.com/
export default function StopWatch(props: StopWatchProps) {
    const [timerID, setTimerID] = useState(0)
    // These are for the stopwatch itself (unformatted so far)
    const [seconds, setSeconds] = useState(58);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(97);
    // State management for the stopwatch
    const [isPlaying, setIsPlaying] = useState(false);
    // STATES: INITIAL, RUNNING, CLEARED, PAUSED,
    const [buttonState, setButtonState] = useState('INITIAL');
    // For padding zeroes to go from (h:m:s) format to  (hh:ss:mm) format, starting with seconds
    const [secondsPadding, setSecondsPadding] = useState("0");
    const [minutesPadding, setMinutesPadding] = useState("0");
    const [hoursPadding, setHoursPadding] = useState("0");
    const [stop, setStop] = useState(false);

    // This function handles the majority of the hh:mm:ss processing
    function start() {
        const maxHours = 0;
        let timerStop = false;
        // start the timer and store the intervalID
        var intervalID = setInterval(function () {
            // clearInterval(intervalID)function runs and returns it stops
            if (timerStop) {
                clearInterval(intervalID);
                clear();
            } else {
                // Just a fancy arrow function
                setSeconds((seconds) => {
                    if (seconds > 8) {
                        setSecondsPadding('');
                    } else {
                        setSecondsPadding('0')
                    }
                    if (seconds == 59) {
                        setMinutes((minutes => {
                            if (minutes > 8) {
                                setMinutesPadding('');
                            } else {
                                setMinutesPadding('0')
                            }
                            if (minutes == 59) {
                                setHours((hours) => {
                                    if (hours > 8) {
                                        setHoursPadding('');
                                    } else {
                                        setHoursPadding('0')
                                    }
                                    if (hours == 97) {
                                        timerStop = true;
                                        return 0;
                                    }
                                    setMinutes(0);
                                    return hours + 1
                                });
                                return 0;
                            }
                            return minutes + 1
                        }))
                        return 0
                    }
                    else {
                        return seconds + 1
                    }
                })
            }
        }, 1000);
        if (!timerStop) {
            setTimerID(intervalID);
            setButtonState('RUNNING');
        } else {
            setButtonState('INITIAL');
        }
    }
    function clear() {
        clearInterval(timerID);
        setSeconds(0);
        setSecondsPadding("0");
        setMinutesPadding("0");
        setHoursPadding("0");
        setMinutes(0);
        setHours(0);
        setButtonState('CLEARED');
    }
    function pause() {
        clearInterval(timerID);
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setButtonState('PAUSED')
    }
    if (buttonState == "INITIAL") {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>{props.activity} stopwatch</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{hoursPadding}{hours}:{minutesPadding}{minutes}:{secondsPadding}{seconds} (hh:mm:ss)</Text>
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
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{hoursPadding}{hours}:{minutesPadding}{minutes}:{secondsPadding}{seconds} (hh:mm:ss)</Text>
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
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{hoursPadding}{hours}:{minutesPadding}{minutes}:{secondsPadding}{seconds} (hh:mm:ss)</Text>
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
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{hoursPadding}{hours}:{minutesPadding}{minutes}:{secondsPadding}{seconds} (hh:mm:ss)</Text>
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