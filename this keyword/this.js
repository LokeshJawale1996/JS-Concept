console.log(this);

const calAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); //not pointing to global
};
calAge(1996);

const calgAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); //pointing to global
};
calgAgeArrow(1996);

const lokesh = {
  name: "Lokesh",
  birthYear: 1996,
  calAge: function () {
    console.log(this);
    return console.log(2022 - this.birthYear);
  },
};
lokesh.calAge();

const mayur = {
  birthYear: 1997,
};

mayur.calAge = lokesh.calAge;
mayur.calAge();
