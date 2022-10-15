'use strict';

const searchField = document.querySelector('.search');
const searchFieldValue = searchField.value;

let countryName;
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      console.log(country);
      countryName = country.name.common;
      document.querySelector('.country-cards_container').innerHTML += `
        <div class="card">
          <div class='card-image'>
            <img
              src= ${country.flags.svg}
              lt='${"The country's Flag"}'
            />
          </div>
          <div class="card-content">
            <h3 class="country-name">${country.name.common}</h3>
            <p>Population: 
              <span class="population">${country.population}</span>
            </p>
            <p>Region: 
              <span class="region">${country.region}</span>
            </p>
            <p>Capital: 
              <span class="capital">${country.capital}</span>
            </p>
          </div>
        </div>
      `;
    });
  });

const filterCard = function () {};
searchField.addEventListener('input', filterCard);