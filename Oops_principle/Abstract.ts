class payment{
    constructor(protected amount: number, protected account: number){}
        isPaymnetValid(amount: number){
            return this.amount > 0
        }
    

}

                                   
class Paytm extends payment{
    account = 1243434343;
    amount = 1; 

}



console.log("good night!");