//Basic types
// -> primitives type(number, string, boolean)
// -> arrays
// -> tuples
// -> enums
// -> any, unknown, void, null, undefined, never


// primitive and reference
// [] {} () -> reference

// var a = 69;
// var a1 = a;

// var b = {};
// // var b1 = 


// var c = [1, 2, 3, 4, 5];
// var c1 = c;



// 12 
// sahil
// prabhat
// chandan
// sneha
// true
// []
// {}
// ()
// "oppo"




// let a = 12;
// b = "sahil";


let sahil;

let sneha: unknown;
sneha = 12;
sneha = "goyal";


if(typeof sneha === "string"){
sneha.toUpperCase();

}


function main(): boolean{
    console.log("hey");
    return true;
}





let empty:  number | null;

empty = 69;

function never(): never{
    while(true){}
}


never();
console.log("hey");
