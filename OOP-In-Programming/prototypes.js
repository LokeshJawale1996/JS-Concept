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


//Prototypal inheritance On Built in Objects
console.log(lokesh.__proto__);
//{ calAge: [Function (anonymous)], species: 'Homo Sapiens' }
//Object.prototype (top of prototype chain)
console.log(lokesh.__proto__.__proto__);
//[Object: null prototype] {}

console.log(lokesh.__proto__.__proto__.Person);
//null

console.log(Person.prototype.constructor);
//[Function: Person]

const arr = [3,6,3,5,6,8];
console.log(arr.__proto__);
console.log(arr.__proto__=== Array.prototype);//true
console.log(arr.__proto__.__proto__);//[Object: null prototype] {}

Array.prototype.unique = function(){
return [...new Set(this)];
}
console.log(arr.unique());//[ 3, 6, 5, 8 ]


let name = "lokesh";
console.log(name.__proto__);

const head = document.querySelector('h1');

console.dir(x => x + 1);