// Object is a collection of properties 

let person = {

    firstName: 'Thiago',
    lastName: 'Castilho',
    age: 27,
    fullName: function () {
        console.log(this.firstName + this.lastName);
    }

}


// To acess an obeject, we just need to call it and the available options will be shown for us. 
console.log(person.lastName);

// When we want to acess the object by using Array, we need to specify the datatype. In this example is String, só we needed to put the lastName key inside quotes. 
console.log(person['lastName']);

// Change the property in runtime
person.firstName = 'Carolina'
console.log(person.firstName);

// We can also add more properties in runtime
person.gender = 'male';
console.log(person);

// We can also delete a property in runtime 
delete person.gender;
console.log(person);

// Verify if a property exists in the object
console.log('gender' in person);

// Print all the properties inside an object
for (let key in person) {
    console.log(key);
}

// Print all the property values inside an object
for (let key in person) {
    console.log(person[key]);
}

console.log(person.fullName());