'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// render errors
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const displayUI = function (data, className = '') {
  // console.log(data);
  let html = `
  <div class="${className}">
   <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h3 class="country__name">${data.nativeName}</h3>
      <h4 class="country__region">${data.capital}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name} ${data.currencies[0].symbol}</p>
    </div>
  </article>
</div>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// get Country Data
const getCountryData = function (country) {
  // first country
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      displayUI(data[0]);
      const nighbour = data[0].borders[1];
      if (!nighbour) return;
      // second country
      return fetch(`https://restcountries.com/v2/alpha/${nighbour}`);
    })
    .then(res => res.json())
    .then(data => displayUI(data, 'nighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', e => {
  // e.preventDefault();
  getCountryData('egypt');
});
getCountryData('erwwqawq');
