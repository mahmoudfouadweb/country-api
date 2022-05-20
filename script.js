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
// const getCountryData = function (country) {
//   // first country
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('opps country not found 💩');
//       }
//       return response.json();
//     })
//     .then(data => {
//       displayUI(data[0]);
//       // const nighbour = data[0].borders[1];
//       const nighbour = 'blabla';
//       if (!nighbour) return;
//       // second country
//       return fetch(`https://restcountries.com/v2/alpha/${nighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('opps country not found 💩');
//       }
//       return response.json();
//     })
//     .then(data => displayUI(data, 'nighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', e => {
//   // e.preventDefault();
//   getCountryData('egypt');
// });

// json function to make the code more clean
const getJSON = function (url, msg) {
  return fetch(url).then(response => {
    if (!response.ok) {
      // make throw new error not  new Error beacuse page not found not failed fetch data
      // so creating own error to handle the error to display it to the clint
      throw new Error(`${msg} ${response.status}`);
    }
    return response.json();
  });
};
// get country data
const getCountryData = function (country) {
  // first country
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'opps country not found 💩'
  )
    .then(data => {
      displayUI(data[0]);
      // const nighbour = data[0].borders[1];
      const nighbour = 'blabla';
      if (!nighbour) {
        // make new error not throw new Error beacuse failed fetch data not page not found
        new Error('no nighbour found');
      }
      // second country
      return getJSON(
        `https://restcountries.com/v2/alpha/${nighbour}`,
        'opps country not found 💩'
      );
    })
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
  getCountryData('egypt');
});

// getCountryData('erwwqawq');
