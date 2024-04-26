// Inheritance is the Main Pillar in Object Oriented Programming
// One class can inherit/acquire the properties and methods of another class
// The class which inherits the properties of other is known as subclass (derived class, child class)
// The class whose properties are inherited is known as superclass
const Person = require('./11-classes-and-it-properties-methods');

class Pet extends Person {

    get location() {
        return "BlueCross";
    }
    constructor(firstName, lastName) {
        // Call parent class constructor 
        super(firstName, lastName);
    }
}

let pet = new Pet("Test", "Two");
console.log(pet.fullName());
console.log(pet.location);