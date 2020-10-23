document.addEventListener("DOMContentLoaded", () => {
  defaultSettingsNavHome();
  defaultSelectCcu();
  defaultSpecialtyEventListener();
  backBtnEventListener();
});

// Constants
const CAMERAS = ["1688", "1588", "1488", "Precision AC"];

const specialties = [
  "Arthroscopy",
  "Cystoscopy",
  "ENT-Skull",
  "Flexiscope",
  "Hystero",
  "Laparoscopy",
  "Laser",
  "Microscope",
  "Standard",
];

const SIXTEENDEFAULTPARAMETERS = [
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

const LEGACYDEFAULTPARAMETERS = [
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

const DEFAULTFIFTEEN = {
  Arthroscopy: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "3",
    "5",
    "0",
    "19",
  ],
  Cystoscopy: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "3",
    "3",
    "0",
    "19",
  ],
  "ENT-Skull": [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "1",
    "0",
    "0",
    "19",
  ],
  Flexiscope: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "4",
    "3",
    "0",
    "19",
  ],
  Hystero: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "3",
    "3",
    "0",
    "19",
  ],
  Laparoscopy: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "1",
    "3",
    "2",
    "19",
  ],
  Laser: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "3",
    "1",
    "0",
    "19",
  ],
  Microscope: [
    "27",
    "Normal",
    "7",
    "3",
    "-4",
    "-2",
    "Auto",
    "Auto",
    "1",
    "3",
    "0",
    "19",
  ],
  Standard: [
    "27",
    "Normal",
    "-5",
    "0",
    "-1",
    "0",
    "Auto",
    "Auto",
    "1",
    "3",
    "0",
    "19",
  ],
};

const DEFAULTFOURTEEN = {
  Arthroscopy: [
    "36",
    "Normal",
    "-15",
    "0",
    "-1",
    "0",
    "On",
    "Auto",
    "2",
    "5",
    "0",
    "19",
  ],
  Cystoscopy: [
    "36",
    "Normal",
    "-5",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "2",
    "3",
    "0",
    "19",
  ],
  "ENT-Skull": [
    "36",
    "Normal",
    "-5",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "2",
    "3",
    "0",
    "19",
  ],
  Flexiscope: [
    "36",
    "Normal",
    "3",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "2",
    "3",
    "0",
    "19",
  ],
  Hystero: [
    "36",
    "Normal",
    "-5",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "2",
    "3",
    "0",
    "19",
  ],
  Laparoscopy: [
    "36",
    "Normal",
    "-5",
    "0",
    "-1",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "0",
    "19",
  ],
  Laser: [
    "36",
    "Normal",
    "3",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "2",
    "1",
    "0",
    "19",
  ],
  Microscope: [
    "36",
    "Normal",
    "3",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "0",
    "19",
  ],
  Standard: [
    "36",
    "Normal",
    "-5",
    "0",
    "-12",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "0",
    "19",
  ],
};

const DEFAULTPRECISION = {
  Arthroscopy: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "17",
  ],
  Cystoscopy: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  "ENT-Skull": [
    "26",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19",
  ],
  Flexiscope: [
    "26",
    "Normal",
    "3",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "3",
    "3",
    "0",
    "19",
  ],
  Hystero: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "2",
    "3",
    "0",
    "19",
  ],
  Laparoscopy: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  Laser: [
    "26",
    "Normal",
    "3",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "2",
    "1",
    "0",
    "19",
  ],
  Microscope: [
    "26",
    "Normal",
    "3",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "0",
    "19",
  ],
  Standard: [
    "26",
    "Normal",
    "-5",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "0",
    "19",
  ],
};

