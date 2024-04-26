// Declare String
// We can declare a String with singular quote and double quote. 
let day = 'tuesday ';

// Get the String length
console.log(day.length); // 8 

// Slice the String
console.log(day.slice(0, 4)); // tues

// Acess any caracter in the String
console.log(day[1]); // u

// Split the String 
console.log(day.split("s")); // [ 'tue', 'day ' ]
// Print the second slice
console.log(day.split("s")[1]); // day

// Remove spaces 
console.log(day.trim().length); // 7 


// Convert String to Integer
let date = '23';
let nextDate = '27';
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);

// Convert back to String
console.log(diff.toString());

// Concatenate two Strings
let newQuote = day + "is Funday";
console.log(newQuote);

// Get the index that start as of a specific word. 
let val = newQuote.indexOf("day");
console.log(val);

// We can also use an argument to specify where we want to start the count
// In this case, we put number five because at the index 4 is where the day appears at first time
let valu = newQuote.indexOf("day", 5);
console.log(valu);

// Lets write a program that shows how many times the word 'day' occurs
// tuesday is Funday // 2 times
let count = 0;
let value = newQuote.indexOf("day");
while (value !== -1) {
    count++
    value = newQuote.indexOf("day", value + 1);
}
console.log("count: " + count);