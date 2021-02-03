function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide")
}

function getFullYear() {
  document.write(new Date().getFullYear());
}

function lastUpdated() {
  document.getElementById("lastupdated").textContent = "Last Updated: " + document.lastModified;
}