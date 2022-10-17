"use strict";

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  ///Never to this
  //  this.calAge = function(){
  //   console.log(2037-this.birthYear);
  //  };
};

const lokesh = new Person("lokesh", 1996);
console.log(lokesh);
//Person { firstName: 'lokesh', birthYear: 1996 }

//1. New {} is created
//2.function is calles, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const mayur = new Person("mayur", 1997);
const shreyash = new Person("Shreyash", 1998);
const jay = "jay";
console.log(mayur, shreyash);
//Person { firstName: 'mayur', birthYear: 1997 } Person { firstName: 'Shreyash', birthYear: 1998 }
console.log(mayur instanceof Person); //true
console.log(jay instanceof Person); //false
