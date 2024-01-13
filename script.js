function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weatherDescription');
    const weatherIcon = document.getElementById('weatherIcon');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=76c12dee28e89d6c1aaed926ee1f8341&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconCode = data.weather[0].icon;

            
            weatherInfo.innerHTML = `
                <p>Location: ${locationInput.value}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description}</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;
        })

        .catch(error => {
            console.error('Error fetching weather data:', error);
            location.innerHTML = '';
            temperature.innerHTML = '';
            weatherDescription.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
            weatherIcon.className = 'fas fa-cloud-sun-rain'; 
            weatherIcon.style.color = '#2C3E50'; 

        });

    }

