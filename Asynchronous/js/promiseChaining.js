'use strict';

// Promise Chaining and Error Handling

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////
const renderCountry = function (data, className = '') {
  let languages = '';
  let currencies = '';
  for (let i in data.languages) {
    languages += data.languages[i] + ',';
  }
  for (let j in data.currencies) {
    currencies += data.currencies[j].name;
  }
  const html = `
 <article class="country ${className}">
 <img class="country__img" src="${data.flags.svg}" />
 <div class="country__data">
   <h3 class="country__name">${data.name.common}</h3>
   <h4 class="country__region">${data.region}</h4>
   <p class="country__row"><span>👫</span>${(
     +data.population / 1000000
   ).toFixed(1)} M</p>
   <p class="country__row"><span>🗣️</span>${languages}</p>
   <p class="country__row"><span>💰</span>${currencies}</p>

 </div>
</article>
 `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////////////
const renderError = function(msg){
  countriesContainer.insertAdjacentHTML('beforeend',msg);
  countriesContainer.style.opacity =1;
}

//////////////////////////////////////////////

const getJSON = function(url,errorMsg='Something went wrong!'){
 return  fetch(url).then(response => {
    if(!response.ok)
    throw new Error(`${errorMsg} (${response.status}))`);
    return response.json();
  });
};


////////////////////////////////////////
// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if(!response.ok)
//       throw new Error(`Country not found (${response.status})`)
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       // const neighbour = data[0].borders[0];
//       const neighbour ='dfdhdjj'
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if(!response.ok)
//       throw new Error(`Country not found (${response.status})`)
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//     renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;

//     })
// };

const getCountryData = function(country){
  getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country Not found')
  .then(data => {
    renderCountry(data[0]);
    const neighbour = data[0].borders[0];
    // const neighbour = 'hajajs';
     
    if (!neighbour) throw new Error("No neighbour Found");

    //country 2
     
    return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,
    'Country Not found'
    )
  })
  .then(data => renderCountry(data, 'neighbour'))
  .catch(err => {
      console.Error(`${err}`);
      renderError(`Something went wrong ${err.message}.Try Again !`);
    })
    .finally(() => {
      countriesContainer.style.opacity =1;
    })
}

btn.addEventListener('click',function(){
  getCountryData('india');

})
// getCountryData('jjsdjdhd')