// this data structre concept is introduced in ES6
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); //{"Pasta","Pizza","Risotto"}
console.log(orderSet.size); //3

console.log(new Set('Jonas'));

console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Risotto');
console.log(orderSet);

//to delete all elements there is a clear method
// orderSet.clear();

//Loop over set
for (const order of orderSet) console.log(order);

const staff = ['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); //{'waiter', 'Chef', 'Waiter', 'Manager'}

console.log(
  new Set(['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //3

console.log(new Set('Jonasschemedtmann').size); //11
