

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

const apiURL2 = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=647deaef50861934976f3e67d4453af9&units=imperial";

fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    console.log(weatherInfo);

    //document.getElementById("townName").textContent = weatherInfo.city.name;

    let forecastDayNumber = todayDayNumber;
    //console.log(forecastDayNumber);

    //Create a Table & 3 Table Rows:
    let theDay = document.createElement("table");
    let tr_1 = document.createElement("tr");
    let tr_2 = document.createElement("tr");
    let tr_3 = document.createElement("tr");

        for (i = 0; i < weatherInfo.list.length; i++) {
            var time = weatherInfo.list[i].dt_txt;

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
                let iconbox = document.createElement("td");
                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                iconbox.appendChild(theIcon);
                tr_2.appendChild(iconbox);

                //Temp:
                let theTemp = document.createElement("td");
                theTemp.textContent =  Math.round(weatherInfo.list[i].main.temp) + "\xB0";
                tr_3.appendChild(theTemp);

                theDay.appendChild(tr_1);
                theDay.appendChild(tr_2);
                theDay.appendChild(tr_3);

                document.getElementById('five-day').appendChild(theDay);

            }
        }
    });