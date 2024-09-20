"use strict";

const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);

    if (currentState === 'red') {
        cycle++;
        trafficLight.stateIndex = 0;
    } else {
        trafficLight.stateIndex++;
    }
}