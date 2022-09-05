<h1>Which Data structure to use</h1>

<h2>A)Data is coming from with Three ways</h2>
<h5>i)program itself</h5>
<h5>ii)From UI</h5>
<h5>iii)from external source like web API</h5>

<h4>for simple list use arrays and sets</h4>
<h4>for key value pair data use Maps(key allows us to describe value)</h4>

<h2>B)ARRAYS VS SETS</h2>
<h3>Arrays</h3>
<h5>i)Use when yo need ordered list of values(might contain duplicates)</h5>
<h5>ii)Use when you need to manipulate data</h5>

tasks = ["Code","Eat",Code"];

<h3>SETS</h3>
<h5>i)Use when you neeed to work with unique values.</h5>
<h5>ii)Use when high-performance is really important.</h5>
<h5>iii)Use to remove duplicates from arrays.</h5>

tasks = ["Code","Eat",Code"];

<h2>C)OBJECTS VS MAPS</h2>
<h3>OBJECTS</h3>

Example
const task = {
task: 'Code',
date: 'Today',
repeat: true,
};

<h5>i)More 'traditional' Key/Value Store("abused" objects)</h5>
<h5>ii)Easier to write and access values with. and []</h5>

<h3>MAPS</h3>

Example:
const tasks = new Map([
['task', 'Code'],
['date', 'Today'],
[false, 'start coding!'],
]);

<h5>i)Better Performance</h5>
<h5>ii)Keys can have any data type</h5>
<h5>iii)Easy to iterate</h5>
<h5>iv)Easy to iterate</h5>
