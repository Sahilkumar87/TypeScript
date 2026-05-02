"use strict";
// Functions
// Functions types
// Optional and default parameters
// Rest parameter
// Overloads
function add(a, b) {
    return a + b;
}
function greet(name, cb) {
    cb("hii kaise ho?");
}
greet("Sneha", (agrs) => {
    console.log(agrs);
});
// let naam = (name: string) => {
//     console.log(name);
// }
function naam(n) {
    console.log(n);
}
naam("sahil");
