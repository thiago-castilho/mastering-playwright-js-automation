module.exports = class Person {

    age = 27;
    // location = "canada";
    //When we use get, it will be count as property, not a function
    get location() {
        return "canada";
    }

    // Constructor is a method which executes by default when ou create object of the class
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // methods
    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

// let person = new Person("Thiago", "Castilho");
// let person1 = new Person("Carolina", "Sass");
// console.log(person.age);
// console.log(person.location);
// person.fullName();
// person1.fullName();