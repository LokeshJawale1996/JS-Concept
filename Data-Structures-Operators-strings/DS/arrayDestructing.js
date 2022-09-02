'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Array Destructing

//The destructuring assignment syntax is a JavaScript expression that makes it possible
//to unpack values from arrays, or properties from objects, into distinct variables.

//The destructuring assignment uses similar syntax, but on the left-hand side of the assignment
//to define what values to unpack from the sourced variable.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructing of arr from right side
//it is not array it is destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Destructing
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secondary,main]

//Destructing
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

//Destructing
//Receive 2 return values from a function
const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, mainMenu);

//Nested Destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
