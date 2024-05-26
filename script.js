// script.js
function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = 'fcda668f0b6985151712ad8bdfe1676a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            document.getElementById('weatherInfo').innerHTML = 'Sorry, we encountered an issue while fetching weather data. Please try again later.';
        });
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');

    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    weatherInfo.innerHTML = `
        <h2>Current Weather</h2>
        <img src="${iconUrl}" class="weather-icon" alt="Weather Icon">
        <p><strong>Location:</strong> ${weatherData.name}, ${weatherData.sys.country}</p>
        <p><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
        <div class="weather-details">
            <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
            <p><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</p>
            <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
        </div>
    `;
}
