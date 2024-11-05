"use strict";
{
    //spread operator
    const oddNum = [1, 3, 5, 7, 9];
    const evenNum = [2, 4, 6, 8];
    const numbers = [...oddNum, ...evenNum];
    // rest operator
    const greetPersons = (...persons) => {
        persons.forEach((person) => console.log(person));
    };
    greetPersons("asif", "manir");
}
