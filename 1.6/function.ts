{
    //function in typescript

    //general function
    function add(num1: number, num2: number): number { // you can define the return type after the parameter like this
        return num1 + num2;
    }




    const student = {
        name: "Mr x",
        balance: 0,
        addBalance(balance: number): string{
            return `balance is ${this.balance+balance}`
        }
    }

    const numArray: number[] = [1, 4, 7];

    let squaredArray: number[] = numArray.map((ele: number) => {
        return ele * ele;
    });


















}