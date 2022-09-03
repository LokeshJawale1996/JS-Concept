const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //enhanced object literals
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
       will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//1) MAP FUNDAMENTALS

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

//object vs Map
//in object keys are always strings
//but in maps keys are of any data type

const rest = new Map();
//The map. set() method is used to add key-value pairs to a Map object.

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//The get() method returns a specified element from a Map object.

console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open :D
console.log(rest.get(1)); //Firenze,Italy

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); ////We are open :D

console.log(rest.has('categories')); //true
// has : check if any key present in map or not and return true or false according to result

// rest.clear(); //to empty the map this method is used
rest.delete(2); //to delete any item using his key from map use delte method
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size); //returns no of items in maps

console.log(rest.get(arr)); //Test

//2) MAP:ITERATION

const question = new Map([
  ['question', 'What is the best programming langauge in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
// console.log(question);

//Convert Object to Maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration using for of loop
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} :${value}`);
}

const ans = Number(prompt('Your answer'));
console.log(ans);

console.log(question.get(question.get('correct') === ans));

//convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
