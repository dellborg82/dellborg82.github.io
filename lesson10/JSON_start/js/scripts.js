//ADD the key and change units to imperial
const apiURL = ""

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((changeme) => {
    //Once it comes back, display it to the console.
    console.log(changeme);
    
    

 }); //end of "then" fat arrow function



