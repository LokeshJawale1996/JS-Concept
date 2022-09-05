<h1>Which Data structure to use</h1>

<h2>A)Data is coming from with Three ways</h2>
i)program itself
ii)From UI
iii)from external source like web API

for simple list use arrays and sets

for key value pair data use Maps(key allows us to describe value)

<h2>B)ARRAYS VS SETS</h2>
<h3>Arrays</h3>
i)Use when yo need ordered list of values(might contain duplicates)
ii)Use when you need to manipulate data

tasks = ["Code","Eat",Code"];

<h3>SETS</h3>
i)Use when you neeed to work with unique values.
ii)Use when high-performance is really important.
iii)Use to remove duplicates from arrays.

tasks = ["Code","Eat",Code"];

<h2>C)OBJECTS VS MAPS</h2>
<h3>OBJECTS</h3>

Example
const task = {
task: 'Code',
date: 'Today',
repeat: true,
};

i)More 'traditional' Key/Value Store("abused" objects)
ii)Easier to write and access values with. and []

<h3>MAPS</h3>

Example:
const tasks = new Map([
['task', 'Code'],
['date', 'Today'],
[false, 'start coding!'],
]);

i)Better Performance
ii)Keys can have any data type
iii)Easy to iterate
iv)Easy to iterate
