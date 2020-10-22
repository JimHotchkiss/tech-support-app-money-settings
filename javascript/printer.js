document.addEventListener("DOMContentLoaded", () => {
  printerSelectSdc();
  printerLogoDivHomeNavigation();
  homeIconNavigation();
  printerBackButton();
  selectPrinter();
  // selectSDC();
  // printerBackButton();
  // printerLogoButton();
  // homeIconPrinterButton();
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

const printerSelectSdc = () => {
  // grab sdc button
  let sdcButtons = document.getElementsByClassName("example_a");
  // loop over and add event listener
  for (let item of sdcButtons) {
    item.addEventListener("click", () => {
      let sdc = item.dataset.sdc;
      // set printer state
      setPrinterState(sdc);
      // hide sdcs
      hideSdcs();
      // if hub, change select sdc to select specialty
      if (item.dataset.sdc === "hub") {
        // change select sdc to select specialty
        setSpecialtyTitleElement();
        // show back arrow
        showPrinterBackButton();
        // center printer logo
        centerPrinterLogo();
        // show specialty buttons
        showSpecialtyButton();
        printerSpecialtyEventListener();
      } else {
        setPrinterTitleElement();
        showPrinterBackButton();
        centerPrinterLogo();
        showPrinterButton();
      }
    });
  }
};

const selectPrinter = () => {
  const printerExample = document.getElementsByClassName("printer-example_a");
  for (let item of printerExample) {
    item.addEventListener("click", () => {
      let printerSelected = item.dataset.printer;
      setPrinterStatePrinter(printerSelected);
      if (printerSelected === "SDP1000") {
        showSdp1000Settings();
      }
    });
  }
};

const showSdp1000Settings = () => {
  const sdp1000Settings = document.getElementById("sdc-sdp1000-settings-div");
  sdp1000Settings.classList.add("sdc-sdp1000-settings-div-show");
};

const setPrinterStatePrinter = (printerSelected) => {
  printerState.printer.name = printerSelected;
};

const showPrinterButton = () => {
  const printerPrintersDiv = document.getElementById("printer-printers-div");
  printerPrintersDiv.classList.add("printer-printers-div-show");
};

const hidePrinterButton = () => {
  const printerPrintersDiv = document.getElementById("printer-printers-div");
  printerPrintersDiv.classList.remove("printer-printers-div-show");
};

const hidePrinterBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button");
  printerBackButton.classList.remove("printer-back-button-show");
};

const setPrinterTitleElement = () => {
  const titleElement = document.getElementById("title-element");
  titleElement.innerText = "Select Printer";
};

const setSpecialtyTitleElement = () => {
  const titleElement = document.getElementById("title-element");
  titleElement.innerText = "Select Specialty";
};

const printerSpecialtyEventListener = () => {
  // grab specialty buttons
  const printerSpecialtyExampleA = document.getElementsByClassName(
    "printer-specialty-example_a"
  );
  for (let item of printerSpecialtyExampleA) {
    item.addEventListener("click", () => {
      let specialty = item.dataset.specialty;
      // set state
      setPrinterSpecialtyState(specialty);
      // hide specialty title and buttons
      hidePrinterSpecialtyDiv();
      hideSelectTitle();
      showHubPrinterSetting(specialty, item);
    });
  }
};

const hideSelectTitle = () => {
  const selectTitleDiv = document.getElementById("select-title-div");
  selectTitleDiv.classList.add("title-div-hide");
};

const hidePrinterSpecialtyDiv = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  );
  topPrinterSpecialtyDiv.classList.remove("top-printer-specialty-div-show");
};

const showHubPrinterSetting = () => {
  if (printerState.specialty.name === "Laparoscopy") {
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
    hubLapSettingsDiv.classList.add("hub-lap-settings-div-show");
  } else if (printerState.specialty.name === "Arthroscopy") {
    const hubLapSettingsDiv = document.getElementById(
      "hub-arthro-settings-div"
    );
    hubLapSettingsDiv.classList.add("hub-arthro-settings-div-show");
  } else {
    const hubLapSettingsDiv = document.getElementById("hub-spy-settings-div");
    hubLapSettingsDiv.classList.add("hub-spy-settings-div-show");
  }
};

