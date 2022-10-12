const base_url = 'http://api.weatherapi.com/v1';
const KEY = '4202b3fa59ea4adf832162138221110';
const container = document.querySelector('.list');
const form = document.querySelector('form');
const cityName = document.querySelector('.city');

form.addEventListener('submit', searchWeather);

function searchWeather(e) {
  e.preventDefault();
  const { city, days } = e.currentTarget.elements;

  const params = new URLSearchParams({
    key: KEY,
    q: city.value,
    days: days.value,
  });
  const resp = fetch(`${base_url}/forecast.json?${params}`);
  //   const resp = fetch(
  //     `${base_url}/forecast.json?key=${KEY}&q=${city.value}&days=${days.value}`
  //   );
  resp
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      const markup = createMarkup(data.forecast.forecastday);
      cityName.textContent = data.location.name;
      container.innerHTML = markup;
    })
    .catch(err => console.log(err));
}

function createMarkup(arr) {
  return arr
    .map(
      item => `<li>
        <h2>Дата: ${item.date}</h2>
        <img src="${item.day.condition.icon}" alt="${item.day.condition.text}" />
        <p>${item.day.condition.text}</p>
        <h3>Середня температура: ${item.day.avgtemp_c}</h3>
      </li>`
    )
    .join('');
}
