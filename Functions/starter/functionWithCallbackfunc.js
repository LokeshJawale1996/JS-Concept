const onWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  //removing spaces and convert string to lower case
};
console.log(onWord('LOK E    SH')); //lokesh

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord('lokesh jawale')); //LOKESH jawale

///HIger-Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed By: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
// Original String: JavaScript is the best!
// Transformed String: JAVASCRIPT is the best!
// Transformed By: upperFirstWord

transformer('JavaScript is the best!', onWord);
// Original String: JavaScript is the best!
// Transformed String: javascriptisthebest!
// Transformed By: onWord

const high5 = function () {
  console.log('Hello Budddy!');
};
document.body.addEventListener('click', high5);

['Lokesh', 'mayur', 'vicky'].forEach(high5);
