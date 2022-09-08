const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//using map
const deposites = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposites); //[ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); //[ -400, -650, -130 ]

//using for of loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor); //[ 200, 450, 3000, 70, 1300 ]
