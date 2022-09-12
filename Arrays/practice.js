"use strict";

/////////////////////////////////////////////////

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

///////////////////////////////////////////////

// Array Method Practice

//1.find out sum of all accounts Deposits
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum); //25180

//2.count number of movements greater than 1000
//using flatMap and filter chaining
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;

console.log(numDeposit1000); //6

//Using reduce method
const numDeposit1000_2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
//++count or count + 1 both works

console.log(numDeposit1000_2); //6

//prefixed ++ operator
let a = 10;
console.log(++a); //11
console.log(a); //11

//3.create object which has sums of deposits and withdrawals (IMP)
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); //25180 -7340

//4.
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitlize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitlize(word)))
    .join(" ");
  return capitlize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
//This Is a Nice Title

console.log(convertTitleCase("this is a LONG title but not too long"));
//This Is a Long Title but Not Too Long

console.log(convertTitleCase("and here is another title with an EXAMPLE"));
// And Here Is Another Title with an Example
