let any;
any = 12;
any = false;
any = "sahil";
any.toUpperCase();




let un: unknown;
un = 673;
un = "Kumar";

if(typeof un === "string"){
    console.log(un.toUpperCase());
}



let a: number;
a = 12;

let b: string;
b = "sneha goyal";

let c: boolean;
c = true;

let d: null ;
//d = 12;



let e: number | string | boolean | null | never;
e = 12;
e = "sahil";
e = false;



function main1(): void {
    console.log("kaise ho?");
}


function main2(): number{
    console.log("midterm me kya score hai?");
    return 0;
}

function main3(): string{
    console.log("kaise ho?");
    return "thik hu";
}

function main4(): boolean{
    console.log("acha developer banunga?");
    return true;
}

function main5(): never{
    while(true){}
    console.log("kaise ho?");
}







