// Get Temp number in the Console
const tempNumber = parseFloat(document.getElementById("temp").textContent);

//Get Wind Speed
const speedNumber = parseFloat(document.getElementById("speed").textContent);

//calculate Wind Chill
let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windChill = Math.round(windChill);

// If Wind Chill exists Display Wind Chill, Else Display No Wind Chill today
if (tempNumber <= 50 && speedNumber > 3) {
  document.getElementById("chill").textContent = "Wind Chill is " + windChill + "\xB0F";
} else {
  document.getElementById("chill").textContent = "No Wind Chill Today"
}