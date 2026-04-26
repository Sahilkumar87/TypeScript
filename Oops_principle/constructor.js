"use strict";
class bottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Music {
    name;
    artist;
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
        if (!name) {
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
