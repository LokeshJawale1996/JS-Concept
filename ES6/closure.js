//Closure

// A closure is a function and its scope assigned to (or used as) a variable. Thus, the name closure:
// the scope and the function is enclosed and used just like any other entity

// In other words, a closure gives you access to an outer function's scope from an inner function.

var sum = function (a) {
  console.log("live viewers " + a);
  //anonymous function -which has no name
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};
var store = sum(2); //calling
//a and c value are retained and added
//value can not be lost after calling function it is retained
console.log(store(5));
console.log(store(11));

var sumNew = function (x, y, z) {
  return {
    getSumTwo: function () {
      return x + y;
    },
    getSumThree: function () {
      return x + y + z;
    },
  };
};

var store1 = sumNew(3, 4, 5);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
