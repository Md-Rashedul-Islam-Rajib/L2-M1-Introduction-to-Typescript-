{


    // nullable types
    const search = (param: string | null) => {
        param ? console.log("searching") : console.log("nothing to search");
    }
    
    // unknown types

    const converter = (value: unknown) => {
        typeof value ==="number" ? ((value * 1000)/3600) :  console.log("invalid input")
    }

    //never type

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    // this function never return anything except throw an error, so we can use never type here as return type of this function




}