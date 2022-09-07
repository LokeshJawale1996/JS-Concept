const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(fligtNum, name) {
    console.log(`${name} booked at seat on ${this.airline} 
    flight ${this.iataCode}${fligtNum}`);
    this.bookings.push({ flight: `${this.iataCode}${fligtNum}`, name });
  },
};

lufthansa.book(239, 'Lokesh Jawale');
lufthansa.book(635, 'Mayur Warade');
// Lokesh Jawale booked at seat on Lufthansa
//     flight LH239
// Mayur Warade booked at seat on Lufthansa
//     flight LH635

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'Ew',
  bookings: [],
};

const book = lufthansa.book;

//does NOT work
// book(23,'Loki Jawale');

book.call(eurowings, 23, 'Loki Jawale');
console.log(eurowings);
// Loki Jawale booked at seat on Eurowings
//     flight Ew23

// {
//   airline: 'Eurowings',
//   iataCode: 'Ew',
//   bookings: [ { flight: 'Ew23', name: 'Loki Jawale' } ]
// }

book.call(lufthansa, 239, 'Nicky Cooper');
console.log(lufthansa);

// Nicky Cooper booked at seat on Lufthansa
//     flight LH239
// {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [
//     { flight: 'LH239', name: 'Lokesh Jawale' },
//     { flight: 'LH635', name: 'Mayur Warade' },
//     { flight: 'LH239', name: 'Nicky Cooper' }
//   ],
//   book: [Function: book]
// }

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);
// Mary Cooper booked at seat on Swiss Air Lines
//     flight LX583
// {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [ { flight: 'LX583', name: 'Mary Cooper' } ]
// }

//call method
const flightData = [583, 'Loki Cooper'];
book.apply(swiss, flightData);
// book.call(swiss, ...flightData);
console.log(swiss);
// Loki Cooper booked at seat on Swiss Air Lines
//     flight LX583
// {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [
//     { flight: 'LX583', name: 'Mary Cooper' },
//     { flight: 'LX583', name: 'Loki Cooper' }
//   ]
// }

//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Ajay Virkar');
// Ajay Virkar booked at seat on Eurowings
//     flight Ew23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Dhanaji W');
bookEW23('Kunal P');
// Dhanaji W booked at seat on Eurowings
//     flight Ew23
// Kunal P booked at seat on Eurowings
//     flight Ew23

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
//const addVAT = value => value + value *23;

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
console.log(addVAT2(23)); //28,29

//With the bind() method, an object can borrow a method from another object.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen',
};

let fullName = person.fullName.bind(member); //Hege Nilsen
