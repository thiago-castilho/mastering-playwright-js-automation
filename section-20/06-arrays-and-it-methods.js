// Array is a collection of elements.
// We can do this in some ways: Declaring values and create an empty Array. 
var marks = Array(6);
var marks = new Array(20, 40, 35, 12, 37, 100);
var marks = [20, 40, 35, 12, 37, 100];

// To acess any index
marks[2]; // This will print the index 2 (35)

// Change the 3 index from 12 to 14
marks[3] = 14;
console.log(marks); // [20,40,35,14,37,100]

// Get the total lenght of an Array
console.log(marks.length); // 6

// Add more elements in Array
marks.push(65); // It appends a new element at the end of the Array
console.log(marks); // [20,40,35,14,37,100,65]

// Remove the last element from an Array
marks.pop();
console.log(marks); // [20,40,35,14,37,100]

// Add element at the start of an Array
marks.unshift(12);
console.log(marks); // [12, 20,40,35,14,37,100]

// Remove the first element of an Array
marks.shift();
console.log(marks); // [20,40,35,14,37,100]

// Returns the index of a value in the Array
console.log(marks.indexOf(100));

// Validate if a number is present in the Array
console.log(marks.includes(120)); // Returns true if present and false if not present. 

// Split the Array
subMarks = marks.slice(2, 5);
console.log(subMarks);

// Print Array with a loop 
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// Sum each number in the Array
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log("sum: " + sum);


// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================

var marks = [20, 40, 35, 14, 37, 100];

// REDUCE: Used to reduce an Array to a single value
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

// Lets find the max
var numbers = [25, 4, 11, 56, 75, 9, 100];
let max = numbers.reduce((accumulator, actual) => (accumulator > actual ? accumulator : actual));
console.log("max: " + max);

// Lets find the min
var numbers = [25, 4, 11, 56, 75, 9, 100];
let min = numbers.reduce((accumulator, actual) => (accumulator < actual ? accumulator : actual), numbers[0]);
console.log("min: " + min);




// FILTER: Used to select specifc elements in the Array
// Lets print only the even numbers withou the filter method.
var numbers = [25, 4, 11, 56, 75, 9, 100];
var evenScores = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenScores.push(numbers[i]);
    }
}
console.log("Even numbers wihtout filter method: " + evenScores);

// Now, lets use the filter method.
console.log("Even numbers with filter method: " + numbers.filter(number => number % 2 == 0));




// MAP: Used to transform elements in the Array
// Create new array with even numbers of scores and multiply each value with 3 
// [12,14,16] => [36,42,48]
var scores = [12, 14, 16]
let mappedArray = scores.map(score => score * 3, scores[0]);
console.log(mappedArray);


// Create new array with even numbers of scores and multiply each value with 3 and sum them
// [12,14,16] => [36,42,48] => 126
var scores = [12, 14, 16]
let mappedArrayNew = scores.map(score => score * 3);
let sumArray = mappedArrayNew.reduce((accumulator, actual) => (accumulator + actual));
console.log(sumArray);


// Now, lets do in a single chain
var scores1 = [12, 13, 14, 15, 156, 171];

var totalChain = scores1.filter(score => score % 2 === 0).map(score => score * 3).reduce((sum, value) => (sum + value));
console.log(totalChain);




// The sort method can only perform with Strings.
let fruits = ["Banana", "Mango", "Pomegrante", "Apple"];
fruits.sort();
console.log(fruits);

var scores1 = [12, 003, 13, 14, 15, 156, 171];

// scores1.sort(function(a,b) {
//     return a-b
// });
// Same function as above, but in a different way
scores1.sort((a,b) => a-b);
console.log(scores1);

// If we want to reverse the result, we just need to type the reverse() method.
console.log(scores1.reverse());

// Or simple change de subraction order
console.log(scores1.sort((a,b) => b-a));