const setPrinterSpecialtyState = (specialty) => {
  printerState.specialty.name = specialty;
};

const showSpecialtyButton = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  );
  topPrinterSpecialtyDiv.classList.add("top-printer-specialty-div-show");
};

const centerPrinterLogo = () => {
  const printerLogodiv = document.getElementById("printer-logo-div");
  printerLogodiv.classList.add("printer-logo-div-center");
};

const removeCenterPrinterLogo = () => {
  const printerLogodiv = document.getElementById("printer-logo-div");
  printerLogodiv.classList.remove("printer-logo-div-center");
};

const showPrinterBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button");
  printerBackButton.classList.add("printer-back-button-show");
};

const setPrinterState = (sdc) => {
  printerState.sdc.name = sdc;
};

const hideSdcs = () => {
  const topSdcDiv = document.getElementById("top-sdc-div");
  topSdcDiv.classList.add("sdcs-div-hide");
};

const printerLogoDivHomeNavigation = () => {
  const printerLogoDiv = document.getElementById("printer-logo-div");
  printerLogoDiv.addEventListener("click", () => {
    location.replace("./printer.html");
  });
};

const homeIconNavigation = () => {
  const homeIconDiv = document.getElementById("home-icon-printer");
  homeIconDiv.addEventListener("click", () => {
    location.replace("./index.html");
  });
};

const printerBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button");
  printerBackButton.addEventListener("click", () => {
    // assess where are we
    if (printerState.specialty.name !== "") {
      resetPrinterSpecialtyState();
      hidePrinterSettings();
      showSelectTitleDiv();
      showSpecialtyButton();
    } else if (
      printerState.sdc.name !== "" &&
      printerState.printer.name === ""
    ) {
      resetPrinterSdcState();
      hideSpecialtyButton();
      hidePrinterBackButton();
      removeCenterPrinterLogo();
      setSdcTitleElement();
      showSdcs();
      hidePrinterButton();
    }
  });
};

const showSdcs = () => {
  const topSdcDiv = document.getElementById("top-sdc-div");
  topSdcDiv.classList.remove("sdcs-div-hide");
};

const setSdcTitleElement = () => {
  const titleElement = document.getElementById("title-element");
  titleElement.innerText = "Select SDC";
};

const hideSpecialtyButton = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  );
  topPrinterSpecialtyDiv.classList.remove("top-printer-specialty-div-show");
};

const resetPrinterSdcState = () => {
  printerState.sdc.name = "";
};

const resetPrinterSpecialtyState = () => {
  printerState.specialty.name = "";
};

const hidePrinterSettings = () => {
  const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
  const hubArthroSettingsDiv = document.getElementById(
    "hub-arthro-settings-div"
  );
  const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
  hubLapSettingsDiv.classList.remove("hub-lap-settings-div-show");
  hubArthroSettingsDiv.classList.remove("hub-arthro-settings-div-show");
  hubSpySettingsDiv.classList.remove("hub-spy-settings-div-show");
};

const showSelectTitleDiv = () => {
  const selectTitleDiv = document.getElementById("select-title-div");
  selectTitleDiv.classList.remove("title-div-hide");
};

// const selectSDC = () => {
//   // Grab the SDC buttons
//   let sdcButtons = document.getElementsByClassName("example_a");
//   // loop over buttons and add event listener
//   for (let button of sdcButtons) {
//     button.addEventListener("click", function () {
//       // Grab top div
//       sdcDiv = document.getElementById("top-sdc-div");
//       // Reassign the class name
//       sdcDiv.classList.add("printer-div-hide");
//       // sdcDiv.style.display = "none";
//       // Update state
//       const sdc = this.dataset.sdc;
//       console.log("select");
//       // I want to pass this camera to the 'showPrinters'
//       upDateSdcState(sdc);
//       changeTitleToPrinter();
//       showBackArrow();
//     });
//   }
// };

// const upDateSdcState = (sdc) => {
//   printerState.sdc.name = sdc;
// };

// const changeTitleToPrinter = () => {
//   let titleElement = document.getElementById("title-element");
//   if (printerState.sdc.name === "hub") {
//     titleElement.innerHTML = "Select Specialty";
//     showHubSpecialty();
//   } else {
//     showSdcPrinters();
//     titleElement.innerHTML = "Select Printer";
//   }
//   // buttons();
// };

