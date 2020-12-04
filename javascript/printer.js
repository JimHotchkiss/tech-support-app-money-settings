document.addEventListener("DOMContentLoaded", () => {
  printerSelectSdc()
  printerLogoDivHomeNavigation()
  homeIconNavigation()
  printerBackButton()
  selectPrinter()
})
// Variables
const printerState = {
  sdc: { name: "" },
  specialty: { name: "" },
  printer: { name: "" },
}

const printers = ["SDP1000", "SDP1000 alt."]
const hubPrinters = ["SDP1000"]
const SDCPARAMETERS = ["Brightness", "Contrast", "Phase", "Chroma", "Sharpness"]
const hubSpecialties = ["Laparoscopy", "Arthroscopy", "Spy-Phi"]
SDC = ["130", "78", "0", "-180", "650"]
SDC3ALT = ["52", "104", "5", "-420", "800"]
SDCULTRAALT = ["0", "130", "0", "-150", "750"]

ARTHROHUB = ["-30", "180", "-10", "83", "660"]
LAPHUB = ["-30", "260", "10", "83", "660"]
SPYHUB = ["75", "-10", "10", "83", "660"]
Olympus_Ortho_1 = ["-30", "180", "-10", "83", "660"]

const printerSelectSdc = () => {
  // grab sdc button
  let sdcButtons = document.getElementsByClassName("example_a")
  // loop over and add event listener
  for (let item of sdcButtons) {
    item.addEventListener("click", () => {
      let sdc = item.dataset.sdc
      // set printer state
      setPrinterState(sdc)
      // hide sdcs
      hideSdcs()
      // if hub, change select sdc to select specialty
      if (item.dataset.sdc === "hub") {
        // change select sdc to select specialty
        setSpecialtyTitleElement()
        // show back arrow
        showPrinterBackButton()
        // center printer logo
        centerPrinterLogo()
        // show specialty buttons
        showSpecialtyButton()
        printerSpecialtyEventListener()
      } else {
        setPrinterTitleElement()
        showPrinterBackButton()
        centerPrinterLogo()
        showPrinterButton()
      }
    })
  }
}

const selectPrinter = () => {
  const printerExample = document.getElementsByClassName("printer-example_a")
  for (let item of printerExample) {
    item.addEventListener("click", () => {
      console.log(printerState.sdc.name)
      let printerSelected = item.dataset.printer
      setPrinterStatePrinter(printerSelected)
      if (printerState.sdc.name === "sdc3") {
        if (printerSelected === "SDP1000") {
          hideSelectTitle()
          hidePrinterButton()
          showSdp1000Settings()
        } else {
          hideSelectTitle()
          hidePrinterButton()
          showSdp1000AltSettings()
        }
      } else {
        if (printerSelected === "SDP1000") {
          hideSelectTitle()
          hidePrinterButton()
          showUltraSdp1000Settings()
        } else {
          hideSelectTitle()
          hidePrinterButton()
          showUltraSdp1000AltSettings()
        }
      }
    })
  }
}

const showUltraSdp1000AltSettings = () => {
  const ultraSdp1000AltDiv = document.getElementById(
    "sdc-ultra-sdp1000-alt-settings-div"
  )
  ultraSdp1000AltDiv.classList.add("sdc-ultra-sdp1000-alt-settings-div-show")
}

const showUltraSdp1000Settings = () => {
  const ultraSdp1000Div = document.getElementById(
    "sdc-ultra-sdp1000-settings-div"
  )
  ultraSdp1000Div.classList.add("sdc-ultra-sdp1000-settings-div-show")
}

const showSdp1000AltSettings = () => {
  const sdp1000AltSettings = document.getElementById(
    "sdc-sdp1000-alt-settings-div"
  )
  sdp1000AltSettings.classList.add("sdc-sdp1000-alt-settings-div-show")
}

const showSdp1000Settings = () => {
  const sdp1000Settings = document.getElementById("sdc-sdp1000-settings-div")
  sdp1000Settings.classList.add("sdc-sdp1000-settings-div-show")
}

const setPrinterStatePrinter = (printerSelected) => {
  printerState.printer.name = printerSelected
}

