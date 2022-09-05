1)Data Types

i)string
ii)Number
iii)Bollean
iv)null
v)undefined
vi)Symbol
vii)BigInt

====================================================================

2)Variables- let,var & const

var -function scope
let & const - block scoped (accessible within that block)

const- it's value cannot be modified

=====================================================================

3)Operators

I)Math operator(/ \* + -)

II)Assignment operator(+= -+ \*= /= x++ x-- ++x --x)

III)Comparision Operator(< > <= >=)

IV)Equaility Operators == && === (Loose Equals & Strict equals)

    i) ( == ) operator: is also known as loose equality operator which is mainly used to

compare two value on both the sides and then return true or false.

    ii) ( === ) operator: checks whether its two operands are equal, returning a Boolean result.

Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

V)Logical Operators(&& || !)

i) && - only true if all statements are true otherwise false

ii) || - true if any one statment is true otherwise false

iii) ! - acting reversly if !(true) then results false and if !(false) then result true

VI)The Conditional (Ternary) Operator

condition ? exprIfTrue : exprIfFalse

    let age = 15;
    const isReadyForVote = age >=18 ? console.log("eligible for voting") : console.log("not eligible for voting")


====================================================================

4)Strings and Template Literals

i)string literal is a sequence of characters from the source character set enclosed in double quotation marks (" ")

# ii)Template literals are enclosed by backtick (`) characters instead of double or single quotes.

5)If/else statements

in this we check the condition of if (if it is trur if block will be executed otherwise else block will be executed)

=====================================================================

6)Type Conversion and Coercion

Type conversion is similar to type coercion because they both convert values from one data type
to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

=====================================================================

7)Truthy and Falsy Values

There are 5 falsy values: 0, '', undefined, null, NaN

=====================================================================

8)functions

it is a block of code designed to perform a particular tasks

it is executed when something invokes it.

====================================================================

9)function declarations and expressions

i)function declaration : design with function
function hello(){
console.log("Hello Loki")
}

ii)function expression : stored in variable
const hello = () => {
console.log("Hello Loki");
}

hello();

====================================================================

10)Arrow functions

it is complete alternative to the functional expression

const calSum = (a,b) => {

return a \* b;

}

=====================================================================

11)Arrays

Arrays are objects in which we can store multiple values in a single variable.

declarations

i)let arr = new Array();

ii)let arr = [];

======================================================================

12)Arrays Methods

i)length-returns the number of elements is an array.

ii)indexOf()-gives the index position of element

iii)sort().sort the array elements

iv)reverse()-reverse the elements of array.

v)concat().joined two arrays

vi)push()-add element at the end.

vii)pop()-remove element from end

viii)unshift()-add element in the begining.

ix)shift()-remove element from begining

x)splice()-remove element by index position

====================================================================

13)Objects

object is non primitive data type.the object is like other variables.

the only difference is that an object holds multiple values,arrays,functions etc

declarations

i)let obj = new Object();

ii)let obj = {};

example: let user = {

name:"lokesh",

age:25,

language:"JavaScript"

}

How to Access the object properties

i)objectName.propertyName

ii)objectName['propertyName']

=====================================================================

14)Loops
for loop- loops through a block of code a number of times

Loops Traversing-forward

const names = ["lokesh", "kartik", "dhanaji", "ajinkya"];

for (let j = 0; j < names.length; j++) {

console.log(names[j], typeof names[j]);

}

Loops Tarversing Backward

for (let k = names.length - 1; k >= 0; k--) {

console.log(names[k]);

}

while loop - loops through a block of code while a specified condition is true

let a = 0;

while (a < 5) {

console.log(a);

a++;

# }
