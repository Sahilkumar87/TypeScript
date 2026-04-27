class Bottle{
    constructor( public name: string){

    }
    changing(){
        this.name = "sahil";
    }

}

class MetalBottleMaker extends Bottle{
    constructor( name: string){
        super(name);

    }
    getValue(){
        console.log(this.name);

    }
}

let bottle = new MetalBottleMaker("Milton");