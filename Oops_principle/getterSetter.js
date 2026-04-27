"use strict";
class User12 {
    _name;
    surname;
    constructor(_name, surname) {
        this._name = _name;
        this.surname = surname;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u = new User12("sahil", "kumar");
u.name;
console.log(u);
