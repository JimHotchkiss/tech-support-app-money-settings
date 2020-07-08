document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
  updateNavbar();
  printerBackButton();
  console.log(printerState);
});
// Variables
const printerState = {
  sdc: { name: "" },
  specialty: { name: "" },
  printer: { name: "" },
};

const printers = ["SDP1000", "SDP1000 alt."];
const hubPrinters = ["SDP1000"];
const SDCPARAMETERS = [
  "Brightness",
  "Contrast",
  "Phase",
  "Chroma",
  "Sharpness",
];
const hubSpecialties = ["Laparoscopy", "Arthroscopy", "Spy-Phi"];
SDC = ["130", "78", "0", "-180", "650"];
SDC3ALT = ["52", "104", "5", "-420", "800"];
SDCULTRAALT = ["0", "130", "0", "-150", "750"];

ARTHROHUB = ["-30", "180", "-10", "83", "660"];
LAPHUB = ["-30", "260", "10", "83", "660"];
SPYHUB = ["75", "-10", "10", "83", "660"];

const selectSDC = () => {
  // Grab the SDC buttons
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over buttons and add event listener
  for (button of sdcButtons) {
    button.addEventListener("click", function () {
      // Grab top div
      sdcDiv = document.getElementById("top-sdc-div");
      // Reassign the class name
      sdcDiv.classList.add("printer-div");
      // Update state
      console.log(this.dataset.sdc);
      const sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      upDateSdcState(sdc);
      changeTitleToPrinter();
      hideLogoHtml();
      showSpecialtiesOrPrinters();
    });
  }
};

const upDateSdcState = (sdc) => {
  printerState.sdc.name = sdc;
};

const changeTitleToPrinter = () => {
  let titleElement = document.getElementById("title-element");
  if (printerState.sdc.name === "hub") {
    titleElement.innerHTML = "Select Specialty";
    showHubSpecialty();
  } else {
    showSdcPrinters();
    titleElement.innerHTML = "Select Printer";
  }
  // buttons();
};

const showSdcPrinters = () => {
  const printerPrintersDiv = document.getElementById(
    "top-printer-printers-div"
  );
  printerPrintersDiv.style.display = "block";
  sdcPrintersAddListener();
};

const showHubSpecialty = () => {
  const printerSpecialtyButtons = document.getElementById(
    "top-printer-specialty-div"
  );
  printerSpecialtyButtons.style.display = "block";
  hubSpecialtiesAddListener();
};

const hideLogoHtml = () => {
  const printerLogo = document.getElementById("printer-logo");
  printerLogo.style.display = "none";
  changeLogoToBackArrow();
};

const showSpecialtiesOrPrinters = () => {};

const changeLogoToBackArrow = () => {
  const printerBackArrow = document.getElementById("printer-back-button");
  printerBackArrow.style.display = "block";
};

const sdcPrintersAddListener = () => {
  const printerExample = document.getElementsByClassName("printer-example_a");
  for (let item of printerExample) {
    item.addEventListener("click", () => {
      console.log(item.dataset.printer);
      const printer = item.dataset.printer;
      updatePrinterState(printer);
    });
  }
};

const updatePrinterState = (printer) => {
  printerState.printer.name = printer;
  showSdcPrinterSettings();
};

const showSdcPrinterSettings = () => {
  // close printer button title
  const titleElement = document.getElementById("title-element");
  titleElement.style.display = "none";
  titleElement.innerHTML = "";
  // Close printer buttons
  const topPrinterPrtintersDiv = window["top-printer-printers-div"];
  topPrinterPrtintersDiv.style.display = "none";

  if (
    printerState.sdc.name === "sdc3" &&
    printerState.printer.name === "SDP1000"
  ) {
    const sdp1000 = window["sdc-sdp1000-settings-div"];
    sdp1000.style.display = "block";
  } else if (
    printerState.sdc.name === "sdc3" &&
    printerState.printer.name === "SDP1000.alt"
  ) {
    const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
    sdp1000Alt.style.display = "block";
  } else if (
    printerState.sdc.name === "sdc-ultra" &&
    printerState.printer.name === "SDP1000"
  ) {
    console.log("sdc-ultra sdp1000");
    const sdp1000Alt = window["sdc-ultra-sdp1000-settings-div"];
    sdp1000Alt.style.display = "block";
  } else if (
    printerState.sdc.name === "sdc-ultra" &&
    printerState.printer.name === "SDP1000.alt"
  ) {
    console.log("sdc-ultra sdp1000.alt");
    const sdp1000Alt = window["sdc-ultra-sdp1000-alt-settings-div"];
    sdp1000Alt.style.display = "block";
  }
};

