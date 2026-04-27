class BottleMaker{
    constructor(private name: string){
        this.name = name;
    }
    changer(){
        this.name = "sahil";
    }
}
let B1 = new BottleMaker("Milton");
B1.changer();



class BottleMake{
    constructor(public name: string){
        this.name = name;

    }
    change(){
        this.name = "sahil";
    }

}


class BottleMaking{
    constructor(protected name: string){
        this.name = name;

    }
    changing(){
        this.name = "sahil";
    }

}
