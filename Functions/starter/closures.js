const secureBooking = function () {
  let = passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
// 1 passangers
// 2 passangers
// 3 passangers

//1)A closure is the closed-over variable environment of the execution context in whcih a function was
//created ,even after that execution context is gone;

//2) A closure gives a function access to all the variables of its parent function,even after that
//parent function has returned. The function keeps to its outer scope ,which preserves the scope
//chain throughout time.

//3)A closure makes sure that a function doesn't loose connection to variables that existed
//at the functions birth's place.

//4) A clousure is like a backpack that a function carries around whenever it goes.This backpack has
//all the variables that were present in the environment where the function was created

//5)We do NOT have manually create closures,this is a javaScript feature that happens automatically.
//we can't even access closed-over variables explicitly.A closure is NOT a tangible JavaScript Object

console.dir(booker); //[Function (anonymous)]

//Closures Example
//Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//46

//Reassign by h function which close variable environment of g
h();
f();
//1554
console.dir(f);

//Example 2
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups,each with ${perGroup} passangers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('timer');
// }, 2000);

const perGroup = 1000;
boardPassangers(180, 3);
// Will start boarding in 3 seconds
// We are now boarding all 180 passangers
// There are 3 groups,each with 60 passangers
