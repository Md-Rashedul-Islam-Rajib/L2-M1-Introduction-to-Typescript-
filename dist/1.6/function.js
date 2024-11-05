"use strict";
{
    //function in typescript
    //general function
    function add(num1, num2) {
        return num1 + num2;
    }
    const student = {
        name: "Mr x",
        balance: 0,
        addBalance(balance) {
            return `balance is ${this.balance + balance}`;
        }
    };
    const numArray = [1, 4, 7];
    let squaredArray = numArray.map((ele) => {
        return ele * ele;
    });
}
