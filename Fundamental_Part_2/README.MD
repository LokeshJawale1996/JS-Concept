Key Notes

1)functions

it is a block of code designed to perform a particular tasks

it is executed when something invokes it.

====================================

2)function declarations and expressions

i)function declaration must be design with function

ii)function expression must be stored in variable

===================================

3)Arrow functions

it is complete alternative to the functional expression

const calSum = (a,b) => {

return a * b;

}

===================================

4)Arrays

Arrays are objects in which we can store multiple values in a single variable.

declarations

i)let arr = new Array();

ii)let arr =  [];

==================================

5)Arrays Methods

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

=================================

6)Objects

object is non primitive data type.the object is like other variables.

the only difference is that an object holds multiple values,arrays,functions etc

declarations

i)let obj = new Object();

ii)let obj =  {};

example: let user = {

name:"lokesh",

age:25,

language:"JavaScript"

}

How to Access the object properties

i)objectName.propertyName

ii)objectName['propertyName']

===============================

7)for loop-  loops through a block of code a number of times

==============================

8)Loops Traversing-forward

const names = ["lokesh", "kartik", "dhanaji", "ajinkya"];

for (let j = 0; j < names.length; j++) {

  console.log(names[j], typeof names[j]);
  
}



==============================

9)Loops Tarversing Backward

for (let k = names.length - 1; k >= 0; k--) {

  console.log(names[k]);
  
}

==============================

10. while loop - loops through a block of code while a specified condition is true

let a = 0;

while (a < 5) {

  console.log(a);
  
  a++;
  
}
