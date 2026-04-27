class User12{
    constructor(public _name: string, public surname: string){}
        get name(){
            return this._name;
        }

     
    set name(value: string){
        this._name = value;
    }
    }



let u = new User12("sahil", "kumar");
u.name;
console.log(u);