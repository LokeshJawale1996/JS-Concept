"use strict";

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Lokesh Jawale",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Mayur Warade",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Dhanaji Waghmode",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Ajinkya Jagdale",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//Create a date

const now = new Date();
console.log(now); //2022-09-14T06:17:04.373Z

console.log(new Date("Aug 02 2020 18:06:41")); //2020-08-02T12:36:41.000Z
console.log(new Date("December 24,2015")); //2015-12-23T18:30:00.000Z
// console.log(new Date(account1.movementsDates[0])); //

console.log(new Date(2037, 10, 19, 15, 23, 5)); //2037-11-19T09:53:05.000Z
console.log(new Date(2037, 10, 33)); //2037-12-02T18:30:00.000Z

console.log(new Date(0)); //1970-01-01T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //1970-01-04T00:00:00.000Z

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //2037-11-19T09:53:00.000Z

console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T09:53:00.000Z
console.log(future.getTime()); //2142237180000
console.log(new Date(2142237180000)); //2037-11-19T09:53:00.000Z

console.log(Date.now()); //1663137080330

future.setFullYear(2040);
console.log(future); //2040-11-19T09:53:00.000Z

//Operation with dates
const calsDayPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
const day1 = calsDayPassed(new Date(2037, 10, 24), new Date(2037, 10, 11));
console.log(day1); //13
