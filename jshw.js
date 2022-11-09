// import './css/styles.css';
import { fetchCountries } from './fetchCountries';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

// const DEBOUNCE_DELAY = 500;
const DEBOUNCE_DELAY = 300;

const base_url = `https://restcountries.com/v3.1/name`;
const container = document.querySelector('.country-list');
const inputForm = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');

inputForm.addEventListener('input', debounce(onFormInput, DEBOUNCE_DELAY));

function onFormInput(e) {
  e.preventDefault();
  //   const { value } = e.target;
  // console.log(value);
  let countryName = inputForm.value.trim();
  let final_url = `${base_url}/${countryName}`;
  // console.log(countryName);

  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].value = '';
  }

  fetch(final_url)
    .then(response => response.json())
    .then(item => {
      item.map(
        item =>
          (countryInfo.innerHTML = `<div class="country-header">
      <img class="country-img" src="${item.flags.svg}" alt="${
            item.name.official
          }" width="40"/>
      <h1 class="country-name">${item.name.official}</h1></div>
          <div class="country-details">
        <p class="country-capital"><span>Capital: </span>${item.capital}</p>
        <p class="country-population"><span>Population: </span>${
          item.population
        }</p>
        <p class="country-languages"><span>Languages: </span>${Object.values(
          item.languages
        )
          .toString()
          .split(',')
          .join(', ')}</p>
          </div>`)
      );
    })

    // .catch(() => {
    //     Notiflix.Notify.failure('Oops, there is no country with that name');
    //   }
    // Notiflix.Notify.info(
    //   'Too many matches found. Please enter a more specific name.'
    // );
    .catch(err => console.log(err));
  // .catch(err =>
  //   Notiflix.Notify.failure('Oops, there is no country with that name')
  // );
}
