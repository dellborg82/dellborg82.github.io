

const d = new Date();
//console.log(d);

const todayDayNumber = d.getDay();
//console.log(todayDayNumber);

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

//console.log(weekday[todayDayNumber]);

const apiURL2 = "//api.openweathermap.org/data/2.5/forecast?id=5783695&appid=647deaef50861934976f3e67d4453af9&units=imperial";

fetch(apiURL2)
    .then((response) => response.json())
    .then((forecastInfo) => {
    console.log(forecastInfo);

    //document.getElementById("townName").textContent = forecastInfo.city.name;

    let forecastDayNumber = todayDayNumber;
    //console.log(forecastDayNumber);

    //Create a Table & 3 Table Rows:
    let day = document.createElement("table");
    let tr_1 = document.createElement("tr");
    let tr_2 = document.createElement("tr");
    let tr_3 = document.createElement("tr");

        for (i = 0; i < forecastInfo.list.length; i++) {
            var time = forecastInfo.list[i].dt_txt;

            if (time.includes('18:00:00')){
                
                forecastDayNumber += 1;
                if (forecastDayNumber === 7){
                    forecastDayNumber = 0;
                }

                //Day Name:
                let theDayName = document.createElement("th");
                theDayName.textContent = weekday[forecastDayNumber];
                tr_1.appendChild(theDayName);

                //Img:
                let ibox = document.createElement("td");
                let iconcode = forecastInfo.list[i].weather[0].icon;
                let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                ibox.appendChild(theIcon);
                tr_2.appendChild(ibox);

                //Temp:
                let theTemp = document.createElement("td");
                theTemp.textContent =  Math.round(forecastInfo.list[i].main.temp) + "\xB0";
                tr_3.appendChild(theTemp);

                day.appendChild(tr_1);
                day.appendChild(tr_2);
                day.appendChild(tr_3);

                document.getElementById('five-day').appendChild(day);

            }
        }
    });

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
        document.getElementById('speed').textContent = Math.round(weatherInfo.wind.speed);

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
