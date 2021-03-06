const requestURL = "/final/json/events.json";

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
  const towns = jsonObject['towns'];
  for (let i = 0; i < towns.length; i++) {
    if (towns[i].name == "Ebbyville") {
      let eBox = document.createElement('section');
      eBox.classList.add("events");
      for (let e = 0; e < towns[i].events.length; e++) {
        let event = document.createElement('p');
        event.textContent = towns[i].events[e];
        eBox.appendChild(event)
        document.getElementById("events-box").appendChild(eBox);
      }
    }
  }
})