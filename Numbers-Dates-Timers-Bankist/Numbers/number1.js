console.log(23 === 23.0); //true

//Base 10 - 0 to 9
//Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//Convert string into number
console.log(Number("23")); //23
console.log(+"23"); //23

//Parsing
console.log(Number.parseInt("30px", 10)); //30
console.log(Number.parseInt("e23", 10)); //NaN

console.log(Number.parseInt("     2.5rem")); //2
console.log(Number.parseFloat("   2.5rem    ")); //2.5

//isNaN check if value is not Number
console.log("---isNaN---");
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20X")); //true
console.log(Number.isNaN(20)); //false

//isFinite: checking if Value is Number
console.log("---isFinite---");
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(+"20X")); //false
console.log(Number.isFinite(23 / 0)); //false

console.log("---isInteger---");
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
