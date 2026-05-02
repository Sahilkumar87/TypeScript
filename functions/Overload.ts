function add(a: number, b: number): number{
    return a+b;
}

function add(a: number, b: number, c: number): number{
    return a+b+c;
}



// ts fnc singnature
function sahil(a: string): void;
function sahil(a: string, b: number): number;



function sahil(a: any, b?: any){
    if(typeof a === "string" && b === undefined){
        console.log("hey");
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else throw new Error("something is wrong");
}

sahil("hii");
sahil("hii", 11);

