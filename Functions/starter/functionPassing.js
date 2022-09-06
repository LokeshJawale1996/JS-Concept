//Passing Argument :Value vs Reference
//JavaScript has only passing by values does not have passing by reference
const flight = 'LH234';
const lokesh = {
  name: 'Lokesh Jawale',
  passport: 34556785345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 34556785345) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, lokesh);
// console.log(flight);
// console.log(lokesh);

// //Is the same as doing
// const flightNum = flight;
// const passenger = lokesh;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(lokesh);
checkIn(flight, lokesh);
