"use strict";
{
    // destructuring in TypeScript
    // object destructuring
    const person = {
        name: {
            firstName: "Mr",
            secondName: "Hasan",
            lastName: "Islam"
        },
        age: 29
    };
    const { age, name: { secondName } } = person;
    //array destructuring
    const people = ['abul', 'samad', 'kamal', 'jamal', 'rahim', 'karim'];
    const [, employee, teacher, neighbour, ...otherPeople] = people;
}
