// Functions
// Functions types
// Optional and default parameters
// Rest parameter
// Overloads


function add(a: number, b: number): number{
    return a+b;
}


function greet(name: string, cb: (agrs: string) => void){
    cb("hii kaise ho?");
}

greet("Sneha",(agrs: string) => {
    console.log(agrs);

})




// let naam = (name: string) => {
//     console.log(name);
// }
function naam(n: string): void{
    console.log(n);
}
naam("sahil");