// const showSdcPrinters = () => {
//   const printerPrintersDiv = document.getElementById(
//     "top-printer-printers-div"
//   );
//   printerPrintersDiv.style.display = "block";
//   sdcPrintersAddListener();
// };

// const showHubSpecialty = () => {
//   const printerSpecialtyButtons = document.getElementById(
//     "top-printer-specialty-div"
//   );
//   printerSpecialtyButtons.style.display = "block";
//   hubSpecialtiesAddListener();
// };

// const showBackArrow = () => {
//   const printerBackArrow = document.getElementById("printer-back-button");
//   printerBackArrow.classList.add("printer-back-button-show");
//   movePrinterLogoToMiddle();
// };

// const movePrinterLogoToMiddle = () => {
//   const printerLogoDiv = document.getElementById("printer-logo-div");
//   printerLogoDiv.classList.add("printer-logo-div-center");
// };

// const sdcPrintersAddListener = () => {
//   const printerExample = document.getElementsByClassName("printer-example_a");
//   for (let item of printerExample) {
//     item.addEventListener("click", () => {
//       console.log(item.dataset.printer);
//       const printer = item.dataset.printer;
//       updatePrinterState(printer);
//     });
//   }
// };

// const updatePrinterState = (printer) => {
//   printerState.printer.name = printer;
//   showSdcPrinterSettings();
// };

// const showSdcPrinterSettings = () => {
//   resetDisplaySettings();
//   const printerSettingsMainDiv = window["printer-settings-main-div"];
//   printerSettingsMainDiv.classList.add = "display-settings-main-div-show";
//   // reset sdc-printer-settings-div
//   const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
//   sdcPrinterSettingsDiv.style.display = "block";

//   // close printer button title
//   const titleElement = document.getElementById("title-element");
//   titleElement.style.display = "none";
//   // Close printer buttons
//   const topPrinterPrtintersDiv = window["top-printer-printers-div"];
//   topPrinterPrtintersDiv.style.display = "none";

//   if (
//     printerState.sdc.name === "sdc3" &&
//     printerState.printer.name === "SDP1000"
//   ) {
//     const sdp1000 = window["sdc-sdp1000-settings-div"];
//     sdp1000.style.display = "block";
//   } else if (
//     printerState.sdc.name === "sdc3" &&
//     printerState.printer.name === "SDP1000.alt"
//   ) {
//     const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
//     sdp1000Alt.style.display = "block";
//   } else if (
//     printerState.sdc.name === "sdc-ultra" &&
//     printerState.printer.name === "SDP1000"
//   ) {
//     const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
//     sdp1000Ultra.style.display = "block";
//   } else if (
//     printerState.sdc.name === "sdc-ultra" &&
//     printerState.printer.name === "SDP1000.alt"
//   ) {
//     const sdp1000Alt = window["sdc-ultra-sdp1000-alt-settings-div"];
//     sdp1000Alt.style.display = "block";
//   }
// };

// const resetDisplaySettings = () => {
//   // Printers
//   const sdp1000 = window["sdc-sdp1000-settings-div"];
//   sdp1000.style.display = "none";
//   const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
//   sdp1000Alt.style.display = "none";
//   const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
//   sdp1000Ultra.style.display = "none";
//   const sdp1000UltraAlt = window["sdc-ultra-sdp1000-alt-settings-div"];
//   sdp1000UltraAlt.style.display = "none";
//   const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
//   hubLapSettingsDiv.classList.add("hub-lap-settings-div-hide");
//   const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
//   hubSpySettingsDiv.style.display = "none";
// };

// const hubSpecialtiesAddListener = () => {
//   const printerSpecialtyButtons = document.getElementsByClassName(
//     "printer-specialty-example_a"
//   );

//   for (let item of printerSpecialtyButtons) {
//     item.addEventListener("click", () => {
//       console.log(item.dataset.specialty);
//       const specialty = item.dataset.specialty;
//       upDateSpecialtyState(specialty);
//     });
//   }
// };

// const upDateSpecialtyState = (specialty) => {
//   console.log(specialty);
//   printerState.specialty.name = specialty;
//   showHubPrinterSettings();
// };

