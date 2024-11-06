"use strict";
{
    // ternary operator
    const age = 18;
    age ? console.log("adult") : console.log("not adult");
    // nullish coalescing operator
    const isTrue = null;
    const result = isTrue !== null && isTrue !== void 0 ? isTrue : "guest"; //nullish coalescing operator is used for to assign a default value if dependent condition hold a null value
}
