'use strict';

///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{ flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800); //{ flightNum: 'LH123', numPassengers: 2, price: 800 }
createBooking('LH123', 2); //{ flightNum: 'LH123', numPassengers: 2, price: 398 }
createBooking('LH123', 5); //{ flightNum: 'LH123', numPassengers: 5, price: 995 }
createBooking('LH123', undefined, 1000); //{ flightNum: 'LH123', numPassengers: 1, price: 1000 }
