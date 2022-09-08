const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(movement)}`);
  }
}
// you deposited 200
// you deposited 450
// You Withdrew 400
// you deposited 3000
// You Withdrew 650
// You Withdrew 130
// you deposited 70
// you deposited 1300

// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You Withdrew 400
// Movement 4: You deposited 3000
// Movement 5: You Withdrew 650
// Movement 6: You Withdrew 130
// Movement 7: You deposited 70
// Movement 8: You deposited 1300

console.log('---FOREACH---');
movements.forEach(function (mov, i, ar) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)

// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You Withdrew 400
// Movement 4: You deposited 3000
// Movement 5: You Withdrew 650
// Movement 6: You Withdrew 130
// Movement 7: You deposited 70
// Movement 8: You deposited 1300
