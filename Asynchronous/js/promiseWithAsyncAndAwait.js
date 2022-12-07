// Consuming Promises with Async/Await
// Error Handling With try...catch


/////////////////////////////////////
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



//////////////////////////////////////////
const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
  
  const whereAmI = async function () {
    try {
      // Geolocation
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
  
      // Reverse geocoding
      const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
  
      const dataGeo = await resGeo.json();
      console.log(dataGeo);
  
      // Country data
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
      );
      
      // BUG in video:
      // if (!resGeo.ok) throw new Error('Problem getting country');
      
      // FIX:
      if (!res.ok) throw new Error('Problem getting country');
  
      const data = await res.json();
      console.log(data);
      renderCountry(data[0]);
    } catch (err) {
      console.error(`${err} 💥`);
      renderError(`💥 ${err.message}`);
    }
  };
  whereAmI();
  whereAmI();
  whereAmI();
  console.log('FIRST');