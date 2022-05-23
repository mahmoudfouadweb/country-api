'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////

// render errors
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const displayUI = function (data, className = '') {
//   let html = `
//   <div class="${className}">
//    <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h3 class="country__name">${data.nativeName}</h3>
//       <h4 class="country__region">${data.capital}</h4>
//       <p class="country__row"><span>👫</span>${data.population}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name} ${data.currencies[0].symbol}</p>
//     </div>
//   </article>
// </div>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// // json function to make the code more clean
// const getJSON = function (url, msg) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       // make throw new error not  new Error beacuse page not found not failed fetch data
//       // so creating own error to handle the error to display it to the clint
//       throw new Error(`${msg} ${response.status}`);
//     }
//     return response.json();
//   });
// };
// // get country data
// const getCountryData = function (country) {
//   // first country
//   getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     'opps country not found 💩'
//   )
//     .then(data => {
//       displayUI(data[0]);
//       const nighbour = data[0].borders[1];
//       // const nighbour = 'blabla';
//       if (!nighbour) {
//         // make new error not throw new Error beacuse failed fetch data not page not found
//         new Error('no nighbour found');
//       }
//       // second country
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${nighbour}`,
//         'opps country not found 💩'
//       );
//     })
//     .then(data => displayUI(data, 'nighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. try again`);
//     })
//     // after any response status do this
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', e => {
//   getCountryData('uae');
// });
// error page can't fount
// getCountryData('erwwqawq');

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

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// latitude value (width line 😁) and longitude value search based
// const displayUI = function (data, className = '') {
//   let html = `
//     <div class="${className}">
//      <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h3 class="country__name">${data.nativeName}</h3>
//         <h4 class="country__region">${data.capital}</h4>
//         <p class="country__row"><span>👫</span>${data.population}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name} ${data.currencies[0].symbol}</p>
//       </div>
//     </article>
//   </div>
//     `;
//   countriesContainer.style.opacity = 1;
//   return countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// lattitude and longt function
// const whereAmI = function (latt, lng) {
//   return fetch(`https://geocode.xyz/${latt},${lng}?geoit=json`).then(
//     resolve => {
//       console.log(resolve);
//       if (!resolve.ok) {
//         console.log('location not found 💥' + resolve.status);
//       }
//       return resolve
//         .json()
//         .then(data => {
//           console.log(data);
//           if (data?.error?.code) {
//             throw new Error(`please don't repeat your request 🙏`);
//           }
//           console.log(`you are in ${data.city}, ${data.country}`);
//           const countryNested = data.prov;
//           console.log(countryNested);
//           return fetch(`https://restcountries.com/v2/alpha/${countryNested}`)
//             .then(resolve => {
//               if (!resolve.ok) {
//                 new Error('no country found');
//               }
//               return resolve.json();
//             })
//             .then(data => {
//               console.log(data);
//               displayUI(data, 'country');
//               const nighbourNisted = data.borders[1];
//               return fetch(
//                 `https://restcountries.com/v2/alpha/${nighbourNisted}`
//               )
//                 .then(res => res.json())
//                 .then(dataa => {
//                   console.log(dataa);
//                   displayUI(dataa, 'nighbour');
//                 });
//             });
//         })
//         .catch(err => {
//           console.error(`${err.message}, there are wrong here`);
//         });
//     }
//   );
// };
// btn.addEventListener('click', () => {
//   whereAmI(27.0402801, 31.3159209);
// });

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// console.log('getting geolocation');

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(res => {
//   console.log(res);
// });

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const displayUI = function (data, className = '') {
//   let html = `
//     <div class="${className}">
//      <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h3 class="country__name">${data.nativeName}</h3>
//         <h4 class="country__region">${data.capital}</h4>
//         <p class="country__row"><span>👫</span>${data.population}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name} ${data.currencies[0].symbol}</p>
//       </div>
//     </article>
//   </div>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // use 3 api fetch
// const whereAmI = async function () {
//   // get geolocation latitude and longitud
//   const pos = await getPosition();
//   // console.log(pos);
//   const { latitude: lat, longitude: lng } = pos.coords;
//   console.log(lat, lng);
//   // get geolocation result to define a country
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(resGeo);
//   console.log(dataGeo.country);
//   // fetch dedected country
//   const res = await fetch(
//     `https://restcountries.com/v2/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   // dislpay data to UI
//   displayUI(data[0], 'country');
//   console.log(data);
//   // set nighbours
//   const nighbour = await data[0].borders[0];
//   // fetch nighbour data
//   const resNighbour = await fetch(
//     `https://restcountries.com/v2/alpha/${nighbour}`
//   );
//   const dataNighbour = await resNighbour.json();
//   console.log(dataNighbour);
//   displayUI(dataNighbour, 'nighbour');
// };

// btn.addEventListener('click', e => {
//   e.preventDefault();
//   whereAmI();
// });
// const image = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     // const src = imgPath;
//     img.src = imgPath;

//     img.addEventListener('load', () => {
//       image.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(new Error('image not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 is loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 is loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const image = document.querySelector('.images');

const wait = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};

// console.log(wait(2).then(() => console.log('hii')));

// const imgFade = function (path) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = path;
//     image.append(img);
//     img.addEventListener('load', () => {
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject('image not found 💥💥💥');
//     });
//   });
// };
// let globalImg;
// imgFade('img/img-1.jpg')
//   .then(img => {
//     globalImg = img;
//     console.log('image 1 loaded');
//     return wait(4);
//   })
//   .then(() => {
//     console.log('image 1 gone');
//     globalImg.style.display = 'none';
//     console.log('waited 2 seconds');
//     return imgFade('img/img-2.jpgfd');
//   })
//   .then(newImg => {
//     console.log('image 2 loaded');
//     globalImg = newImg;
//     return wait(4);
//   })
//   .then(() => {
//     globalImg.style.display = 'none';
//     console.log('image 2 gone');
//   });

const imgFade = async function (path) {};
