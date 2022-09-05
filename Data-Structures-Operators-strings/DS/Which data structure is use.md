<h1>Which Data structure to use</h1>

<h2>A)Data is coming from with Three ways</h2>
<h4>i)program itself</h4>
<h4>ii)From UI</h4>
<h4>iii)from external source like web API</h4>

<h4>for simple list use arrays and sets</h4>
<h4>for key value pair data use Maps(key allows us to describe value)</h4>

<h2>B)ARRAYS VS SETS</h2>
<h3>Arrays</h3>
<h4>i)Use when yo need ordered list of values(might contain duplicates)</h4>
<h4>ii)Use when you need to manipulate data</h4>

tasks = ["Code","Eat",Code"];

<h3>SETS</h3>
<h4>i)Use when you neeed to work with unique values.</h4>
<h4>ii)Use when high-performance is really important.</h4>
<h4>iii)Use to remove duplicates from arrays.</h4>

tasks = ["Code","Eat",Code"];

<h2>C)OBJECTS VS MAPS</h2>
<h3>OBJECTS</h3>

Example
const task = {
task: 'Code',
date: 'Today',
repeat: true,
};

<h4>i)More 'traditional' Key/Value Store("abused" objects)</h4>
<h4>ii)Easier to write and access values with. and []</h4>

<h3>MAPS</h3>

Example:
const tasks = new Map([
['task', 'Code'],
['date', 'Today'],
[false, 'start coding!'],
]);

<h4>i)Better Performance</h4>
<h4>ii)Keys can have any data type</h4>
<h4>iii)Easy to iterate</h4>
<h4>iv)Easy to iterate</h4>
