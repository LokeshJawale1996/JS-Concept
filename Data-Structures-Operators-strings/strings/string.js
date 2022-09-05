const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2

console.log("B737"[0]); //B

console.log(airline.length); //16
console.log("B737".length); //4

//Methods
//1)indexOf & lastIndexOf
console.log(airline.indexOf("r")); //6
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("Portugal")); //8

//2)slice
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air
console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat!");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSeat("11B"); //You got the middle seat!
checkMiddleSeat("23C"); //You got lucky!
checkMiddleSeat("3E"); //You got the middle seat!

console.log(new String("lokesh")); //[String: 'lokesh']
console.log(typeof new String("lokesh")); //object
console.log(typeof new String("lokesh").slice(1)); //string
