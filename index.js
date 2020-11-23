

const request = fetch('http://restcountries.eu/rest/v2/name/portugal');

console.log(request);

//consuming promises

const getCountryData = function (country) {
  fetch(`http://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data[0].capital);
      console.log(data[0].population);
    })
}

getCountryData('canada');
//comment watch  247 chaining promises again