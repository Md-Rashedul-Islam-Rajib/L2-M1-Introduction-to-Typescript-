{

    //type alias

    type Person = {
        name: string;
        age: number;
        gender: "male" | "female";
        address: string;
        isMarried: "yes" | "no";

    }

    const teacher: Person = {
        name: "mr x",
        age: 55,
        gender: "male",
        address: "unknown",
        isMarried: "no"
    }


    //type alias in function

    type AddFunc = (num1: number, num2: number) => number;

    const add: AddFunc = (num1, num2) => num1 + num2;



}