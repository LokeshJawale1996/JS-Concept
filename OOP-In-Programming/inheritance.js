"use strict";
//Inheritance Betwen "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function(firstName,birthYear,course){
//   this.firstName = firstName;
//   this.birthYear = birthYear;
Person.call(this,firstName,birthYear);
  this.course=course;
}
Student.prototype.introduce = function (){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

// Student.prototype=Object.create(Person.prototype);
Student.prototype= Object.create(Person.prototype);

const mike = new Student("mike",2003,"Computer Science");
console.log(mike);
// Student {
//     firstName: 'mike',        
//     birthYear: 2003,
//     course: 'Computer Science'
//   }

// mike.introduce();
//My name is mike and I study Computer Science
mike.calAge();
//19
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
//true
console.log(mike instanceof Person);
//true
console.log(mike instanceof Object);
//true

Student.prototype.constructor= Student;
console.dir(Student.prototype.constructor);