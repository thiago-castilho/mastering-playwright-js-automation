// You have an array called productPrices with various product prices.
// Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
// Use the filter method to create a new array called affordableProducts containing only products priced below $50
// Calculate the total cost of all items in the affordableProducts array using the reduce method.

// Apply transformations and calculations to array elements, and filter elements based on a condition

let productPrices = [10, 12, 14, 15, 16, 73, 745, 75, 233];

// Apply 10% discount
let discountedPrices = productPrices.map(price => price -= (price * 0.1));
console.log(discountedPrices);

let affordableProducts = discountedPrices.filter(price => (price < 50));
console.log(affordableProducts);

let sum = affordableProducts.reduce((accumulator, value) => (accumulator + value));
console.log(sum);


// Hint: Use method called map to apply discount and use filter for filtering products under $50 and use reduce method for total cost

// Explanation of the Solution:

// var productPrices = [45, 89, 32.50, 65.99];
 
// // Apply 10% discount
// var discountedPrices = productPrices.map(price => price * 0.9);
 
// // Products under $50
// var affordableProducts = productPrices.filter(price => price < 50);
 
// // Total cost of affordable products
// var totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);
 
// console.log(discountedPrices);
// console.log(affordableProducts);
// console.log(totalCost);
