const num = 3889899.56;

const options = {
  style: "unit",
  unit: "celsius",
  currency: "EUR",
};
console.log("US:       ", new Intl.NumberFormat("en-US", options).format(num));
//US:        3,889,899.56 mph

console.log("Germany:  ", new Intl.NumberFormat("de-DE", options).format(num));
//Germany:   3.889.899,56 mi/h

console.log("Syria:    ", new Intl.NumberFormat("en-US", options).format(num));
//Syria:     3,889,899.56 mph

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
