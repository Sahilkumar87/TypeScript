// Generics
// Generics Function
// Generics interface
// Generics classes

function log<T>(val: T){
    console.log(val);
}
log(12);
log("sahil");


interface login<T> {
    name: string;
    age: number;
    key: T;
}

function kumar(obj: login<string>){
    
}