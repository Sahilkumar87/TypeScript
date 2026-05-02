"use strict";
// ... rest/spread
function Rest1(...agrs) {
    console.log(agrs);
}
Rest1(1, 2, 3, 4, 5, 6, 7);
const arr = [1, 2, 3, 3, 4, 4, 4,];
const arr1 = [...arr];
console.log(arr);
console.log(arr1);
