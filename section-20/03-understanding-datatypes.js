// To understand what is the datatype of an object, there is a method called 

let a = 4;
console.log(a);
console.log(typeof (a));

let b = 234.6;
console.log(typeof (b));

var c = "Thiago Castilho";
console.log(typeof (c));

let required = true;
console.log(typeof (required));

// There is two more datatypes: 
// null: Occurs when we store a null value in any variable.
// undefined: Occurs when we do not assign any value to a variable. 

// We cannot redeclare variable with let keyword but possible with var. Check the line 10, the variable is declared with the var keyword. 
// If we type: let c = a + b it will not work.
// But another situation is: We can re-assign with var and let keyword. So if we type c=a+b it will work. 
var c = a + b;
console.log(c);

// Negational operator
console.log(!required);