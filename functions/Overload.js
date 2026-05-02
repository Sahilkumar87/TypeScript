"use strict";
function add(a, b) {
    return a + b;
}
function add(a, b, c) {
    return a + b + c;
}
function sahil(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
sahil("hii");
sahil("hii", 11);
