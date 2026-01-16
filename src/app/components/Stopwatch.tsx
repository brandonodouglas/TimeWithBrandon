import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent, Alert } from 'react-native';


// Has start, pause, resume and reset functionality
export default function StopWatch() {

    const [seconds, setSeconds] = useState(0);
    // For pausing
    const [pause, setPause] = useState(false);
    let i = 0;
    // Play and pause button stuff, imitially a play button
    const [playButton, setPlayButton] = useState('▶︎');
    // Keeps track of the amount of time that the play button has been clicked
    const [clickCount, setClickCount]= useState(1)
    let x = 0;

    // Function to stop the timer if the user requests it



    function onPress(event: GestureResponderEvent): void {
        setClickCount(clickCount => clickCount + 1)
        console.log(clickCount);
        // If we've clicke dthe button an even amount of times then this indicates a pause
        if(clickCount % 2 == 0) {
            console.log("Time to pause! at time: " + seconds)
            setPause(true)
            
            // Set the seconds to the current second
            setSeconds(i);
            setPlayButton('▶︎');

        }
        setPlayButton('||')
        var myTimer = setInterval(function () {
            if (pause == true) {
                
            }
            // If the timer has reached one minute
            if (i == 60) {
                Alert.alert('Timer finished')
                clearInterval(myTimer)
                setSeconds(0)
                i = 0;

            } else {

                setSeconds(
                    i += 1)
            }
        }, 1000)

    }

    return (
        <View style={{ backgroundColor: 'red' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>Stopwatch Component</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Counts up to 60 seconds.</Text>

            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>{seconds} seconds.</Text>

            <TouchableOpacity style={{ backgroundColor: 'red, padding: 10' }} onPress={onPress}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 40 }}>{playButton}</Text>
            </TouchableOpacity>
            <Text>{clickCount}</Text>
        </View>

    );
}



function myGreeting(): void {
    Alert.alert("5 seconds have passed")
}

