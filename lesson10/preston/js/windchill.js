const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5783695&appid=647deaef50861934976f3e67d4453af9&units=imperial";


fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        //console.log(weatherInfo)
        document.getElementById('currconditions').innerHTML=weatherInfo.weather[0].description;
        document.getElementById('current-temp').textContent = Math.round(weatherInfo.main.temp);
        document.getElementById('temp-max').textContent = Math.round(weatherInfo.main.temp_max);
        document.getElementById('temp-low').textContent = Math.round(weatherInfo.main.temp_min);
        document.getElementById('humidity').textContent = weatherInfo.main.humidity;
        document.getElementById('speed').textContent = weatherInfo.wind.speed;

        let temperature = parseFloat(document.getElementById('current-temp').innerHTML);
        let speed = parseFloat(document.getElementById('speed').innerHTML);

        let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temperature * Math.pow(speed, 0.16));

        if (temperature <= 50 && speed > 3) {

            document.getElementById('chill').innerHTML = Math.round(windchill);
          } else {
      
            windchill = "N/A";
          }
    });
