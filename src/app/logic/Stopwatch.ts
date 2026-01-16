// Class that handles stopwatch functionality thats easily embeeddable with react native components
export class StopWatch {
    stopWatchName: string;
    // States of the stopwatch
    // id of stopwatch
    
    constructor(stopWatchName: string) {
        this.stopWatchName = stopWatchName;
    }
    // Get stopwatchname
    getStopWatchName() {
        return this.stopWatchName
    }

    // Set or reset the stopwatch name
    setStopWatchName(newStopWatchName: string) {
        this.stopWatchName = newStopWatchName;
    }

    // Start
    startStopWatch() {
        let seconds = 0;
        setInterval(() => {console.log(seconds+=1)}, 1000);
    }

    // Stop
   

    // Reset


}