const DEFAULTSIXTEEN = {
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
  Cystoscopy: [
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
  Hysteroscopy: [
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
  Laparoscopy: [
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
  Laser: [
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
};

const defaultSetttingsState = {
  camera: { name: "" },
  specialty: { name: "" },
};

function defaultSettingsNavHome() {
  const defaultHomeIcon = document.getElementById("default-home-icon");
  defaultHomeIcon.addEventListener("click", () => {
    navigateHome();
  });
}

function navigateHome() {
  location.replace("./index.html");
}

function defaultSelectCcu() {
  const defaultCameraBtnsDiv = document.getElementsByClassName(
    "default-camera-buttons-div"
  );

  for (let item of defaultCameraBtnsDiv) {
    item.addEventListener("click", () => {
      console.log(defaultSetttingsState);
      const cameraId = item.id;
      setCcuState(cameraId);
      hideDefaultCamerasContainer();
    });
  }
}

function setCcuState(cameraId) {
  defaultSetttingsState.camera.name = cameraId;
}

function hideDefaultCamerasContainer() {
  const defaultCamerasContainer = document.getElementById(
    "default-cameras-container"
  );
  defaultCamerasContainer.classList.add("hide");
  showDefaultSpecialties();
  populateDefaultBreadCrumbs();
  addBackBtn();
}

function addBackBtn() {
  const backBtnDiv = document.getElementById("back-btn-div");
  backBtnDiv.classList.add("back-btn-show");
  centerDefaultLogo();
}

function backBtnEventListener() {
  console.log(defaultSetttingsState);
  const backBtnDiv = document.getElementById("back-btn-div");
  backBtnDiv.addEventListener("click", () => {
    if (defaultSetttingsState.specialty.name !== "") {
      resetSpecialtyDefaultState();
      hideSettingsContainer();
      clearSettingHtml();
    } else {
      resetCcuDefaultState();
      hideDefaultSpecialties();
    }
  });
}

function clearSettingHtml() {
  let defaultParamSettingsContainer = document.getElementById(
    "default-parameter-settings-container"
  );

  let defaultParamsOuterDiv = document.getElementsByClassName(
    "default-params-outer-div"
  );

  let defaultSettingsOuterDiv = document.getElementsByClassName(
    "default-settings-outer-div"
  );
  defaultParamsOuterDiv[0].innerHTML = "";
  defaultSettingsOuterDiv[0].innerHTML = "";
  defaultParamSettingsContainer.innerHTML = "";
}

function hideSettingsContainer() {
  const defaultSettingsDiv = document.getElementById("default-settings-div");
  defaultSettingsDiv.classList.remove("default-settings-show");
  showDefaultSpecialties();
}

function resetSpecialtyDefaultState() {
  defaultSetttingsState.specialty.name = "";
}

function resetCcuDefaultState() {
  console.log(defaultSetttingsState.camera);
  defaultSetttingsState.camera.name = "";
}

function hideDefaultSpecialties() {
  const defaultSpecialtiesContainer = document.getElementById(
    "default-specialties-container"
  );
  defaultSpecialtiesContainer.classList.remove("show");
  hideBackBtn();
}

function hideBackBtn() {
  const backBtnDiv = document.getElementById("back-btn-div");
  backBtnDiv.classList.remove("back-btn-show");
  replaceDefaultLogo();
}

function replaceDefaultLogo() {
  const defaultLogoDiv = document.getElementById("default-logo-div");
  defaultLogoDiv.classList.remove("default-logo-center");
  showDefaultCcus();
}

function showDefaultCcus() {
  const defaultCamerasContainer = document.getElementById(
    "default-cameras-container"
  );
  defaultCamerasContainer.classList.remove("hide");
}

function centerDefaultLogo() {
  const defaultLogoDiv = document.getElementById("default-logo-div");
  defaultLogoDiv.classList.add("default-logo-center");
}

function populateDefaultBreadCrumbs() {
  const defaultBreadCrumbsText = document.getElementById(
    "default-breadcrumbs-text"
  );
  defaultBreadCrumbsText.innerText = "";
  defaultBreadCrumbsText.innerText = `Selected CCU: ${defaultSetttingsState.camera.name}`;
}

const showDefaultSpecialties = () => {
  const defaultSpecialtiesContainer = document.getElementById(
    "default-specialties-container"
  );
  defaultSpecialtiesContainer.classList.add("show");
};

function defaultSpecialtyEventListener() {
  const defaultSpecialtyBtnsDiv = document.getElementsByClassName(
    "default-specialty-buttons-div"
  );
  // let selectedSpecialty = "";
  for (let item of defaultSpecialtyBtnsDiv) {
    item.addEventListener("click", () => {
      console.log(defaultSetttingsState);
      let selectedSpecialty = item.id;
      setSpecialtyState(selectedSpecialty);
      showDefaultSettingsTitle();
      showDefaultParams();
      showDefaultSettings();
      const defaultSpecialtiesContainer = document.getElementById(
        "default-specialties-container"
      );

      defaultSpecialtiesContainer.classList.remove("show");
    });
  }
}

function showDefaultParams() {
  const defaultParamSettingsContainer = document.getElementById(
    "default-parameter-settings-container"
  );
  const paramsDiv = document.createElement("div");
  paramsDiv.setAttribute("class", "default-params-outer-div");
  let params = "";
  if (defaultSetttingsState.camera.name === "1688") {
    params = SIXTEENDEFAULTPARAMETERS;
  } else {
    params = LEGACYDEFAULTPARAMETERS;
  }
  params.map((param) => {
    const paramDiv = document.createElement("div");
    paramDiv.setAttribute("class", "default-param-div");
    paramDiv.innerText = param;
    paramsDiv.appendChild(paramDiv);
  });
  defaultParamSettingsContainer.appendChild(paramsDiv);
}

function showDefaultSettings() {
  const defaultParamSettingsContainer = document.getElementById(
    "default-parameter-settings-container"
  );

  const settingsDiv = document.createElement("div");
  settingsDiv.setAttribute("class", "default-settings-outer-div");
  let settings = "";
  if (defaultSetttingsState.camera.name === "1688") {
    settings = DEFAULTSIXTEEN;
  } else if (defaultSetttingsState.camera.name === "1588") {
    settings = DEFAULTFIFTEEN;
  } else if (defaultSetttingsState.camera.name === "1488") {
    settings = DEFAULTFOURTEEN;
  } else if (defaultSetttingsState.camera.name === "Precision") {
    settings = DEFAULTPRECISION;
  }
  for (const item in settings) {
    if (item === defaultSetttingsState.specialty.name) {
      settings[item].map((setting) => {
        const settingDiv = document.createElement("div");
        settingDiv.setAttribute("class", "default-setting-div");
        settingDiv.innerText = setting;
        settingsDiv.appendChild(settingDiv);
      });
    }
  }
  defaultParamSettingsContainer.appendChild(settingsDiv);
}

function setSpecialtyState(selectedSpecialty) {
  defaultSetttingsState.specialty.name = selectedSpecialty;
}

function showDefaultSettingsTitle() {
  const defaultSettingsDiv = document.getElementById("default-settings-div");
  defaultSettingsDiv.classList.add("default-settings-show");
  populateDefaultSettingsCcuTitle();
}

function populateDefaultSettingsCcuTitle() {
  const defaultSettingsCcuTitle = document.getElementById(
    "default-settings-ccu-title"
  );
  defaultSettingsCcuTitle.innerText = defaultSetttingsState.camera.name;
  populateDefaultSettingsSpecialtyTitle();
}

function populateDefaultSettingsSpecialtyTitle() {
  const defaultSettingsSpecialtyTitle = document.getElementById(
    "default-settings-specialty-title"
  );
  defaultSettingsSpecialtyTitle.innerText =
    defaultSetttingsState.specialty.name;
}
