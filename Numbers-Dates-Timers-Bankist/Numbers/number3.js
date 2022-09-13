//Remainder Operator

console.log(5 % 2); //1
console.log(5 / 2); //2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6666666666666665

console.log(6 % 2); //0
console.log(6 / 2); //3

console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = (n) => n % 2 === 0;
console.log(isEven(34)); //true
console.log(isEven(7)); //false
console.log(isEven(514)); //true

//Numeric Seperators
//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //287460000000;

const price = 345_99;
console.log(price); //34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI); //3.1415

console.log(Number("23000")); //
console.log(parseInt("230_000")); //230
