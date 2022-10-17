//Prototypes

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
console.log(Person.prototype); //{}

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};
const lokesh = new Person("lokesh", 1996);
console.log(lokesh);
//Person { firstName: 'lokesh', birthYear: 1996 }
const mayur = new Person("mayur", 1997);

lokesh.calAge();//41
mayur.calAge();//40

console.log(lokesh.__proto__);
console.log(lokesh.__proto__ === Person.prototype);//true
console.log(Person.prototype.isPrototypeOf(lokesh));//true
console.log(Person.prototype.isPrototypeOf(mayur));//true
console.log(Person.prototype.isPrototypeOf(Person));//false

//.prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(lokesh.species,mayur.species);
//Homo Sapiens Homo Sapiens

console.log(lokesh.hasOwnProperty('firstName'));//true
console.log(lokesh.hasOwnProperty('species'));//false