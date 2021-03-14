//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5783695&appid=647deaef50861934976f3e67d4453af9&units=imperial";
const apiURL2 = "//api.openweathermap.org/data/2.5/forecast?id=5783695&appid=647deaef50861934976f3e67d4453af9&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML =weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    //console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    //console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function


const mydate = new Date();
const todayDayNumber = mydate.getDay();


console.log(forecastDayNumber);
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
console.log(myweekday[6]);


fetch(apiURL2)
.then((response) => response.json())
.then((forcastInfo) => {
  //Once it comes back, display it to the console.
  //console.log(forcastInfo);
  //console.log(forcastInfo.city.name);

  //document.getElementById('townName').innerHTML = forcastInfo.city.name;
  let forecastDayNumber = todayDayNumber;
  //console.log(todayDayNumber);

  // Creates a Table 3 rows by 5 columns

  let day = document.createElement("table");
  let tr_1 = document.createElement("tr")
  let tr_2 = document.createElement("tr")
  let tr_3 = document.createElement("tr")

  //Loop through the json data
  for (i = 0; i < forcastInfo.list.length; i++ ) {
    let time = forcastInfo[i].dt_txt;

    if (time.includes('18:00:00')){
      forecastDayNumber +=1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
      // Create the Day Name HTML
      let dayName = document.createElement("th");
      dayName.textContent = weekday[forecastDayNumber];
      tr_1.appendChild(dayName);

      // Create the Image HTML
      let ibox = document.createElement("td");
      let iconcode2 = forcastInfo.list[i].weather[0].icon;
      let iconPath = "//openweathermap.org/img/w/" + iconcode2 + ".png";
      let icon = document.createElement("img");
      icon.src = iconPath;
      ibox = appendChild(icon);
      tr_2.appendChild(box);

      // Create the Temp HTML
      let temp = document.createElement("td");
      temp.textContent = forcastInfo.list[i].main.temp + "\xB0";
      tr_3.appendChild(temp);

      day.appendChild(tr_1);
      day.appendChild(tr_2);
      day.appendChild(tr_3);

      document.getElementById('five-day').appendChild(day);

    }
  }
});

