document.addEventListener("DOMContentLoaded", () => {
  olympusLandingListener()
  olympusBtnListener()
  olympusBackBtnListener()
})

const SIXTEENOLYMPUSPARAMETERS = [
  "Shutter Mode",
  "Shutter Level",
  "Area",
  "Speed",
  "Photometry Mode",
  "Photometry Peak/Avg",
  "S Gamma",
  "BG Gamma",
  "MPED",
  "BG Point",
  "R Knee Slope",
  "R knee Point",
  "Enhance",
  "Chroma",
  "B Gain",
  "B Hue",
  "R Gain",
  "R Hue",
  "ENV Gain Mode",
  "ENV Manual Gain",
  "ENV Level",
  "ENV BG Offset",
  "ENV Gamma",
  "ENV Max Gain",
  "Size",
  "G Hue",
  "G Gain",
  "R-Ye Hue",
  "R-Ye Gain",
  "Ye Hue",
  "Ye Gain",
  "Ye-G Hue",
  "Ye-G Gain",
  "G-Cy Hue",
  "G-Cy Gain",
  "CY Hue",
  "CY Gain",
  "CY-B Hue",
  "CY-B Gain",
  "B-Mg Hue",
  "B-Mg Gain",
  "Mg Hue",
  "Mg Gain",
  "Mg-R Hue",
  "Mg-R Gain",
]

const FOURKPARAMS = [
  "Specialty",
  "Red",
  "Green",
  "Blue",
  "Gamma",
  "Enhancement",
  "Brightness",
  "Contrast",
  "Sharpness",
]

const OLYMPUSFOURK = {
  "Laparoscopy 3": ["Standard", "0", "0", "0", "2.2", "Med", "45", "50", "5"],
  "Laparoscopy 2": ["Standard", "0", "0", "0", "2.2", "Med", "45", "50", "5"],
  "Laparoscopy 1": ["Lap 1", "-45", "-5", "10", "S7", "Low", "45", "50", "5"],
  "ENT 1": ["No Data", "-30", "-6", "7", "S0", "Low", "39", "52", "5"],
  "ENT 2": ["No Data", "-30", "-6", "7", "S0", "Mid", "39", "59", "5"],
  "ENT 3": ["No Data", "-30", "-6", "6", "S0", "Mid", "39", "52", "5"],
  "ENT 4": ["No Data", "-50", "-13", "-15", "S0", "Low", "39", "59", "5"],
  "ENT 5": ["No Data", "-10", "-6", "7", "S2", "Off", "39", "52", "5"],
  "Ortho 1": ["No Data", "-10", "10", "5", "S4", "Low", "45", "60", "5"],
  "Ortho 2": ["No Data", "-10", "0", "5", "S7", "Low", "45", "60", "5"],
  "Ortho 3": ["No Data", "-15", "-5", "8", "S7", "Low", "45", "60", "5"],
  "Rigid Uro": ["No Data", "-35", "0", "10", "S0", "Med", "45", "70", "5"],
  "Semi-Rigid Uro": ["No Data", "-35", "0", "10", "S0", "Med", "45", "70", "5"],
}