const showPrinterButton = () => {
  const printerPrintersDiv = document.getElementById("printer-printers-div")
  printerPrintersDiv.classList.add("printer-printers-div-show")
}

const hidePrinterButton = () => {
  const printerPrintersDiv = document.getElementById("printer-printers-div")
  printerPrintersDiv.classList.remove("printer-printers-div-show")
}

const hidePrinterBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button")
  printerBackButton.classList.remove("printer-back-button-show")
}

const setPrinterTitleElement = () => {
  const titleElement = document.getElementById("title-element")
  titleElement.innerText = "Select Printer"
}

const setSpecialtyTitleElement = () => {
  const titleElement = document.getElementById("title-element")
  titleElement.innerText = "Select Specialty"
}

const printerSpecialtyEventListener = () => {
  // grab specialty buttons
  const printerSpecialtyExampleA = document.getElementsByClassName(
    "printer-specialty-example_a"
  )
  for (let item of printerSpecialtyExampleA) {
    item.addEventListener("click", () => {
      let specialty = item.dataset.specialty
      // set state
      setPrinterSpecialtyState(specialty)
      // hide specialty title and buttons
      hidePrinterSpecialtyDiv()
      hideSelectTitle()
      showHubPrinterSetting(specialty, item)
    })
  }
}

const hideSelectTitle = () => {
  const selectTitleDiv = document.getElementById("select-title-div")
  selectTitleDiv.classList.add("title-div-hide")
}

const hidePrinterSpecialtyDiv = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  )
  topPrinterSpecialtyDiv.classList.remove("top-printer-specialty-div-show")
}

const showHubPrinterSetting = () => {
  console.log(printerState.specialty.name)
  if (printerState.specialty.name === "Laparoscopy") {
    console.log("sup")
    const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div")
    hubLapSettingsDiv.classList.add("hub-lap-settings-div-show")
  } else if (printerState.specialty.name === "Arthroscopy") {
    const hubLapSettingsDiv = document.getElementById("hub-arthro-settings-div")
    hubLapSettingsDiv.classList.add("hub-arthro-settings-div-show")
  } else if (printerState.specialty.name === "Olympus_Ortho_1") {
    const olympusOrthoSettingsDiv = document.getElementById(
      "hub-olympus-ortho1-settings-div"
    )
    olympusOrthoSettingsDiv.classList.add(
      "hub-olympus-ortho1-settings-div-show"
    )
  } else if (printerState.specialty.name === "Olympus_Ortho_3") {
    const olympusOrthoSettingsDiv = document.getElementById(
      "hub-olympus-ortho3-settings-div"
    )
    olympusOrthoSettingsDiv.classList.add(
      "hub-olympus-ortho3-settings-div-show"
    )
  } else if (printerState.specialty.name === "Olympus_Lap_1") {
    const olympusOrthoSettingsDiv = document.getElementById(
      "hub-olympus-lap1-settings-div"
    )
    olympusOrthoSettingsDiv.classList.add("hub-olympus-lap1-settings-div-show")
  } else {
    const hubLapSettingsDiv = document.getElementById("hub-spy-settings-div")
    hubLapSettingsDiv.classList.add("hub-spy-settings-div-show")
  }
}

const setPrinterSpecialtyState = (specialty) => {
  printerState.specialty.name = specialty
}

const showSpecialtyButton = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  )
  topPrinterSpecialtyDiv.classList.add("top-printer-specialty-div-show")
}

const centerPrinterLogo = () => {
  const printerLogodiv = document.getElementById("printer-logo-div")
  printerLogodiv.classList.add("printer-logo-div-center")
}

const removeCenterPrinterLogo = () => {
  const printerLogodiv = document.getElementById("printer-logo-div")
  printerLogodiv.classList.remove("printer-logo-div-center")
}

const showPrinterBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button")
  printerBackButton.classList.add("printer-back-button-show")
}

const setPrinterState = (sdc) => {
  printerState.sdc.name = sdc
}

const hideSdcs = () => {
  const topSdcDiv = document.getElementById("top-sdc-div")
  topSdcDiv.classList.add("sdcs-div-hide")
}

