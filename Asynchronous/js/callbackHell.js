'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////
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
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX Call Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //Render Country 1
    renderCountry(data);

    //Get Neighbour Country
    const [neighbour] = data.borders;
    if (!neighbour) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      // console.log(this.responseText)
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');
