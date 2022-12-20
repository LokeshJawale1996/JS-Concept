document.body.style.background = "red";
// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

const btn = document.querySelector(".goTo")

const goToGoogle = () => {
    console.log("btn clicked!")
    if (confirm("Go to Google?")) {
  location.href = "https://www.google.com/"; // redirect the browser to another URL
}
}


// DOM (Document Object Model)
// The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

// The document object is the main “entry point” to the page. We can change or create anything on the page using it.


// BOM (Browser Object Model)

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.