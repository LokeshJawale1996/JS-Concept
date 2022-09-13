console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(2, 6, 1, 8, 90, 34, 678)); //678
console.log(Math.max(45, 34, "67", 23, 33, 65)); //67
console.log(Math.max(5, 18, "23px", 11, 2)); //NaN

console.log(Math.min(2, 6, 1, 8, 90, 34, 678)); //1

console.log(Math.PI * Number.parseFloat("10px") ** 2); //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); //get value from 1 to 6 randomly

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
//0...1 -> 0 ...(max-min) -> min...(max- min +min)
console.log(randomInt(10, 20));

//Rounding Integers
console.log(Math.round(23.9)); //24
console.log(Math.round(23.3)); //23

console.log(Math.ceil(23.9)); //24
console.log(Math.ceil(23.3)); //24

console.log(Math.floor("23.9")); //23
console.log(Math.floor(23.3)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//Rounding decimals
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(5)); //2.70000
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35
