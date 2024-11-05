{

    //spread operator

    const oddNum: number[] = [1, 3, 5, 7, 9];
    const evenNum: number[] = [2, 4, 6, 8];

    const numbers: number[] = [...oddNum, ...evenNum];


    // rest operator

    const greetPersons = (...persons: string[]) => {
        persons.forEach((person: string) => console.log(person))
    }

    greetPersons("asif", "manir");










}