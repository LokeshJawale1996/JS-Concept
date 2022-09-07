const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
//This will never run again

//immediately invoked function expression
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
//This will never run again

// console.log(isPrivate);
//isPrivate is not defined
//immediately invoked arrow function
(() => console.log('This will never run again'))();
//This will never run again

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate); //46
