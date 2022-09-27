//callback function is executing after 3 seconds
//this mechanism is called asynchronous javascript
const ingredients = ["olives", "spinach"];
const pizaaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is you pizza with ${ing1} and ${ing2}`),
  3000,
  // "olives",
  // "spinach"
  ...ingredients
);
console.log("waiting ....");

if (ingredients.includes("spinach")) clearInterval(pizaaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
