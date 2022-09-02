//SPREAD OPERATOR
//The JavaScript spread operator(...) allows us to quickly copy all or
//part of an existing array or object into another array or object.

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1,2,7,8,9]

//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); //[1,2,7,8,9]

console.log(...newArr); //print all element of array using spread operatoe
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables:arrays,strings,maps,sets. NOT objects
const str = 'Lokesh';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Jawale`);

const ingredients = [
  prompt("Let's make pasta Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingrediet 3'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestarant = { ...restaurant, foundIn: 1998, founder: 'Lokesh jawale' };
console.log(newRestarant);

restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Lokesh';
console.log(restaurantCopy.name);
console.log(restaurant.name);
