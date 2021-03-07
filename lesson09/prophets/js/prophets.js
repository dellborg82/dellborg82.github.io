const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    // select output location
    const cards = document.querySelector(".cards");

    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let numOfChildren = document.createElement("p");
      let deathDate = document.createElement("p");
      // let order = document.createElement('p');
      let image = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
      numOfChildren.textContent =
        "Number of Children: " + prophets[i].numofchildren;
      deathDate.textContent = "Date of Death: " + prophets[i].death;
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute(
        "alt",
        `${prophets[i].name} who was born in ${
          prophets[i].birthplace
        } in the year 
      ${prophets[i].birthdate.substring(prophets[i].birthdate.length - 4)}!`
      );

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(numOfChildren);
      card.appendChild(deathDate);

      document.querySelector("div.cards").appendChild(card);
    }
  });
