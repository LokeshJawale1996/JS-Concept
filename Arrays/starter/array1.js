///////////////////////////////////////////////////////////
//Array Methods- slice

//SLICE methods
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); //we should start extracting from 2nd index element
//[ 'c', 'd', 'e' ]

console.log(arr.slice(2, 4)); //we should start extracting from 2nd index and stop before 4th index
//[ 'c', 'd' ]

console.log(arr.slice(-2)); //we should start extracting from 2nd last element and further
//['d', 'e'];

console.log(arr.slice(-1)); //we should extract last 1 element from the array
//[ 'e' ]

console.log(arr.slice(1, -2)); //we should start extracting from 1st index and stop at 2nd last element from array
//[ 'b', 'c' ]

console.log(arr.slice()); //we should get the shallow copy of array
//[ 'a', 'b', 'c', 'd', 'e' ]

console.log([...arr]); //we should get the shallow copy of array
//[ 'a', 'b', 'c', 'd', 'e' ]

//SPLICE method
// console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
arr.splice(-1);
console.log(arr); //[ 'a', 'b', 'c', 'd' ]
arr.splice(1, 2);
console.log(arr); //[ 'a','d' ]

//REVERSE method
let arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]

//CONCAT method
const letters = arr1.concat(arr2);
console.log(letters); //
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]

console.log([...arr1, ...arr2]);
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]

//JOIN
console.log(letters.join('-'));
//a-b-c-d-e-f-g-h-i-j

///////////////////////////////////////////////////////////
