// bb04300e72e2cb4ffbf37b927516c9c3
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Egypt&appid=bb04300e72e2cb4ffbf37b927516c9c3&units=metric

// fetch to data
const apiKey = "bb04300e72e2cb4ffbf37b927516c9c3";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// defult fetch
async function weatherCurrect() {
    const res = await fetch(apiURL + "egypt" + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } 
}
weatherCurrect();


// fetch search
async function checkWeather() {
    const res = await fetch(apiURL + searchBox.value + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } 
    

}

searchBtn.addEventListener("click" , () => {
    checkWeather();
})


// changecolor
const changeColor = document.querySelector('.changecolor');
colors= ["linear-gradient(to right, #232526, #414345)", "linear-gradient(to right, #e6dada, #274046)", "linear-gradient(to right, #3c3b3f, #605c3c)" , "linear-gradient(to right, #457fca, #5691c8)"];
let colorIndex  = 0;

changeColor.addEventListener('click', () => {
  document.body.style.background = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
});

