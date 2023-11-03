
const Api_key = "a0e78d3b449db7059df0a38abd3952f8"
const form = document.querySelector('form')
const search = document.querySelector('#city-input')
const weather = document.querySelector('.output-wrapper')

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_key}`

const getweather = async (city) => {
    weather.style.display = "block"
    weather.innerHTML = `<h1> Loading ... </h1>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_key}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h1>City Not Found</h1>
        <img src='./images/error-404.png' style="scale:0.6; width :46%;margin-left:110px">`
        document.body.style.background = "linear-gradient(to right, #8e2de2, #4a00e0)";
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    weather.innerHTML = `
    <div class="weatherIcon">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
    </div>
    <div class="temp">
        <span id="temp">${data.main.temp} °C</span>
        <p class="desc"> ${data.weather[0].description} </p>
    </div>
    <div class="details-container">
        <div class="details">
            <span id="temp_min">Min : ${data.main.temp_min} °C</span>
            <span id="temp_max">Max : ${data.main.temp_max} °C</span>
        </div>
        <div class="details">
            <span id="humidity">Humidity : ${data.main.humidity} %</span>
            <span id="wind">Wind : ${data.wind.speed} km/hr</span>
        </div>
    </div>
    `


    if (data.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = `url("./images/clear\ sky.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].description == 'few clouds') {
        document.body.style.backgroundImage = `url("./images/few\ clouds.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].description == 'scattered clouds') {
        document.body.style.backgroundImage = `url("./images/scattered\ clouds.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }

    if ((data.weather[0].description == 'broken clouds') || (data.weather[0].description == 'overcast clouds')) {
        document.body.style.backgroundImage = `url("./images/broken\ clouds.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].main == 'Drizzle') {
        document.body.style.backgroundImage = `url("./images/shower\ rain.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].main == 'Rain') {
        document.body.style.backgroundImage = `url("./images/rain.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].main == 'Thunderstorm') {
        document.body.style.backgroundImage = `url("./images/Thunderstorm.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].main == 'Snow') {
        document.body.style.backgroundImage = `url("./images/snow.avif")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
    if (data.weather[0].main == 'Haze' || 'Smoke' || 'Mist' || 'Fog' || 'Dust' || 'Sand' || 'Ash' || 'Squall' || 'Tornado') {
        document.body.style.backgroundImage = `url("./images/mist.jpg")`
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'cover'
        return;
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault()
    getweather(search.value)
})

