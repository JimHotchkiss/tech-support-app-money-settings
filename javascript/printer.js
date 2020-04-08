document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
});
// Variables
const printers = ["SDP1000", "SDP1000 alt.", "Kodak 72750", "Kodak 72750 alt."];
const hdPrinters = ["SDP1000", "Kodak 72750", "HP D5460"];
const hubPrinters = ["SDP1000"];
const SDCPARAMETERS = [
  "Brightness",
  "Contrast",
  "Phase",
  "Chroma",
  "Sharpness"
];
const hubSpecialties = ["Laparoscopic", "Orthroscopy", "Spy-Phi"];
SDCSETTINGS = ["10", "6", "0", "-6", "13"];
ORTHOHUB = ["-30", "180", "-10", "83", "660"];
LAPHUB = ["-30", "260", "10", "83", "660"];
SPYHUB = ["75", "-10", "10", "83", "660"];
const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", function() {
      // Grab top div
      sdcDiv = document.getElementById("top-sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      changeTitleToPrinter(sdc);
    });
  }
};
const changeTitleToPrinter = sdc => {
  let titleElement = document.getElementById("title-element");
  if (sdc === "hub") {
    titleElement.innerHTML = "Select Specialty";
  } else {
    titleElement.innerHTML = "Select Printer";
  }
  buttons(sdc);
};

const buttons = sdc => {
  let buttonVariable;
  console.log(sdc);
  // Select printers to show
  if (sdc === "hub") {
    buttonVariable = hubSpecialties;
  } else if (sdc !== "sdc-hd") {
    buttonVariable = printers;
  } else {
    buttonVariable = hdPrinters;
  }
  buttonVariable.forEach(item => {
    let buttonsTopDiv = document.getElementById("printer-div");
    let buttonsDiv = document.createElement("div");
    let buttonsLink = document.createElement("a");
    buttonsDiv.setAttribute("class", "display-button-div");
    buttonsDiv.setAttribute("align", "center");
    buttonsLink.setAttribute("class", "example_a");
    buttonsLink.setAttribute("data-value", `${item}`);
    buttonsLink.setAttribute("href", "#");
    buttonsLink.setAttribute("rel", "nofollow noopener");
    buttonsLink.appendChild(document.createTextNode(`${item}`));
    buttonsDiv.appendChild(buttonsLink);
    buttonsTopDiv.appendChild(buttonsDiv);
  });
  addListener(sdc);
};

const addListener = sdc => {
  let consoleButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of consoleButtons) {
    button.addEventListener("click", function() {
      // Grab top div
      sdcDiv = document.getElementById("top-sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Grab the dataset using 'this' keyword
      let value = this.dataset.value;
      // I want to pass this camera to the 'showPrinters'
      changeTitleToSettings(sdc, value);
    });
  }
};

const changeTitleToSettings = (sdc, value) => {
  console.log(value);
  // change Select Printer to Settings
  let titleElement = document.getElementById("title-element");
  titleElement.innerHTML = "SDC Printer Settings";
  printerSettingsDiv(sdc, value);
};

const printerSettingsDiv = (sdc, value) => {
  let sdcUpcase = sdc.toUpperCase();

  // Grab printer div
  let printerDiv = document.getElementById("printer-div");
  // reassign class name
  printerDiv.classList.add("printer-display-none-div");

  // Grab Settings parent div
  let settingsDiv = document.getElementById("settings-div");
  // Create main div
  let settingsMainDiv = document.createElement("div");
  settingsMainDiv.setAttribute("class", "settings-main-div");
  settingsDiv.appendChild(settingsMainDiv);
  // Two Headers side-by-side
  let settingsHeaderOne = document.createElement("div");
  let settingsHeaderTwo = document.createElement("div");
  // Set attributes
  settingsHeaderOne.setAttribute("class", "header-one-div");
  settingsHeaderTwo.setAttribute("class", "header-two-div");
  // Insert text-params
  let paramsTitle = document.createElement("h3");
  let paramsTitleTextNode = document.createTextNode(`${sdcUpcase}`);
  paramsTitle.appendChild(paramsTitleTextNode);
  settingsHeaderOne.appendChild(paramsTitle);

  // Insert text-settings
  let settingsTitle = document.createElement("h3");
  let settingsTitleTextNode = document.createTextNode(`${value}`);
  settingsTitle.appendChild(settingsTitleTextNode);
  settingsHeaderTwo.appendChild(settingsTitle);

  // Settings body
  let settingsBody = document.createElement("div");
  settingsBody.setAttribute("class", "settings-body-div");
  settingsDiv.appendChild(settingsBody);

  // Body box1 and box2 side-by-side
  let settingsBoxOne = document.createElement("div");
  settingsBoxOne.setAttribute("class", "settings-box-one");
  let settingsBoxTwo = document.createElement("div");
  settingsBoxTwo.setAttribute("class", "settings-box-two");
  settingsBody.appendChild(settingsBoxOne);
  settingsBody.appendChild(settingsBoxTwo);

  // insert parameters in settingsBoxOne
  SDCPARAMETERS.forEach(function(parameter) {
    let pTagBoxOne = document.createElement("p");
    pTagBoxOne.setAttribute("class", "p-box");
    let pTagTextNode = document.createTextNode(`${parameter}`);
    pTagBoxOne.appendChild(pTagTextNode);
    settingsBoxOne.appendChild(pTagBoxOne);
  });

  // insert settings in settingsBoxTwo
  let settings;
  console.log(value);
  if (value === "Orthroscopy") {
    settings = ORTHOHUB;
  } else if (value === "Laparoscopic") {
    settings = LAPHUB;
  } else if (value === "Spy-Phi") {
    settings = SPYHUB;
  } else {
    settings = SDCSETTINGS;
  }

  settings.forEach(function(setting) {
    let pTagDivTwo = document.createElement("div");
    pTagDivTwo.setAttribute("class", "p-tag-div-two");
    let pTagBoxTwo = document.createElement("p");
    pTagBoxTwo.setAttribute("class", "p-box");
    let pTagTextNode = document.createTextNode(`${setting}`);
    pTagBoxTwo.appendChild(pTagTextNode);
    pTagDivTwo.appendChild(pTagBoxTwo);
    settingsBoxTwo.appendChild(pTagDivTwo);
  });

  // test insert
  settingsMainDiv.appendChild(settingsHeaderOne);
  settingsMainDiv.appendChild(settingsHeaderTwo);
};
