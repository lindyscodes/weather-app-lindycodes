function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function displayWeatherCondition(response) {
    document.querySelector("#initialCity").innerHTML = response.data.name;
    document.querySelector(".local-temp-in-time").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#conditions").innerHTML =
      response.data.weather[0].main;
    let weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", response.data.weather[0].description);
    celcTemp = response.data.main.temp;
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "ec0ac52f1b5471e4ffa6db3719c4826e";
    let apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiWeatherURL).then(displayWeatherCondition);
  }
  
  function searchCity(city) {
    let apiKey = "ec0ac52f1b5471e4ffa6db3719c4826e";
    let apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiWeatherURL).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-your-city").value;
    searchCity(city);
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
 
 function displayFTemperature(event) {
  event.preventDefault();
  let fahrTemps = (celcTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#main-temperature");
  temperatureElement.innerHTML = Math.round(fahrTemps);
 }

 function displayFTemperature(event) {
  event.preventDefault();
  let fahrTemps = (celcTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#main-temperature");
  temperatureElement.innerHTML = Math.round(fahrTemps);
 }

 function displayCTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#main-temperature");
  temperatureElement.innerHTML = Math.round(celcTemp);
 }
 
 let celcTemp = null;
 
  searchCity("San Francisco");

let fahrLink = document.querySelector("#f-link");
fahrLink.addEventListener("click", displayFTemperature)

let celcsLink = document.querySelector("#c-link");
celcsLink.addEventListener("click", displayCTemperature)