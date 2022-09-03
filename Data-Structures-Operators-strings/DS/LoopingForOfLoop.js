const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, e] of menu.entries()) {
  console.log(`${i + 1}:${e}`);
}

// console.log(menu.entries());

const fruits = ['apple', 'banana', 'mango', 'orange'];
for (const item of fruits) console.log(item);

for (const [i, e] of fruits.entries()) {
  console.log(`${i + 1}:${e}`);
}
