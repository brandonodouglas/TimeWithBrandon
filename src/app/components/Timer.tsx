import { useEffect, useState, } from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";



export default function Timer() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [second, setSeconds] = useState(0);



    const [timerIcon, setTimerIcon] = useState('▶︎');


    function onPress(event: GestureResponderEvent): void {
        // User has clicke the pause button by clicking said button twice
        setClickCount(clickCount => clickCount + 1);



        setTimerIcon('||')
        const myTimer = setInterval(() => { setSeconds((second) =>  second + 1) }, 1000);
        console.log(myTimer);








    }


    //e start button start the timer


    // If the user presses the pause button pause the timer by setting count to the current second


    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 50 }}>STOPWATCH</Text>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Seconds: {second}</Text>

            <TouchableOpacity style={{ backgroundColor: 'red, padding: 10' }} onPress={onPress}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 40 }}>{timerIcon}</Text>
            </TouchableOpacity>
        </View>
    );
}
