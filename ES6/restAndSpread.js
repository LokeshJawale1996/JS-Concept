//ES6
//Rest and Spread Operator

//Example rest
//Array
function addNumbers(a, b, c, ...other) {
  // console.log(other); //[7,8,9]
  // console.log(other[1]); //8
  //console.log(arguments);//ES5
  return a + b + c;
}

const result = addNumbers(2, 5, 6, 7, 8, 9);
console.log(result);

//rest in Object
var student = {
  name: "lokesh",
  age: 25,
  hobbies: ["cricket", "reading"],
};
// const age = student.age;
//object destructing
const { name, age, hobbies } = student;
const { ...rest } = student;
console.log(rest);

//===============================
//Spread
//Array-spread
var names = ["lokesh", "dhanaji", "kartik"];
function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(names[0], names[1], names[2]); //lokesh dhanaji kartik
getNames(...names); //lokesh dhanaji kartik
getNames(names);

//Object spread
var newStudent = {
  ...student,
  age: "26",
};

console.log(newStudent);
