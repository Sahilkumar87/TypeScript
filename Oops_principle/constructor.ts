class bottleMaker{
    constructor(public name: string, public price: number){

    }

}

class Music{
    constructor(public name: string, public artist: string){
        if(!name){
            this.name = "null";
        }

    }
}


let b1 = new bottleMaker("Milton", 1200);                       
let b2 = new bottleMaker("Cello", 120);
console.log(b1);
console.log(b2);


let m1 = new Music("hamdard", "arjit singh");
console.log(m1);