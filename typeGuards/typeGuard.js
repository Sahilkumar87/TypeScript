"use strict";
// type guards and typeScript utility types
// using typeof and instanceof
// partial, requird, readonly
function a(agrs) {
    if (typeof agrs === "number") {
        return "number";
    }
    else if (typeof agrs === "string") {
        return "string";
    }
}
console.log(a(2));
console.log(a("sneha"));
class TvRemote {
    switchOff() {
        console.log("switching off tv");
    }
}
class CarRemote {
    switch() {
        console.log("switching off car");
    }
}
const tv = new TvRemote();
const car = new CarRemote();
function switchOfKro(device) {
    if (device instanceof TvRemote) {
        device.switchOff();
    }
    else if (device instanceof CarRemote) {
        device.switch();
    }
}
