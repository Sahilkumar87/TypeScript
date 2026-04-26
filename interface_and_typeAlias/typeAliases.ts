let a: number;

type value = number | string | null;

let b: value;


function abcd(obj: value): void {

}


// union
type user = {
    name: string;
    email: string;
    mobil: number;
}
type Admin = user & {
    getDetails(user: string): void
}

function abcd1(a: Admin){
    a.email;
}

