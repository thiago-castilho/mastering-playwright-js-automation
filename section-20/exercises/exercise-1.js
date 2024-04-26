// Test your JavaScript Array knowledge
// Create an array called expenses that contains at least 5 different expense amounts.
// Calculate the total expenses by summing all the elements of the array.
// Find the highest and lowest individual expenses within the array.

// This Coding exercise helps you to understand how to go over each element of Array index and have comparision checks

let expenses = [13,14,16,50,100];

// Sum
let sum = expenses.reduce((accumulator, expense) => (accumulator + expense));
console.log(sum);

// Max
let max = expenses.reduce((accumulator, expense) => (accumulator > expense ? accumulator : expense));
console.log(max);

// Min
let min = expenses.reduce((accumulator, expense) => (accumulator < expense ? accumulator : expense));
console.log(min);


// Hint: Iterate through every expense item using for loop and have if condition inside for condition check on each iteration


// Explanation of the Solution:
// var expenses = [25.50, 17.25, 80, 33.99, 51.75]; 
// var totalExpenses = 0;
// var highestExpense = expenses[0];
// var lowestExpense = expenses[0];
 
// // Calculate total expenses
// for (let i = 0; i < expenses.length; i++) {
//     totalExpenses += expenses[i];
// }
 
// // Find highest and lowest expenses
// for (let i = 0; i < expenses.length; i++) {
//     if (expenses[i] > highestExpense) {
//         highestExpense = expenses[i];
//     }
//     if (expenses[i] < lowestExpense) {
//         lowestExpense = expenses[i];
//     }
// }
 
// console.log("Total Expenses:", totalExpenses);
// console.log("Highest Expense:", highestExpense);
// console.log("Lowest Expense:", lowestExpense);