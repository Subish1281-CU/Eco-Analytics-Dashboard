var entryCount = 0;

document.getElementById("calc-btn").addEventListener("click", function() {

var elecInput = document.getElementById("inp-elec");
var elec = parseInt(elecInput.value);

var waterInput = document.getElementById("inp-water");
var water = parseInt(waterInput.value);

  if (isNaN(elec) || isNaN(water)) {
    alert("Please enter both electricity and water values!");
    return;
  }

  var carbon = Math.round(elec * 0.85 + water * 0.001);

  document.getElementById("elec-display").textContent = elec;
  document.getElementById("water-display").textContent = water;
  document.getElementById("carbon-display").textContent = carbon;

  var statusMsg = document.getElementById("status-msg");

  if (carbon < 80) {
    statusMsg.textContent = "Low carbon footprint";
    statusMsg.style.color = "green";
  } 
  else if (carbon < 150) {
    statusMsg.textContent = "Moderate carbon footprint";
    statusMsg.style.color = "orange";
  } 
  else {
    statusMsg.textContent = "High carbon footprint";
    statusMsg.style.color = "red";
  }

  var summary = document.getElementById("daily-summary");

  summary.innerHTML =
    "Electricity: " + elec + " kWh<br>" +
    "Water: " + water + " L<br>" +
    "Carbon: " + carbon + " kg";

  entryCount = entryCount + 1;

  var today = new Date();
  var dateText = today.toDateString();

  var newEntry = document.createElement("p");

  newEntry.className = "log-entry";

  newEntry.innerHTML =
    "Entry " + entryCount + " - " + dateText +
    " | Elec: " + elec +
    " | Water: " + water +
    " | Carbon: " + carbon;

  var weeklyLog = document.getElementById("weekly-log");

  if (entryCount === 1) {
    weeklyLog.innerHTML = "";
  }

  weeklyLog.appendChild(newEntry);

});