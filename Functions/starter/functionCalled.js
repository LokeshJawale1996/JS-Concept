//FIRST CLASS FUNCTIONS VS HIGHER ORDER FUNCTIONS

//First Class Functions
//JavaScript treats functions as first class citizens
//This means that functions are simply values
//Functions are just another "type" of object

//Store variable in variables or properties
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

//Pass functions as arguments to OTHER functions
const wish = () => console.log('Hey Lokesh');
btnClose.addEventListner('click', wish);

//Return functions FROM functions

//Call Methods on functions

//High Order Functions
//A function that receives another function as an argument,
//that returns a new function,or both
//This is only possible because of first class functions

//Function that receives another function
const greet = () => console.log('Hey Lokesh');
btnClose.addEventListner('click', greet);

//Function that returns new function
function count() {
  //high order functions
  let counter = 0;
  return function () {
    //return function
    counter++;
  };
}
