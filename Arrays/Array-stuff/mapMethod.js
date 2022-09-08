const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// [200, 450, -400, 3000, -650, -130, 70, 1300]
// [
//   220.00000000000003, 495.00000000000006, -440.00000000000006,
//   3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002,
// ];

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
// [
//   220.00000000000003, 495.00000000000006, -440.00000000000006,
//   3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002,
// ];

const movementsDescriptions = movements.map(
  (mov, i) =>
    // if (mov > 0) {
    //   return `Movement ${i + 1}: You deposited ${mov}`;
    // } else {
    //   return `Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`;
    // }
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// [
//   'Movement 1: You deposited 200',
//   'Movement 2: You deposited 450',
//   'Movement 3: You Withdrew 400',
//   'Movement 4: You deposited 3000',
//   'Movement 5: You Withdrew 650',
//   'Movement 6: You Withdrew 130',
//   'Movement 7: You deposited 70',
//   'Movement 8: You deposited 1300',
// ];