const hubSpecialtiesAddListener = () => {
  const printerSpecialtyButtons = document.getElementsByClassName(
    "printer-specialty-example_a"
  );

  for (let item of printerSpecialtyButtons) {
    item.addEventListener("click", () => {
      console.log(item.dataset.specialty);
      const specialty = item.dataset.specialty;
      upDateSpecialtyState(specialty);
    });
  }
};

const upDateSpecialtyState = (specialty) => {
  console.log(specialty);
  printerState.specialty.name = specialty;
  showHubPrinterSettings();
};

const showHubPrinterSettings = () => {
  console.log(printerState);
  const titleElement = document.getElementById("title-element");
  titleElement.style.display = "none";
  titleElement.innerHTML = "";
  const printerSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  );
  printerSpecialtyDiv.style.display = "none";
  console.log(printerState.specialty.name);
  if (printerState.specialty.name === "Laparoscopy") {
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
    hubLapSettingsDiv.style.display = "block";
  } else if (printerState.specialty.name === "Arthroscopy") {
    const hubArthroSettingsDiv = document.getElementById(
      "hub-arthro-settings-div"
    );
    hubArthroSettingsDiv.style.display = "block";
  } else if (printerState.specialty.name === "Spi-phi") {
    const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
    hubSpySettingsDiv.style.display = "block";
  }
};

const printerBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button");
  // Notes - Adjust printer-state
  printerBackButton.addEventListener("click", () => {
    adjustState();
    // if we have a specialty, check sdc, and show either specialies or printers
    if (printerState.specialty.name !== "") {
      console.log("show specialites");
    } else {
      console.log("show printers");
    }
    const backSdcDiv = document.getElementById("top-sdc-div");
    // backSdcDiv.classList.remove("printer-div");
    // console.log("1");
    // hideSpecialtyButtons();
    // updatePrinterState();
  });
};

const adjustState = () => {
  if (printerState.specialty.name !== "") {
    printerState.specialty.name = "";
  } else {
    printerState.sdc.name = "";
  }
};

// const updatePrinterState = () => {
//   console.log("3", printerState);
//   printerState.sdc.name = "";
// };

// const hideSpecialtyButtons = () => {
//   console.log("2");
//   const backPrinterDiv = document.getElementById("printer-div");
//   if (backPrinterDiv.firstChild) {
//     while (backPrinterDiv.firstChild) {
//       backPrinterDiv.removeChild(backPrinterDiv.firstChild);
//     }
//   }
// };

const updateNavbar = () => {
  const jsNavbar = document.getElementById("js-navbar-toggle");
  jsNavbar.id = "js-navbar-toggle-hide";
  showHomeIconPrinter();
};

const showHomeIconPrinter = () => {
  showHomeIcon = document.getElementById("printer-home-icon-div-hide");
  showHomeIcon.id = "printer-home-icon-div-show";
};

// const buttons = () => {
//   console.log("3 after back-button", printerState);
//   let buttonVariable;
//   // Select printers to show
//   if (printerState.sdc.name === "hub") {
//     buttonVariable = hubSpecialties;
//   } else if (printerState.sdc.name !== "sdc-hd") {
//     buttonVariable = printers;
//   } else {
//     buttonVariable = hdPrinters;
//   }

//   if (printerState.sdc.name === "" && printerState.specialty.name === "") {
//     console.log("specialty not set");
//   } else {
//     buttonVariable.forEach((item) => {
//       console.log(item);
//       let buttonsTopDiv = document.getElementById("printer-div");
//       let buttonsDiv = document.createElement("div");
//       let buttonsLink = document.createElement("a");
//       buttonsDiv.setAttribute("class", "display-button-div");
//       buttonsDiv.setAttribute("align", "center");
//       buttonsLink.setAttribute("class", "example_a");
//       buttonsLink.setAttribute("data-value", `${item}`);
//       buttonsLink.setAttribute("href", "#");
//       buttonsLink.setAttribute("rel", "nofollow noopener");
//       buttonsLink.appendChild(document.createTextNode(`${item}`));
//       buttonsDiv.appendChild(buttonsLink);
//       buttonsTopDiv.appendChild(buttonsDiv);
//     });
//   }

//   addListener();
// };