// const showHubPrinterSettings = () => {
//   console.log(printerState);
//   const titleElement = document.getElementById("title-element");
//   titleElement.style.display = "none";
//   const printerSpecialtyDiv = document.getElementById(
//     "top-printer-specialty-div"
//   );
//   printerSpecialtyDiv.style.display = "none";
//   // reset printer settings main div
//   const printerSettingsMainDiv = window["printer-settings-main-div"];
//   printerSettingsMainDiv.style.display = "block";

//   if (printerState.specialty.name === "Laparoscopy") {
//     const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
//     hubLapSettingsDiv.classList.add("hub-lap-settings-div-show");
//     // reset the others
//     const hubArthroSettingsDiv = document.getElementById(
//       "hub-arthro-settings-div"
//     );
//     hubArthroSettingsDiv.classList.remove("hub-arthro-settings-div-show");
//     const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
//     hubSpySettingsDiv.style.display = "none";
//   } else if (printerState.specialty.name === "Arthroscopy") {
//     const hubArthroSettingsDiv = document.getElementById(
//       "hub-arthro-settings-div"
//     );
//     hubArthroSettingsDiv.classList.add("hub-arthro-settings-div-show");
//     // reset lap and spy
//     const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
//     hubLapSettingsDiv.style.display = "none";
//     const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
//     hubSpySettingsDiv.style.display = "none";
//   } else if (printerState.specialty.name === "Spi-phi") {
//     const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
//     hubSpySettingsDiv.classList.add("hub-spy-settings-div-show");

//     // reset lap and arthro
//     const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
//     hubLapSettingsDiv.style.display = "none";
//     const hubArthroSettingsDiv = document.getElementById(
//       "hub-arthro-settings-div"
//     );
//     hubArthroSettingsDiv.classList.remove("hub-arthro-settings-div-show");
//   }
// };

// const printerBackButton = () => {
//   // hide all settings
//   const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
//   sdcPrinterSettingsDiv.style.display = "none";
//   const printerBackButton = document.getElementById("printer-back-button");
//   // Notes - Adjust printer-state
//   printerBackButton.addEventListener("click", () => {
//     // if we have a specialty, check sdc, and show either specialies or printers
//     if (printerState.specialty.name !== "") {
//       console.log("hub specialty");
//       // adjust state
//       printerState.specialty.name = "";
//       resetHubSpecialties();
//       hubSpecialtiesBack();
//     } else if (
//       printerState.printer.name === "" &&
//       printerState.sdc.name !== ""
//     ) {
//       console.log("resetSdcSelection");
//       resetSdcSelection();
//     } else if (
//       printerState.printer.name !== "" &&
//       printerState.sdc.name === "sdc3"
//     ) {
//       console.log("sdc3 printer name");
//       sdc3PrintersBack();
//     } else {
//       console.log("hub printer show sdc");
//       sdcUltraPrintersBack();
//       hidePrinterBackButton();
//     }
//   });
// };

// const resetHubSpecialties = () => {
//   let hubLapSettingsDiv = document.getElementById("hub-lap-settings-div");
//   hubLapSettingsDiv.classList.remove("hub-lap-settings-div-show");
//   hubLapSettingsDiv.classList.add("hub-lap-settings-div-hide");
//   const hubArthroSettingsDiv = document.getElementById(
//     "hub-arthro-settings-div"
//   );
//   hubArthroSettingsDiv.classList.remove("hub-arthro-settings-div-show");

//   const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div");
//   hubSpySettingsDiv.classList.remove("hub-spy-settings-div-show");
// };

// const hidePrinterBackButton = () => {
//   const printerBackArrow = document.getElementById("printer-back-button");
//   printerBackArrow.classList.remove("printer-back-button-show");
// };

// const resetSdcSelection = () => {
//   hideBackArrow();
//   // determine if you're showing printers or specialties
//   if (printerState.sdc.name === "hub") {
//     resetHub();
//   } else {
//     resetSdc();
//   }
// };

// const resetHub = () => {
//   console.log("inside hub reset ");
//   // reset state
//   printerState.sdc.name = "";
//   showSdcs();
//   const specialtyButtons = document.getElementById("top-printer-specialty-div");
//   specialtyButtons.style.display = "none";
// };