const OLYMPUSSIXTEEN = {
  Arthroscopy: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "5",
    "4",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "4",
    "2",
    "1",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Rigid Uro": [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "0",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Semi-Rigid Uro": [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "0",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Ortho 1": [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "5",
    "4",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "4",
    "2",
    "1",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Ortho 2": [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "5",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "-6",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "5",
    "-8",
    "-9",
    "2",
    "0",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Ortho 3": [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "5",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "-8",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "5",
    "-8",
    "-9",
    "2",
    "0",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT-Skull": [
    "Auto",
    "60",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "4",
    "8",
    "0",
    "30",
    "0",
    "0",
    "0",
    "0",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 1": [
    "Auto",
    "60",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "4",
    "8",
    "0",
    "30",
    "0",
    "0",
    "0",
    "0",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 2": [
    "Auto",
    "60",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "8",
    "4",
    "0",
    "17",
    "0",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 3": [
    "Auto",
    "60",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "8",
    "4",
    "0",
    "17",
    "0",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 3": [
    "Auto",
    "60",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "8",
    "4",
    "0",
    "17",
    "0",
    "0",
    "0",
    "-5",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 4": [
    "Auto",
    "75",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "8",
    "4",
    "0",
    "17",
    "1",
    "0",
    "0",
    "-7",
    "1",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "ENT 5": [
    "Auto",
    "66",
    "1",
    "9",
    "Photometry",
    "2",
    "4",
    "4",
    "0",
    "8",
    "4",
    "0",
    "36",
    "5",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  Flexiscope: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  "Laparoscopy 2": [
    "Auto",
    "15",
    "0",
    "9",
    "Photometry",
    "1",
    "3",
    "2",
    "0",
    "2",
    "8",
    "0",
    "23",
    "0",
    "-7",
    "-13",
    "-5",
    "-8",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-10",
    "-19",
    "24",
    "9",
    "-9",
    "11",
    "-8",
    "9",
    "0",
    "4",
    "1",
    "-6",
    "-13",
    "0",
    "0",
    "0",
    "-25",
    "-12",
    "-7",
    "-10",
  ],
  "Laparoscopy 1": [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "-8",
    "-9",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-3",
    "-5",
    "0",
    "0",
  ],
  "Laparoscopy 3": [
    "Auto",
    "15",
    "0",
    "9",
    "Photometry",
    "1",
    "3",
    "2",
    "0",
    "2",
    "8",
    "0",
    "23",
    "0",
    "6",
    "12",
    "0",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "14",
    "24",
    "7",
    "9",
    "15",
    "6",
    "13",
    "9",
    "31",
    "9",
    "-30",
    "3",
    "6",
    "0",
    "8",
    "16",
    "-12",
    "-12",
    "-31",
    "1",
  ],
  Microscope: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "4",
    "2",
    "1",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  Standard: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "20",
    "14",
    "0",
    "0",
    "-4",
    "5",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "5",
    "2",
    "1",
    "4",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
}

const olympusSetttingsState = {
  specialty: { name: "" },
}

const olympusBackBtnListener = () => {
  const olympusBackBtnDiv = document.getElementById("olympus-back-btn-div")
  olympusBackBtnDiv.addEventListener("click", () => {
    scrollToTop()
    resetOympusSettingsState()
    resetOlympusTitle()
    showTitleBtn()
    hideCcuSettings()
    clearCcuHtml()
    clearMonitorHtml()
    hideOlympusMonitorSettingsContainer()
    hideMonitorTitleSettings()
    hideBackArrow()
    returnLogoDiv()
  })
}

const returnLogoDiv = () => {
  const olympusLogoDiv = document.getElementById("olympus-logo-div")
  olympusLogoDiv.classList.remove("olympus-logo-div-center")
}

const hideBackArrow = () => {
  const backArrow = document.getElementById("olympus-back-btn-div")
  backArrow.classList.remove("olympus-back-btn-div-show")
}

const hideOlympusMonitorSettingsContainer = () => {
  const olympusMonitorSettingsContainer = document.getElementById(
    "olympus-monitor-settings-container"
  )
  olympusMonitorSettingsContainer.classList.remove(
    "olympus-monitor-settings-container-show"
  )
}

const hideMonitorTitleSettings = () => {
  const olympusMonitorTitleDiv = document.getElementById(
    "olympus-monitor-title-div"
  )
  olympusMonitorTitleDiv.classList.remove("olympus-monitor-title-div-show")
}

const clearMonitorHtml = () => {
  let olympusMonitorParamsOuterDiv = document.getElementsByClassName(
    "olympus-monitor-params-div"
  )

  let olympusMontiorSettingsOuterDiv = document.getElementsByClassName(
    "olympus-monitor-settings-div"
  )
  olympusMonitorParamsOuterDiv[0].innerHTML = ""
  olympusMontiorSettingsOuterDiv[0].innerHTML = ""
}

const clearCcuHtml = () => {
  let olympusParamsOuterDiv = document.getElementsByClassName(
    "olympus-params-div"
  )

  let olympusSettingsOuterDiv = document.getElementsByClassName(
    "olympus-settings-div"
  )
  olympusParamsOuterDiv[0].innerHTML = ""
  olympusSettingsOuterDiv[0].innerHTML = ""
}

const hideCcuSettings = () => {
  const olympusSettingsContainer = document.getElementById(
    "olympus-settings-container"
  )
  olympusSettingsContainer.classList.remove("olympus-settings-container-show")
}

const showTitleBtn = () => {
  const olumpusBtnDiv = document.getElementById("olympus-btn-div")
  olumpusBtnDiv.classList.remove("olympus-btn-div-hide")
}

const resetOlympusTitle = () => {
  const olympusSpecialtyTitleSpan = document.getElementById(
    "olympus-specialty-title-span"
  )
  olympusSpecialtyTitleSpan.innerText = "4K"

  const olympusMonitorSpecialtyTitleSpan = document.getElementById(
    "olympus-monitor-specialty-title-span"
  )
  olympusMonitorSpecialtyTitleSpan.innerText = ""
}

const resetOympusSettingsState = () => {
  olympusSetttingsState.specialty.name = ""
}

const olympusBtnListener = () => {
  const olympusSpecialtyButton = document.getElementsByClassName(
    "olympus-specialty-button"
  )
  for (let item of olympusSpecialtyButton) {
    item.addEventListener("click", () => {
      let selectedSpecialty = item.dataset.specialty
      updateSpecialtyState(selectedSpecialty)
      updateSpecialtyTitle()
      hideTitleBtn()
      showBackArrow()
      centerLogoDiv()
      showCcuSettings()
      showMonitorTitleSettings()
      showMonitorSettings()
      scrollToTop()
    })
  }
}

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}

const showMonitorTitleSettings = () => {
  const olympusMonitorTitleDiv = document.getElementById(
    "olympus-monitor-title-div"
  )
  olympusMonitorTitleDiv.classList.add("olympus-monitor-title-div-show")
}

const showMonitorSettings = () => {
  const olympusMonitorSettingsContainer = document.getElementById(
    "olympus-monitor-settings-container"
  )
  olympusMonitorSettingsContainer.classList.add(
    "olympus-monitor-settings-container-show"
  )
  populateMonitorParams()
}

const populateMonitorParams = () => {
  const monitorParamsDiv = document.getElementById("olympus-monitor-params-div")
  FOURKPARAMS.map((param) => {
    const paramDiv = document.createElement("div")
    paramDiv.setAttribute("class", "olympus-monitor-param-div")
    paramDiv.innerText = param
    monitorParamsDiv.appendChild(paramDiv)
  })
  populateMonitorSettings()
}

const populateMonitorSettings = () => {
  const monitorSettingsDiv = document.getElementById(
    "olympus-monitor-settings-div"
  )
  for (let item in OLYMPUSFOURK) {
    let settings = ""
    if (item === olympusSetttingsState.specialty.name) {
      settings = OLYMPUSFOURK[item]
      settings.map((setting) => {
        const settingDiv = document.createElement("div")
        settingDiv.setAttribute("class", "olympus-monitor-setting-div")
        settingDiv.innerText = setting
        monitorSettingsDiv.appendChild(settingDiv)
      })
    }
  }
}

const showCcuSettings = () => {
  const olympusSettingsContainer = document.getElementById(
    "olympus-settings-container"
  )
  olympusSettingsContainer.classList.add("olympus-settings-container-show")
  populateCcuParams()
}

const populateCcuParams = () => {
  const paramsDiv = document.getElementById("olympus-params-div")
  SIXTEENOLYMPUSPARAMETERS.map((param) => {
    const paramDiv = document.createElement("div")
    paramDiv.setAttribute("class", "olympus-param-div")
    paramDiv.innerText = param
    paramsDiv.appendChild(paramDiv)
  })
  populateCcuSettings()
}

const populateCcuSettings = () => {
  const settingsDiv = document.getElementById("olympus-settings-div")
  for (let item in OLYMPUSSIXTEEN) {
    console.log(olympusSetttingsState.specialty.name, item)
    settings = ""
    if (item === olympusSetttingsState.specialty.name) {
      settings = OLYMPUSSIXTEEN[item]
      settings.map((setting) => {
        const settingDiv = document.createElement("div")
        settingDiv.setAttribute("class", "olympus-setting-div")
        settingDiv.innerText = setting
        settingsDiv.appendChild(settingDiv)
      })
    }
  }
}

const centerLogoDiv = () => {
  const olympusLogoDiv = document.getElementById("olympus-logo-div")
  olympusLogoDiv.classList.add("olympus-logo-div-center")
}

const showBackArrow = () => {
  const backArrow = document.getElementById("olympus-back-btn-div")
  backArrow.classList.add("olympus-back-btn-div-show")
}

const hideTitleBtn = () => {
  const olumpusBtnDiv = document.getElementById("olympus-btn-div")
  olumpusBtnDiv.classList.add("olympus-btn-div-hide")
}

const updateSpecialtyState = (selectedSpecialty) => {
  olympusSetttingsState.specialty.name = selectedSpecialty
}
const updateSpecialtyTitle = () => {
  const olympusSpecialtyTitleSpan = document.getElementById(
    "olympus-specialty-title-span"
  )
  olympusSpecialtyTitleSpan.innerText = olympusSetttingsState.specialty.name

  const olympusMonitorSpecialtyTitleSpan = document.getElementById(
    "olympus-monitor-specialty-title-span"
  )
  olympusMonitorSpecialtyTitleSpan.innerText =
    olympusSetttingsState.specialty.name
}

const olympusLandingListener = () => {
  const olympusHomeIcon = document.getElementById("olympus-home-icon")
  olympusHomeIcon.addEventListener("click", () => {
    location.replace("./index.html")
  })
}