// const addListener = () => {
//   let consoleButtons = document.getElementsByClassName("example_a");
//   // loop over buttons and add event listener
//   for (button of consoleButtons) {
//     button.addEventListener("click", function () {
//       // Grab top div
//       sdcDiv = document.getElementById("top-sdc-div");
//       // Reassign the class name
//       sdcDiv.classList.add("printer-div");
//       // Grab the dataset using 'this' keyword
//       printerState.specialty.name = this.dataset.value;
//       // I want to pass this camera to the 'showPrinters'
//       changeTitleToSettings();
//     });
//   }
// };

// const changeTitleToSettings = () => {
//   // change Select Printer to Settings
//   let titleElement = document.getElementById("title-element");
//   titleElement.innerHTML =
//     printerState.sdc.name.toUpperCase() + " Printer Settings";
//   printerSettingsDiv();
// };

// const printerSettingsDiv = () => {
//   let sdcUpcase = printerState.sdc.name.toUpperCase();

//   // Grab printer div
//   let printerDiv = document.getElementById("printer-div");
//   // reassign class name
//   printerDiv.classList.add("printer-display-none-div");

//   // Grab Settings parent div
//   let settingsDiv = document.getElementById("settings-div");
//   // Create main div
//   let settingsMainDiv = document.createElement("div");
//   settingsMainDiv.setAttribute("class", "settings-main-div");
//   settingsDiv.appendChild(settingsMainDiv);
//   // Two Headers side-by-side
//   let settingsHeaderOne = document.createElement("div");
//   let settingsHeaderTwo = document.createElement("div");
//   // Set attributes
//   settingsHeaderOne.setAttribute("class", "header-one-div");
//   settingsHeaderTwo.setAttribute("class", "header-two-div");
//   // Insert text-params
//   let paramsTitle = document.createElement("h3");
//   let paramsTitleTextNode = document.createTextNode(`${sdcUpcase}`);
//   paramsTitle.appendChild(paramsTitleTextNode);
//   settingsHeaderOne.appendChild(paramsTitle);

//   // Insert text-settings
//   let settingsTitle = document.createElement("h3");
//   let settingsTitleTextNode = document.createTextNode(
//     `${printerState.specialty.name}`
//   );
//   settingsTitle.appendChild(settingsTitleTextNode);
//   settingsHeaderTwo.appendChild(settingsTitle);

//   // Settings body
//   let settingsBody = document.createElement("div");
//   settingsBody.setAttribute("class", "settings-body-div");
//   settingsDiv.appendChild(settingsBody);

//   // Body box1 and box2 side-by-side
//   let settingsBoxOne = document.createElement("div");
//   settingsBoxOne.setAttribute("class", "settings-box-one");
//   let settingsBoxTwo = document.createElement("div");
//   settingsBoxTwo.setAttribute("class", "settings-box-two");
//   settingsBody.appendChild(settingsBoxOne);
//   settingsBody.appendChild(settingsBoxTwo);

//   // insert parameters in settingsBoxOne
//   SDCPARAMETERS.forEach(function (parameter) {
//     let pTagBoxOne = document.createElement("p");
//     pTagBoxOne.setAttribute("class", "p-box");
//     let pTagTextNode = document.createTextNode(`${parameter}`);
//     pTagBoxOne.appendChild(pTagTextNode);
//     settingsBoxOne.appendChild(pTagBoxOne);
//   });

//   // insert settings in settingsBoxTwo
//   let settings;
//   const value = printerState.specialty.name;
//   if (value === "Orthroscopy") {
//     settings = ORTHOHUB;
//   } else if (value === "Laparoscopic") {
//     settings = LAPHUB;
//   } else if (value === "Spy-Phi") {
//     settings = SPYHUB;
//   } else if (
//     value === "SDP1000 alt." &&
//     printerState.sdc.name === "sdc-ultra"
//   ) {
//     settings = SDCULTRAALT;
//   } else if (value === "SDP1000 alt.") {
//     settings = SDC3ALT;
//   } else {
//     settings = SDC;
//   }

//   settings.forEach(function (setting) {
//     let pTagDivTwo = document.createElement("div");
//     pTagDivTwo.setAttribute("class", "p-tag-div-two");
//     let pTagBoxTwo = document.createElement("p");
//     pTagBoxTwo.setAttribute("class", "p-box");
//     let pTagTextNode = document.createTextNode(`${setting}`);
//     pTagBoxTwo.appendChild(pTagTextNode);
//     pTagDivTwo.appendChild(pTagBoxTwo);
//     settingsBoxTwo.appendChild(pTagDivTwo);
//   });

//   // test insert
//   settingsMainDiv.appendChild(settingsHeaderOne);
//   settingsMainDiv.appendChild(settingsHeaderTwo);
// };
