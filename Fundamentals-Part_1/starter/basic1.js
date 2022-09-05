////////////////////////////////////

// Values and Variables
console.log("Jonas"); //Jonas
console.log(23); //23

let firstName = "Matilda";

console.log(firstName); //Matilda
console.log(firstName); //Matilda
console.log(firstName); //Matilda

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

////////////////////////////////////

// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun); //true

// console.log(typeof true);
console.log(typeof javascriptIsFun); //boolean

// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); //string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(typeof null); //object

////////////////////////////////////

// Variables: let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Jawale";
console.log(lastName); //Jawale

////////////////////////////////////
//Type Conversion and Coercion

// type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
