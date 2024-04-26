// Block of code

function add(a, b) {
    return a + b;
}

let sum = add(2,3);
console.log(sum);

// Anonymous funciton - They do not have name. -- Function expressions

// let sumOfIntegers = function(c,d) {
//     return c+d;
// }

let sumOfNumbers = (c,d) => c+d;

console.log(sumOfNumbers(3,3));