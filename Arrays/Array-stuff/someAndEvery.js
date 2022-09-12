const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements2 = [400, 50, 3000, 350, 700, 200];

//EQUALITY
console.log(movements);
console.log(movements.includes(-130)); //true

//SOME:CONDITION
console.log(movements.some(mov => mov === -130)); ////true
const anyDeposits = movements.some(mov => mov >= 5000);
console.log(anyDeposits); //false

//EVERY
console.log(movements.every(mov => mov > 0)); //false
console.log(movements2.every(mov => mov > 0)); //true

//Seperate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //[200,450,3000,70,1300]
