//for loop
//for - loops through a block of code a number of times

console.log("....................FOR LOOP....................");
let i;
for (i = 1; i < 5; i++) {
  console.log(i);
}

//forward looping of array using for loop
const names = ["lokesh", "kartik", "dhanaji", "ajinkya"];

for (let j = 0; j < names.length; j++) {
  console.log(names[j], typeof names[j]);
}

//bckward looping of for loop
for (let k = names.length - 1; k >= 0; k--) {
  console.log(names[k]);
}

///////////////////////////////////
//while loop
//while - loops through a block of code while a specified condition is true

console.log("..................WHILE LOOP....................");
//while loop
let a = 0;
while (a < 5) {
  console.log(a);
  a++;
}

//forward looping using while loop
let b = 0;
while (b < names.length) {
  console.log(names[b]);
  b++;
}

//backward loping using while loop
let c = names.length - 1;
while (c > 0) {
  console.log(names[c]);
  c--;
}

///////////////////////////////////

//for in loop
//for/in - loops through the properties of an object

console.log("................FOR IN LOOP....................");
const person = {
  fName: "Lokesh",
  lNameL: "Jawale",
  age: 25,
};

for (let p in person) {
  console.log(person[p]);
}
////////////////////////////////
//for of loop
//for/of - loops through the values of an iterable object
console.log(".................FOR OF LOOP...................");
const fruits = ["apples", "mango", "banana", "grapes"];
for (let fruit of fruits) {
  console.log(fruit);
}
