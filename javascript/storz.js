document.addEventListener("DOMContentLoaded", () => {
  storzLandingListener();
  storzCcuBtnListener();
  storzMonitorBtnListener();
  storzSpecialtyBtnListener();
  storzBackBtnListener();
});

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
];
// Need to add reps name in settings
const FIFTEENTORZPARAMETERS = [
  "Enhancement",
  "Contrast",
  "R-Gain",
  "R-Hue",
  "B-Gain",
  "B-Hue",
  "Shutter",
  "Brt Control",
  "Size",
  "Brightness Peak",
  "Target Area",
  "Brt Lvl",
];
const SIXTEENSTORZPARAMETERS = [
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
];

const STORZSETTINGS = {
  "1688-4K-ENT/Skull": {
    rep: "brian.koch@stryker.com",
    settings: [
      "Auto",
      "70",
      "3",
      "9",
      "Photometry",
      "0",
      "6",
      "5",
      "-10",
      "4",
      "8",
      "0",
      "30",
      "4",
      "0",
      "0",
      "-1",
      "0",
      "Auto",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
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
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "-1",
    ],
    monitor: ["Arthro A", "-30", "-6", "7", "S0", "Low", "39", "52", "No Data"],
  },
  "1688-VisionPro-ENT/Skull": {
    rep: "jim.jones@stryker.com",
    settings: [
      "Vision pro",
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
    monitor: ["No Data", "-30", "-30", "5", "S0", "40", "60", "50", "5"],
  },
};

const storzSetttingsState = {
  ccu: { name: "" },
  monitor: { name: "" },
  specialty: { name: "" },
  rep: { name: "" },
};

const storzBackBtnListener = () => {
  const storzBackBtnDiv = document.getElementById("storz-back-btn-div");
  storzBackBtnDiv.addEventListener("click", () => {
    if (storzSetttingsState.monitor.name !== "") {
      resetStorzMonitorSettingsState();
      resetStorzRepSettingsState();
      resetStorzTitle();
      hideStorzSettings();
      showStorzMonitorBtns();
      clearStorzCcuHtml();
      clearStorzMonitorHtml();
      hideStorzMonitorTitle();
    } else {
      resetStorzCcuSettingsState();
      hideStorzMonitorBtns();
      showStorzCcuBtns();
      resetStorzTitle();
      hideStorzBackArrow();
      realignStorzLogo();
    }
  });
};

const hideStorzMonitorTitle = () => {
  const storzMonitorTitleDiv = document.getElementById(
    "storz-monitor-title-div"
  );
  storzMonitorTitleDiv.classList.remove("storz-monitor-title-div-show");
};

const realignStorzLogo = () => {
  const storzLogoDiv = document.getElementById("storz-logo-div");
  storzLogoDiv.classList.remove("storz-logo-div-center");
};

const hideStorzBackArrow = () => {
  const backArrow = document.getElementById("storz-back-btn-div");
  backArrow.classList.remove("storz-back-btn-div-show");
};

const showStorzCcuBtns = () => {
  const storzBtnDiv = document.getElementById("storz-btn-div");
  storzBtnDiv.classList.remove("storz-btn-div-hide");
};

const resetStorzCcuSettingsState = () => {
  storzSetttingsState.ccu.name = "";
};

const clearStorzMonitorHtml = () => {
  let storzMonitorParamsOuterDiv = document.getElementsByClassName(
    "storz-monitor-params-div"
  );

  let storzMontiorSettingsOuterDiv = document.getElementsByClassName(
    "storz-monitor-settings-div"
  );
  storzMonitorParamsOuterDiv[0].innerHTML = "";
  storzMontiorSettingsOuterDiv[0].innerHTML = "";
};

const clearStorzCcuHtml = () => {
  let storzParamsOuterDiv = document.getElementsByClassName("storz-params-div");

  let storzSettingsOuterDiv = document.getElementsByClassName(
    "storz-settings-div"
  );
  storzParamsOuterDiv[0].innerHTML = "";
  storzSettingsOuterDiv[0].innerHTML = "";
};

const showStorzMonitorBtns = () => {
  const storzMonitorsDiv = document.getElementById("storz-monitors-div");
  storzMonitorsDiv.classList.add("storz-monitors-div-show");
};

const hideStorzSettings = () => {
  const storzSettingsContainer = document.getElementById(
    "storz-settings-container"
  );
  storzSettingsContainer.classList.remove("storz-settings-container-show");

  const storzMonitorSettingsContainer = document.getElementById(
    "storz-monitor-settings-container"
  );
  storzMonitorSettingsContainer.classList.remove(
    "storz-monitor-settings-container-show"
  );
};

const resetStorzTitle = () => {
  const storzTitleText = document.getElementById("storz-title-text");

  storzTitleText.innerText =
    storzSetttingsState.ccu.name + " " + storzSetttingsState.monitor.name;
  const strozRepDiv = document.getElementById("storz-reps-div");

  for (let item in STORZSETTINGS) {
    if (
      item ===
      storzSetttingsState.ccu.name + "-" + storzSetttingsState.monitor.name
    ) {
      strozRepDiv.innerText = STORZSETTINGS[item].rep;
    } else {
      strozRepDiv.innerText = "";
    }
  }
};

const resetStorzRepSettingsState = () => {
  storzSetttingsState.rep.name = "";
};

const resetStorzMonitorSettingsState = () => {
  storzSetttingsState.monitor.name = "";
};

const storzMonitorBtnListener = () => {
  const storzMonitorBtn = document.getElementsByClassName(
    "storz-monitor-button"
  );

  for (let item of storzMonitorBtn) {
    item.addEventListener("click", () => {
      let selectedMonitor = item.dataset.monitor;
      updateStorzMonitorState(selectedMonitor);
      updateStorzTitle();
      hideStorzMonitorBtns();
      showSpecialtyBtns();
      // showStorzSettings();
      // showStorzMonitorSettings();
      // showStorzMonitorTitle();
    });
  }
};

const storzSpecialtyBtnListener = () => {
  const storzSpecialtyBtn = document.getElementsByClassName(
    "storz-specialty-button"
  );
  for (let item of storzSpecialtyBtn) {
    item.addEventListener("click", () => {
      let selectedSpecialty = item.dataset.specialty;
      updateStorzSpecialtyState(selectedSpecialty);
      hideStorzSpecialtyBtns();
      updateStorzTitle();
      showStorzSettings();
      showStorzMonitorSettings();
      showStorzMonitorTitle();
    });
  }
};

const hideStorzSpecialtyBtns = () => {
  if (
    storzSetttingsState.ccu.name === "1688" &&
    storzSetttingsState.monitor.name === "4K"
  ) {
    const specialtyBtnDiv = document.getElementById(
      "storz-1688-4K-specialties-div"
    );
    specialtyBtnDiv.classList.remove("storz-1688-4K-specialties-div-show");
  }
};

const updateStorzSpecialtyState = (selectedSpecialty) => {
  storzSetttingsState.specialty.name = selectedSpecialty;
};

const showSpecialtyBtns = () => {
  if (
    storzSetttingsState.ccu.name === "1688" &&
    storzSetttingsState.monitor.name === "4K"
  ) {
    const specialtyBtnDiv = document.getElementById(
      "storz-1688-4K-specialties-div"
    );
    specialtyBtnDiv.classList.add("storz-1688-4K-specialties-div-show");
  }
};

const showStorzMonitorTitle = () => {
  const storzMonitorTitleDiv = document.getElementById(
    "storz-monitor-title-div"
  );
  storzMonitorTitleDiv.classList.add("storz-monitor-title-div-show");
  updateStorzMonitorTitle();
};

const updateStorzMonitorTitle = () => {
  const storzTitleText = document.getElementById("storz-monitor-title-text");
  storzTitleText.innerText =
    storzSetttingsState.monitor.name + " " + storzSetttingsState.ccu.name;
  const strozRepDiv = document.getElementById("storz-reps-div");

  for (let item in STORZSETTINGS) {
    console.log(item);
    if (
      item ===
      storzSetttingsState.ccu.name +
        "-" +
        storzSetttingsState.monitor.name +
        "-" +
        storzSetttingsState.specialty.name
    ) {
      strozRepDiv.innerText = STORZSETTINGS[item].rep;
    }
  }
};

const showStorzMonitorSettings = () => {
  const storzMonitorSettingsContainer = document.getElementById(
    "storz-monitor-settings-container"
  );
  storzMonitorSettingsContainer.classList.add(
    "storz-monitor-settings-container-show"
  );
  populateStorzMonitorParams();
};

const populateStorzMonitorParams = () => {
  const monitorParamsDiv = document.getElementById("storz-monitor-params-div");
  FOURKPARAMS.map((param) => {
    const paramDiv = document.createElement("div");
    paramDiv.setAttribute("class", "storz-monitor-param-div");
    paramDiv.innerText = param;
    monitorParamsDiv.appendChild(paramDiv);
  });
  populateStorzMonitorSettings();
};

const populateStorzMonitorSettings = () => {
  const monitorSettingsDiv = document.getElementById(
    "storz-monitor-settings-div"
  );

  for (let item in STORZSETTINGS) {
    console.log(
      item,
      storzSetttingsState.ccu.name +
        "-" +
        storzSetttingsState.monitor.name +
        "-" +
        storzSetttingsState.specialty.name
    );
    settings = "";
    if (
      item ===
      storzSetttingsState.ccu.name +
        "-" +
        storzSetttingsState.monitor.name +
        "-" +
        storzSetttingsState.specialty.name
    ) {
      settings = STORZSETTINGS[item].monitor;
      settings.map((setting) => {
        const settingDiv = document.createElement("div");
        settingDiv.setAttribute("class", "storz-monitor-setting-div");
        settingDiv.innerText = setting;
        monitorSettingsDiv.appendChild(settingDiv);
      });
    }
  }
};

const showStorzSettings = () => {
  const storzSettingsContainer = document.getElementById(
    "storz-settings-container"
  );
  storzSettingsContainer.classList.add("storz-settings-container-show");
  populateStorzCcuParams();
};

const populateStorzCcuParams = () => {
  let params = "";
  if ((storzSetttingsState.ccu.name === "1688", storzSetttingsState.ccu)) {
    params = SIXTEENSTORZPARAMETERS;
  } else {
    params = FIFTEENTORZPARAMETERS;
  }
  const paramsDiv = document.getElementById("storz-params-div");
  params.map((param) => {
    const paramDiv = document.createElement("div");
    paramDiv.setAttribute("class", "storz-param-div");
    paramDiv.innerText = param;
    paramsDiv.appendChild(paramDiv);
  });
  populateStrozCcuSettings();
};

const populateStrozCcuSettings = () => {
  const settingsDiv = document.getElementById("storz-settings-div");
  for (let item in STORZSETTINGS) {
    console.log(
      item,
      storzSetttingsState.ccu.name +
        "-" +
        storzSetttingsState.monitor.name +
        "-" +
        storzSetttingsState.specialty.name
    );
    settings = "";
    if (
      item ===
      storzSetttingsState.ccu.name +
        "-" +
        storzSetttingsState.monitor.name +
        "-" +
        storzSetttingsState.specialty.name
    ) {
      settings = STORZSETTINGS[item].settings;
      settings.map((setting) => {
        const settingDiv = document.createElement("div");
        settingDiv.setAttribute("class", "storz-setting-div");
        settingDiv.innerText = setting;
        settingsDiv.appendChild(settingDiv);
      });
    }
  }
};

const hideStorzMonitorBtns = () => {
  const storzMonitorsDiv = document.getElementById("storz-monitors-div");
  storzMonitorsDiv.classList.remove("storz-monitors-div-show");
};

const updateStorzMonitorState = (selectedMonitor) => {
  storzSetttingsState.monitor.name = selectedMonitor;
};

const storzCcuBtnListener = () => {
  const storzCcuBtn = document.getElementsByClassName("storz-ccu-button");
  for (let item of storzCcuBtn) {
    item.addEventListener("click", () => {
      let selectedCcu = item.dataset.ccu;
      updateStorzCcuState(selectedCcu);
      updateStorzTitle();
      showStorzBackArrow();
      centerStorzLogo();
      hideStorzCcusBtnDiv();
      showStorzMonitorsBtn();
    });
  }
};

const showStorzMonitorsBtn = () => {
  const storzMonitorsDiv = document.getElementById("storz-monitors-div");
  storzMonitorsDiv.classList.add("storz-monitors-div-show");
};

const centerStorzLogo = () => {
  const storzLogoDiv = document.getElementById("storz-logo-div");

  storzLogoDiv.classList.add("storz-logo-div-center");
};

const showStorzBackArrow = () => {
  const backArrow = document.getElementById("storz-back-btn-div");
  backArrow.classList.add("storz-back-btn-div-show");
};

const hideStorzCcusBtnDiv = () => {
  const storzBtnDiv = document.getElementById("storz-btn-div");
  storzBtnDiv.classList.add("storz-btn-div-hide");
};

const updateStorzTitle = () => {
  const storzTitleText = document.getElementById("storz-title-text");

  storzTitleText.innerText =
    storzSetttingsState.ccu.name +
    " " +
    storzSetttingsState.monitor.name +
    " " +
    storzSetttingsState.specialty.name;
  const strozRepDiv = document.getElementById("storz-reps-div");

  for (let item in STORZSETTINGS) {
    console.log(
      item ===
        storzSetttingsState.ccu.name +
          "-" +
          storzSetttingsState.monitor.name +
          "-" +
          storzSetttingsState.specialty.name
    );
    if (
      storzSetttingsState.specialty.name !== "" &&
      item ===
        storzSetttingsState.ccu.name +
          "-" +
          storzSetttingsState.monitor.name +
          "-" +
          storzSetttingsState.specialty.name
    ) {
      strozRepDiv.innerText = STORZSETTINGS[item].rep;
    }
  }
};

const updateStorzCcuState = (selectedCcu) => {
  storzSetttingsState.ccu.name = selectedCcu;
};

const storzLandingListener = () => {
  const storzHomeIcon = document.getElementById("storz-home-icon");
  storzHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
