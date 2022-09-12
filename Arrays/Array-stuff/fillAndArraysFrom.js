const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//[1, 2, 3, 4, 5, 6, 7];

//Empty Arrays + fill method
const x = new Array(7);
console.log(x);
//[ <7 empty items> ]

//console.log(x.map(() => 5);
//x.fill(1); //[1,1,1,1,1,1,1]

x.fill(1, 3, 5);
console.log(x);
//[ <3 empty items>, 1, 1, <2 empty items> ]

arr.fill(23, 2, 6);
console.log(arr);
//[1,2,23,23,23,23,7]

//Array.from

const sameValue = Array.from({ length: 7 }, () => 1);
console.log(sameValue);
//[1,1,1,1,1,1,1]

const valuesAscending = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(valuesAscending);
//[1,2,3,4,5,6,7,8,9,10]
