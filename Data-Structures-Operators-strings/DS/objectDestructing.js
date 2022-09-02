'use strict';

//OBJECT DESTRUCTING

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
       will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22.30',
  address: '2152 Dibugalli',
  mainIndex: 2,
  starterIndex: 2,
});
//Order Received! Garlic Bread and Risotto
//will be delivered to 2152 Dibugalli at 22.30

restaurant.orderDelivery({
  address: '2153 Dibugalli',
  starterIndex: 1,
});
//Order Received! Bruschetta and Pizza
//will be delivered to 2153 Dibugalli at 20:00

//Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//give other names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu = (starters = []) } = restaurant;
console.log(menu, starterMenu);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //(wrap up in parenthesis for object destructing)
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours; //which comes from before destructing
console.log(o, c);
