const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
//Returns the value of the first element in the array where predicate is true,
//and undefined otherwise.

console.log(firstWithdrawal); //-400

const account1 = {
  owner: 'Lokesh Jawale',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Mayur Warade',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Dhanaji Waghmode',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Ajinkya Jagdale',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => acc.owner === 'Lokesh Jawale');
console.log(account);
// {
//   owner: 'Lokesh Jawale',
//   movements: [
//      200,  450, -400,
//     3000, -650, -130,
//       70, 1300
//   ],
//   interestRate: 1.2,
//   pin: 1111
// }