const printerLogoDivHomeNavigation = () => {
  const printerLogoDiv = document.getElementById("printer-logo-div")
  printerLogoDiv.addEventListener("click", () => {
    location.replace("./printer.html")
  })
}

const homeIconNavigation = () => {
  const homeIconDiv = document.getElementById("home-icon-printer")
  homeIconDiv.addEventListener("click", () => {
    location.replace("./index.html")
  })
}

const printerBackButton = () => {
  const printerBackButton = document.getElementById("printer-back-button")
  printerBackButton.addEventListener("click", () => {
    // assess where are we
    if (printerState.specialty.name !== "") {
      resetPrinterSpecialtyState()
      hidePrinterSettings()
      showSelectTitleDiv()
      showSpecialtyButton()
    } else if (
      printerState.sdc.name !== "" &&
      printerState.printer.name === ""
    ) {
      resetPrinterSdcState()
      hideSpecialtyButton()
      hidePrinterBackButton()
      removeCenterPrinterLogo()
      setSdcTitleElement()
      showSdcs()
      hidePrinterButton()
    } else {
      resetPrinterState()
      hideSDCsPrinterSettings()
      showSelectTitleDiv()
      showPrinterButton()
    }
  })
}

const hideSDCsPrinterSettings = () => {
  const sdp1000Settings = document.getElementById("sdc-sdp1000-settings-div")
  sdp1000Settings.classList.remove("sdc-sdp1000-settings-div-show")

  const sdp1000AltSettings = document.getElementById(
    "sdc-sdp1000-alt-settings-div"
  )
  sdp1000AltSettings.classList.remove("sdc-sdp1000-alt-settings-div-show")

  const ultraSdp1000AltDiv = document.getElementById(
    "sdc-ultra-sdp1000-alt-settings-div"
  )
  ultraSdp1000AltDiv.classList.remove("sdc-ultra-sdp1000-alt-settings-div-show")

  const ultraSdp1000Div = document.getElementById(
    "sdc-ultra-sdp1000-settings-div"
  )
  ultraSdp1000Div.classList.remove("sdc-ultra-sdp1000-settings-div-show")
}

const resetPrinterState = () => {
  printerState.printer.name = ""
}

const showSdcs = () => {
  const topSdcDiv = document.getElementById("top-sdc-div")
  topSdcDiv.classList.remove("sdcs-div-hide")
}

const setSdcTitleElement = () => {
  const titleElement = document.getElementById("title-element")
  titleElement.innerText = "Select SDC"
}

const hideSpecialtyButton = () => {
  const topPrinterSpecialtyDiv = document.getElementById(
    "top-printer-specialty-div"
  )
  topPrinterSpecialtyDiv.classList.remove("top-printer-specialty-div-show")
}

const resetPrinterSdcState = () => {
  printerState.sdc.name = ""
}

const resetPrinterSpecialtyState = () => {
  printerState.specialty.name = ""
}

const hidePrinterSettings = () => {
  const hubLapSettingsDiv = document.getElementById("hub-lap-settings-div")
  const hubArthroSettingsDiv = document.getElementById(
    "hub-arthro-settings-div"
  )

  const hubOrtho1 = document.getElementById("hub-olympus-ortho1-settings-div")
  const hubOrtho3 = document.getElementById("hub-olympus-ortho3-settings-div")
  const hubLap1 = document.getElementById("hub-olympus-lap1-settings-div")
  const hubSpySettingsDiv = document.getElementById("hub-spy-settings-div")
  hubLapSettingsDiv.classList.remove("hub-lap-settings-div-show")
  hubArthroSettingsDiv.classList.remove("hub-arthro-settings-div-show")
  hubSpySettingsDiv.classList.remove("hub-spy-settings-div-show")
  hubOrtho1.classList.remove("hub-olympus-ortho1-settings-div-show")
  hubOrtho3.classList.remove("hub-olympus-ortho3-settings-div-show")
  hubLap1.classList.remove("hub-olympus-lap1-settings-div-show")
}

const showSelectTitleDiv = () => {
  const selectTitleDiv = document.getElementById("select-title-div")
  selectTitleDiv.classList.remove("title-div-hide")
}
