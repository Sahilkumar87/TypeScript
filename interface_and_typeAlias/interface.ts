// interface and type aliases
// define interfaces
// -> using interface to define object shapes
// -> extending interface
// -> type aliases
// -> intersection types

interface User{
    name: string,
    email: string,
    password: string,
    age: number,
    gender?: string
}

interface Admin extends User{
    admin: boolean,
}


// const user = {
//     name: "sahil",
//     email: "sahil@gmail.com",
//     password: "sahil123"
// }


function getDataUser(obj: User){

}
getDataUser({name: "sahil", email: "sahil@gmail.com", password: "sahil123", age: 21});


function Admin(obj: Admin){
    obj.age

}