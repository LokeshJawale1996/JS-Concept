const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//balance using reduce
//accumulater -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); //3840

//balance using for of loop
let balance2 = 0;

for (const mov of movements) balance2 += mov;

console.log(balance2); //3840

//Maximum Value
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxValue); //3000
