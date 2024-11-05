{
    //Reference type

    // object
    const user: {
        firstName: string;
        middleName?: string;  // "?" used for optional property declaration
        lastName: string;
        age: number;
        readonly isMarried: boolean; //access modifier for make this property readonly
        company: "pantex";
        // literal type declaration
    } = {
        firstName: "Mr Xavier",
        middleName: " Faisal",
        lastName: "talukder",
        age: 99,
        isMarried: true,
        company: 'pantex'
    }

}