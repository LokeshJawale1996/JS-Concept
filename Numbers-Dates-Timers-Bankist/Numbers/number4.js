console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1); //9007199254740992
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996

console.log(46273738894040303027282920390n); //46273738894040303027282920390n
console.log(BigInt(46273739)); //46273739n

//Operations
console.log(10000n + 10000n); //20000n
console.log(3889440303332377388n * 10000n); //38894403033323773880000n

const huge = 3637882882822929292n;
const num = 26;
console.log(huge * BigInt(num)); //94584954953396161592n
// console.log(Math.sqrt(16n));

//exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == "20"); //true

console.log(huge + " is REALLY big!!"); //3637882882822929292 is REALLY big!!

//Divisions
console.log(11n / 3n); //3n
console.log(10 / 3); //3.3333333333333335
