// string

let name = "Carlos";

name = "Juan";

const name_const = "Arturo";

// This error name_const is a constant
// name_const = 'Orrego'

// number and string

// Support two types of numbers
let hpPoints: number | string = "Orrego";
console.log(hpPoints) // "Orrego"
hpPoints = 30;
console.log(hpPoints) // 30
