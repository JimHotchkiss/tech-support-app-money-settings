document.addEventListener("DOMContentLoaded", () => {
  selectSDC();
  updateNavbar();
  printerBackButton();
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
      sdcDiv.style.display = "none";
      // Update state
      console.log(this.dataset.sdc);
      const sdc = this.dataset.sdc;
      // I want to pass this camera to the 'showPrinters'
      upDateSdcState(sdc);
      changeTitleToPrinter();
      hideLogoHtml();
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
  resetDisplaySettings();
  const printerSettingsMainDiv = window["printer-settings-main-div"];
  printerSettingsMainDiv.style.display = "block";
  // reset sdc-printer-settings-div
  const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
  sdcPrinterSettingsDiv.style.display = "block";

  // close printer button title
  const titleElement = document.getElementById("title-element");
  titleElement.style.display = "none";
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
    const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
    sdp1000Ultra.style.display = "block";
  } else if (
    printerState.sdc.name === "sdc-ultra" &&
    printerState.printer.name === "SDP1000.alt"
  ) {
    const sdp1000Alt = window["sdc-ultra-sdp1000-alt-settings-div"];
    sdp1000Alt.style.display = "block";
  }
};

const resetDisplaySettings = () => {
  // Printers
  const sdp1000 = window["sdc-sdp1000-settings-div"];
  sdp1000.style.display = "none";
  const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
  sdp1000Alt.style.display = "none";
  const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
  sdp1000Ultra.style.display = "none";
  const sdp1000UltraAlt = window["sdc-ultra-sdp1000-alt-settings-div"];
  sdp1000UltraAlt.style.display = "none";

  // reset specialites
  const hubArthroSettingsDiv = document.getElementById(
    "hub-arthro-settings-div"
  );
  hubArthroSettingsDiv.style.display = "none";
  const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
  hubLapSettingsDiv.style.display = "none";
  const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
  hubSpySettingsDiv.style.display = "none";
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
  const printerSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  );
  printerSpecialtyDiv.style.display = "none";
  // reset printer settings main div
  const printerSettingsMainDiv = window["printer-settings-main-div"];
  printerSettingsMainDiv.style.display = "block";

  if (printerState.specialty.name === "Laparoscopy") {
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
    hubLapSettingsDiv.style.display = "block";
    // reset the others
    const hubArthroSettingsDiv = document.getElementById(
      "hub-arthro-settings-div"
    );
    hubArthroSettingsDiv.style.display = "none";
    const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
    hubSpySettingsDiv.style.display = "none";
  } else if (printerState.specialty.name === "Arthroscopy") {
    const hubArthroSettingsDiv = document.getElementById(
      "hub-arthro-settings-div"
    );
    hubArthroSettingsDiv.style.display = "block";
    // reset lap and spy
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
    hubLapSettingsDiv.style.display = "none";
    const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
    hubSpySettingsDiv.style.display = "none";
  } else if (printerState.specialty.name === "Spi-phi") {
    const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
    hubSpySettingsDiv.style.display = "block";

    // reset lap and arthro
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
    hubLapSettingsDiv.style.display = "none";
    const hubArthroSettingsDiv = document.getElementById(
      "hub-arthro-settings-div"
    );
    hubArthroSettingsDiv.style.display = "none";
  }
};

const printerBackButton = () => {
  console.log("here");
  // hide all settings
  const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
  sdcPrinterSettingsDiv.style.display = "none";
  const printerBackButton = document.getElementById("printer-back-button");
  // Notes - Adjust printer-state
  printerBackButton.addEventListener("click", () => {
    // if we have a specialty, check sdc, and show either specialies or printers
    if (printerState.specialty.name !== "") {
      hubSpecialtiesBack();
    } else if (
      printerState.printer.name === "" &&
      printerState.sdc.name !== ""
    ) {
      resetSdcSelection();
    } else if (
      printerState.printer.name !== "" &&
      printerState.sdc.name === "sdc3"
    ) {
      sdc3PrintersBack();
    } else {
      sdcUltraPrintersBack();
    }
  });
};

