//split and join
console.log("a+very+nice+string".split("+")); //[ 'a', 'very', 'nice', 'string' ]
console.log("Lokesh Jawale".split(" ")); //[ 'Lokesh', 'Jawale' ]

const [firstName, lastName] = "Lokesh Jawale".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //Mr. Lokesh Jawale

const CapitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
CapitalizeName("Jessica and lokesh jawale"); //Jessica And Lokesh Jawale
CapitalizeName("mayur warade"); //Mayur Warade

//padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+")); //+++++++++++Go to gate 23!+++++
console.log("lokesh".padStart(23, "+").padEnd(30, "+")); //+++++++++++++++++lokesh+++++++

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(66272637)); //****2637
console.log(maskCreditCard(2500889298886)); //*********8886
console.log(maskCreditCard("26663677282999929")); //*************9929

//Repeat
const message2 = "Bad weather... All Departues Delayed...";
console.log(message2.repeat(5)); ////to repeat 5 times

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩 ".repeat(n)}`);
};
planesInLine(4); //There are 4 planes in line 🛩 🛩 🛩 🛩
planesInLine(6); //There are 4 planes in line 🛩 🛩 🛩 🛩 🛩 🛩
