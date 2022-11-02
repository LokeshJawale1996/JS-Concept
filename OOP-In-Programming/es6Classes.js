'use strict';

//class expression
//  const PersonCl = class {}

 //class declaration
 class PersonCl {
    constructor(fullName,birthYear){
        this.fullName= fullName;
        this.birthYear= birthYear;

    }
    //Instance Method
   //methods will be added to .prototype property
    calAge(){
        console.log(2022-this.birthYear);
    }
    get age(){
        return 2022- this.birthYear;
    }
    //Set property that already exits
    set fullName(name){
        console.log(name);
       if(name.includes('')) this._fullName=name;
        else akert(`${name} is not a full name!`);

    }
    get fullName(){
        return this._fullName;
    }

    //static methods
    static hey(){
        console.log("Hey there!");
        console.log(this)
    }

 }

 const loki = new PersonCl("Lokesh Jawale",1996);
 console.log(loki);
 loki.calAge();//26
 console.log(loki.age);//26


console.log(loki.__proto__===PersonCl.prototype);//true

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.fullName}`);
}
loki.greet();
//Hey Lokesh

//1.Classes are NOT hoisted
//2.Class are first-class citizes
//3.Classes are executed in strict mode.

//Getters and Setters

const kaushal = new PersonCl("Kaushal Jawale",1997);

PersonCl.hey();
const account = {

    owner:"Lokesh",
    movements:[200,350,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
};

console.log(account.latest);//300
account.latest= 50;
console.log(account.movements);
//[200, 350, 120, 300, 50]

//Object.create

const PersonProto= {
    calAge(){
        console.log(2022-this.birthYear)
    }
}

const stevan = Object.create(PersonProto);
console.log(stevan);
stevan.name= 'Stevan';
stevan.birthYear=2002;
stevan.calAge();