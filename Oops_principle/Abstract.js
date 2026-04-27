"use strict";
class payment {
    amount;
    account;
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymnetValid(amount) {
        return this.amount > 0;
    }
}
class Paytm extends payment {
    account = 1243434343;
    amount = 1;
}
console.log("hii");
