'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();
console.log(request.responseText)

request.addEventListener('load',function(){
//  console.log(this.responseText);

 const [data] = JSON.parse(this.responseText);
 console.log(data);

let languages ='';
let currencies= '';
for (let i in data.languages) {
  languages += data.languages[i] + ",";
 
}
for (let j in data.currencies) {
  currencies +=data.currencies[j].name;
}
 const html = `
 <article class="country">
 <img class="country__img" src="${data.flags.svg}" />
 <div class="country__data">
   <h3 class="country__name">${data.name.common}</h3>
   <h4 class="country__region">${data.region}</h4>
   <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M</p>
   <p class="country__row"><span>🗣️</span>${languages}</p>
   <p class="country__row"><span>💰</span>${currencies}</p>

 </div>
</article>
 `
 countriesContainer.insertAdjacentHTML('beforeend',html);
 countriesContainer.style.opacity=1;
})

}

getCountryData('peru');
getCountryData('india');

