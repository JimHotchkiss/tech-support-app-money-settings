document.addEventListener("DOMContentLoaded", () => {
  storzLandingListener();
  storzCcuBtnListener();
  storzMonitorBtnListener();
});

const FOURKPARAMS = [
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
  "1688-4K": {
    rep: "john.doe@stryker.com",
    settings: [
      "4K",
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
    monitor: ["4K", "0", "0", "2.2", "Med", "45", "50", "5"],
  },
  "1688-VisionPro": {
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
    monitor: ["Vision Pro", "0", "0", "2.2", "Med", "45", "50", "5"],
  },
};

const storzSetttingsState = {
  ccu: { name: "" },
  monitor: { name: "" },
  rep: { name: "" },
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
      showStorzSettings();
      showStorzMonitorSettings();
    });
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
    settings = "";
    if (
      item ===
      storzSetttingsState.ccu.name + "-" + storzSetttingsState.monitor.name
    ) {
      console.log("inside", STORZSETTINGS[item].monitor);
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
  const paramsDiv = document.getElementById("storz-params-div");
  SIXTEENSTORZPARAMETERS.map((param) => {
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
    settings = "";
    if (
      item ===
      storzSetttingsState.ccu.name + "-" + storzSetttingsState.monitor.name
    ) {
      console.log("inside", STORZSETTINGS[item].rep);
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
    storzSetttingsState.ccu.name + " " + storzSetttingsState.monitor.name;
  const strozRepDiv = document.getElementById("storz-reps-div");

  for (let item in STORZSETTINGS) {
    if (
      item ===
      storzSetttingsState.ccu.name + "-" + storzSetttingsState.monitor.name
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
