function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide")
}

function getFullYear() {
  document.write(new Date().getFullYear());
}

function lastUpdated() {
  document.getElementById("lastupdated").textContent = "Last Updated: " + document.lastModified;
}

function getCurrentDate() {
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
  const todaysDate = new Date();
  const dayOfWeek = dayNames[todaysDate.getDay()];
  const monthName = months[todaysDate.getMonth()];
  const year = todaysDate.getFullYear();
  const currentDate = dayOfWeek + " " + " " + monthName + " " + todaysDate.getDate() + ", " + year;
  const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  document.getElementById("currentDate").textContent = currentDate;
}

function isFriday() {
const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("special-note");
if (dayNumber == 5) {
    element.classList.add("show-special");
} else {
    element.classList.add("hide-special");
}
}

function font() {
WebFont.load({
  google: {
    families: ["Righteous", "cursive"],
  },
});
}
