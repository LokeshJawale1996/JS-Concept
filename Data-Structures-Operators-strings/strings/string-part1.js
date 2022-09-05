const airline = "TAP Air Portugal";

console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
console.log("lokesh".toUpperCase()); //LOKESH
console.log("MAYUR".toLowerCase()); //mayur

//Fix Capitalization in name
const passanger = "loKEsH"; //want :Lokesh
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0] + passangerLower.slice(1);
console.log(passangerCorrect);

//Comparing/Check email
const email = "lokeshjawalejtm@gmail.com";
const loginEmail = " Lokeshjawalejtm@Gmail.Com \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //lokeshjawalejtm@gmail.com

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //lokeshjawalejtm@gmail.com

console.log(email === normalizedEmail); //true

//replacing
const priceGB = "288,97$";
const priceIndia = priceGB.replace("$", "₹").replace(",", ".");
console.log(priceIndia); //288.97₹

const announcement = "All passangers come to boarding door 23.Boarding door 23";
console.log(announcement.replaceAll("door", "gate")); //All passangers come to boarding gate 23.Boarding gate 23
console.log(announcement.replace(/door/g, "gate")); //All passangers come to boarding gate 23.Boarding gate 23

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.includes("Boeing")); //false
console.log(plane.startsWith("Airb")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on Board!");
  } else {
    console.log("Welcome Aboard!");
  }
};

checkBaggage("I have a laptop,some Food and a pocket Knife"); //You are NOT allowed on Board!
checkBaggage("Socks and Camera"); //Welcome Aboard!
checkBaggage("Got some snacks and a gun for protection"); //You are NOT allowed on Board!
