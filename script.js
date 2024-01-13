function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weatherDescription');
    const weatherIcon = document.getElementById('weatherIcon');

    // Fetch weather data from the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=76c12dee28e89d6c1aaed926ee1f8341&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconCode = data.weather[0].icon;

            // Display weather information
            
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
            weatherIcon.className = 'fas fa-cloud-sun-rain'; // Display a default icon for error
            weatherIcon.style.color = '#2C3E50'; // Set a default color

        });

    }

    // Function to fetch weather updates from an API
async function fetchWeatherUpdates() {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for weather updates
      const response = await fetch('/v1/forecas');
      const data = await response.json();
  
      // Assuming the API returns an array of weather updates
      const weatherUpdates = data.updates;
  
      // Display the updates in a loop
      let index = 0;
      setInterval(() => {
        document.getElementById('weatherUpdates').textContent = weatherUpdates[index];
        index = (index + 1) % weatherUpdates.length;
      }, 3000); // Change the interval (in milliseconds) as needed
    } catch (error) {
      console.error('Error fetching weather updates:', error);
    }
  }
  
  // Call the function to initiate the loop
  // fetchWeatherUpdates();

//   const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
// const apiKey = '76c12dee28e89d6c1aaed926ee1f8341'; // Replace with your actual API key

// const city = 'New York';
// const apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the data received from the API
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Error fetching data:', error);
//   });
  

function submitFeedbackAndReload(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Here, you can add code to process the feedback if needed
  // For now, we'll just reload the page
  location.reload();
}