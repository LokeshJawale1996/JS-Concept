const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Lokesh'); //Hey Lokesh
greeterHey('Mayur'); //Hey Mayur

greet('Hello')('Dhanaji'); //Hello Dhanaji

const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greetArr('Hi')('Kartik'); //Hi Kartik