// const showSdcs = () => {
//   // show sdc title
//   let titleElement = document.getElementById("title-element");
//   titleElement.classList.add = "title-element-show";
//   titleElement.innerHTML = "Select SDC";

//   // show sdc buttons
//   sdcDiv = document.getElementById("top-sdc-div");
//   // Reassign the class name
//   sdcDiv.classList.remove("printer-div-hide");
// };

// const resetSdc = () => {
//   console.log(printerState);
//   // reset state
//   printerState.sdc.name = "";
//   // hide printer buttons
//   const titleElement = window["title-element"];
//   titleElement.style.display = "none";
//   const topPrinterPrintersDiv = window["top-printer-printers-div"];
//   topPrinterPrintersDiv.style.display = "none";
//   // show sdc's buttons
//   showSdcs();
//   // hide back arrow and show Printer Settings logo
//   hideBackArrow();
// };

// const hideBackArrow = () => {
//   const printerBackButton = document.getElementById("printer-back-button");
//   printerBackButton.classList.remove("printer-back-button-show");
//   removePrinterLogoCenter();
// };

// const removePrinterLogoCenter = () => {
//   const printerLogoDiv = document.getElementById("printer-logo-div");
//   printerLogoDiv.classList.remove("printer-logo-div-center");
// };
// const hubSpecialtiesBack = () => {
//   console.log("hub specialties back");

//   // Hide settings div
//   const printerSettingsMainDiv = window["printer-settings-main-div"];
//   printerSettingsMainDiv.classList.add("printer-settings-main-div-hide");
//   // Show specialty title
//   const titleElement = document.getElementById("title-element");
//   titleElement.style.display = "block";
//   // now show specialty buttons
//   const topPrinterSpecialtyDiv = window["top-printer-specialty-div"];
//   topPrinterSpecialtyDiv.style.display = "block";
//   console.log(printerState.sdc);
// };

// const sdc3PrintersBack = () => {
//   // reset printer
//   printerState.printer.name = "";
//   // hide settings
//   const sdcPrinterSettingsDiv = window["sdc-printer-settings-div"];
//   // reset the specific settings to display none
//   sdcPrinterSettingsDiv.style.display = "none";
//   const sdp1000 = window["sdc-sdp1000-settings-div"];
//   sdp1000.style.display = "none";
//   const sdp1000Alt = window["sdc-sdp1000-alt-settings-div"];
//   sdp1000Alt.style.display = "none";
//   // show printers title and printer buttons
//   const titleElement = window["title-element"];
//   titleElement.style.display = "block";
//   const topPrinterPrintersDiv = window["top-printer-printers-div"];
//   topPrinterPrintersDiv.style.display = "block";
// };

// const sdcUltraPrintersBack = () => {
//   // reset display to none
//   const sdp1000Ultra = window["sdc-ultra-sdp1000-settings-div"];
//   sdp1000Ultra.style.display = "none";
//   const sdp1000UltraAlt = window["sdc-ultra-sdp1000-alt-settings-div"];
//   sdp1000UltraAlt.style.display = "none";
//   printerState.printer.name = "";
//   const sdcUltraSettingsDiv = window["sdc-ultra-sdp1000-settings-div"];
//   sdcUltraSettingsDiv.style.display = "none";
//   // show title and buttons
//   const titleElement = window["title-element"];
//   titleElement.style.display = "block";
//   const topPrinterPrintersDiv = window["top-printer-printers-div"];
//   topPrinterPrintersDiv.style.display = "block";
// };

// const adjustState = () => {
//   if (printerState.specialty.name !== "") {
//     printerState.specialty.name = "";
//   } else {
//     printerState.sdc.name = "";
//   }
// };

// const printerLogoButton = () => {
//   const printerLogoDiv = document.getElementById("printer-logo-div");
//   printerLogoDiv.addEventListener("click", () => {
//     location.replace("./printer.html");
//   });
// };

// const homeIconPrinterButton = () => {
//   const homeIconPrinter = document.getElementById("home-icon-printer");
//   homeIconPrinter.addEventListener("click", () => {
//     location.replace("./index.html");
//   });
// };