const resetSdcSelection = () => {
  console.log(printerState.sdc);
  // determine if you're showing printers or specialties
  if (printerState.sdc.name === "hub") {
    resetHub();
  } else {
    resetSdc();
  }
};

const resetHub = () => {
  console.log("inside hub reset ");
  // reset state
  printerState.sdc.name = "";
  showSdcs();
  const specialtyButtons = document.getElementById("top-printer-specialty-div");
  specialtyButtons.style.display = "none";
  // reset back button to 'Printer Settings'
  showLogoHtml();
};

const showSdcs = () => {
  // show sdc title
  let titleElement = document.getElementById("title-element");
  titleElement.style.display = "block";
  titleElement.innerHTML = "Select SDC";
  // show sdc buttons
  let sdcButtonsDiv = document.getElementsByClassName("printer-div")[0];
  sdcButtonsDiv.style.display = "block";
};

const showLogoHtml = () => {
  const printerLogo = document.getElementById("printer-logo");
  printerLogo.style.display = "block";
  hideBackArrow();
};

const hideBackArrow = () => {
  const printerBackArrow = document.getElementById("printer-back-button");
  printerBackArrow.style.display = "none";
};

const resetSdc = () => {
  console.log(printerState);
  // reset state
  printerState.sdc.name = "";
  // hide printer buttons
  const titleElement = window["title-element"];
  titleElement.style.display = "none";
  const topPrinterPrintersDiv = window["top-printer-printers-div"];
  topPrinterPrintersDiv.style.display = "none";
  // show sdc's buttons
  showSdcs();
  // hide back arrow and show Printer Settings logo
  showLogoHtml();
};

const hubSpecialtiesBack = () => {
  // Reset specialty
  printerState.specialty.name = "";
  // Hide settings div
  const printerSettingsMainDiv = window["printer-settings-main-div"];
  printerSettingsMainDiv.style.display = "none";
  // Show specialty title
  const titleElement = document.getElementById("title-element");
  titleElement.style.display = "block";
  // now show specialty buttons
  const topPrinterSpecialtyDiv = window["top-printer-specialty-div"];
  topPrinterSpecialtyDiv.style.display = "block";
  console.log(printerState.sdc);
};

const sdc3PrintersBack = () => {
  // reset printer
  printerState.printer.name = "";
  // hide settings
  const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
  // reset the specific settings to display none
  sdcPrinterSettingsDiv.style.display = "none";
  const sdp1000 = window["sdc-sdp1000-settings-div"];
  sdp1000.style.display = "none";
  const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
  sdp1000Alt.style.display = "none";
  // show printers title and printer buttons
  const titleElement = window["title-element"];
  titleElement.style.display = "block";
  const topPrinterPrintersDiv = window["top-printer-printers-div"];
  topPrinterPrintersDiv.style.display = "block";
};

const sdcUltraPrintersBack = () => {
  // reset display to none
  const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
  sdp1000Ultra.style.display = "none";
  const sdp1000UltraAlt = window["sdc-ultra-sdp1000-alt-settings-div"];
  sdp1000UltraAlt.style.display = "none";
  printerState.printer.name = "";
  const sdcUltraSettingsDiv = window["sdc-ultra-sdp1000-settings-div"];
  sdcUltraSettingsDiv.style.display = "none";
  // show title and buttons
  const titleElement = window["title-element"];
  titleElement.style.display = "block";
  const topPrinterPrintersDiv = window["top-printer-printers-div"];
  topPrinterPrintersDiv.style.display = "block";
};

const adjustState = () => {
  if (printerState.specialty.name !== "") {
    printerState.specialty.name = "";
  } else {
    printerState.sdc.name = "";
  }
};

const updateNavbar = () => {
  const jsNavbar = document.getElementById("js-navbar-toggle");
  jsNavbar.id = "js-navbar-toggle-hide";
  showHomeIconPrinter();
};

const showHomeIconPrinter = () => {
  showHomeIcon = document.getElementById("printer-home-icon-div-hide");
  showHomeIcon.id = "printer-home-icon-div-show";
};
