const requestURL = "/final/json/business.json";

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
  const business = jsonObject['business'];
  for (let i = 0; i < business.length; i++) {
      
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let type = document.createElement('p');
        let website = document.createElement('p');
        let yearFounded = document.createElement('p');
        let details = document.createElement('div');
      
        name.textContent = business[i].name;
        
        
        name.textContent = 'Business Name: ' + business[i].name;
        website.textContent = 'Website: ' + business[i].Website;
        type.textContent = 'Business info: ' + business[i].type;
        yearFounded.textContent = 'Year Founded: ' + business[i].yearFounded;
        
        image.setAttribute('src', 'images/logos/' + business[i].photo);
        image.setAttribute('alt', business[i].name);
        
        details.setAttribute('id', 'details');
        
        card.appendChild(details);
        card.appendChild(image);
        
        details.appendChild(name);
        details.appendChild(type);
        
        details.appendChild(website);
        details.appendChild(type);

        
        document.querySelector('div.cards').appendChild(card);
      
   }

  });