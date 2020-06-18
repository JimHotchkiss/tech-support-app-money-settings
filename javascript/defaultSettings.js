document.addEventListener("DOMContentLoaded", () => {
  selectDefaultSettings();
  defaultSettingsBackButton();
});

// Constants
const CAMERAS = ["1688", "1588", "1488", "Precision AC", "1288"];

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

const PARAMETERS = [
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

const SIXTEEN = {
  Arthroscopy: [
    "Auto",
    "30",
    "1",
    "9",
    "Peak/Ave",
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
  Cystoscopy: [
    "Auto",
    "30",
    "1",
    "9",
    "Peak/Ave",
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
  "ENT-Skull": [
    "Auto",
    "60",
    "1",
    "9",
    "Peak/Ave",
    "2",
    "4",
    "4",
    "0",
    "4",
    "8",
    "0",
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
    "Peak/Ave",
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
  Hystero: [
    "Auto",
    "30",
    "0",
    "9",
    "Peak/AVe",
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
    "Peak/Ave",
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
    "Peak/Ave",
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
    "Peak/Ave",
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
    "Peak/Ave",
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
};

const FIFTEEN = {
  Arthroscopy: [
    "arthro",
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
  Cystoscopy: [
    "cysto",
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
  "ENT-Skull": [
    "ent",
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
  Flexiscope: [
    "flex",
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
  Hystero: [
    "hyster",
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
  Laparoscopy: [
    "lap",
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
  Laser: [
    "laser",
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
    "micro",
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
  Standard: [
    "standard",
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
};
// const FIFTEEN = [
//   "Auto",
//   "30",
//   "1",
//   "9",
//   "Photometry",
//   "2",
//   "3",
//   "4",
//   "0",
//   "4",
//   "6",
//   "10",
//   "30",
//   "0",
//   "4",
//   "0",
//   "-12",
//   "0",
//   "Auto",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "3",
//   "0",
//   "0",
//   "9",
//   "-5",
//   "4",
//   "5",
//   "0",
//   "0",
//   "0",
//   "0",
//   "5",
//   "-17",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
// ];

const defaultSetttingsState = {
  camera: { name: "" },
  specialty: { name: "" },
};

const selectDefaultSettings = () => {
  // Grab the default settings button
  let defaultButton = document.getElementById("default-settings-button");
  defaultButton.addEventListener("click", () => {
    const imageDiv = document.getElementById("image-div");
    if (imageDiv !== null) {
      imageDiv.classList.toggle("hide");
    }
    closeNavBar();
    showHtml();
  });
};

function closeNavBar() {
  let mainNav = document.getElementById("js-menu");
  let jsNavBarToggle = document.getElementById("js-navbar-toggle");
  mainNav.className = "main-nav";
  jsNavBarToggle.className = "container";
}

const showHtml = () => {
  resetDefaultState();
  showDefaultSettingsTitle();
  showDefaultHomeIcon();
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  // Titile div
  topDiv.innerHTML = "";
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "default-ccu-title-div");
  const titleText = document.createElement("h1");
  titleText.setAttribute("class", "default-ccu-title-text");
  titleText.innerText = "Select CCU";

  // put title div and title text into top div
  titleDiv.appendChild(titleText);

  CAMERAS.map((camera) => {
    let ccuDefaultDiv = document.createElement("div");
    let ccuDefaultAnchor = document.createElement("p");
    ccuDefaultDiv.setAttribute("class", "default-button-div");
    ccuDefaultAnchor.setAttribute("class", "default-button");
    ccuDefaultDiv.setAttribute("data-ccu", camera);
    ccuDefaultAnchor.appendChild(document.createTextNode(camera));
    ccuDefaultDiv.appendChild(ccuDefaultAnchor);
    titleDiv.appendChild(ccuDefaultDiv);
    topDiv.appendChild(titleDiv);
  });

  addEventListenerToCcus();
};

// reset State
const resetDefaultState = () => {
  (defaultSetttingsState.camera.name = ""),
    (defaultSetttingsState.specialty.name = "");
};

const addEventListenerToCcus = () => {
  // when the list of ccus become more than one, we can drop the [0] index
  const defaultButtonDiv = document.getElementsByClassName(
    "default-button-div"
  );
  for (let item of defaultButtonDiv) {
    item.addEventListener("click", () => {
      defaultSetttingsState.camera.name = item.dataset.ccu;
      addSpecialtyTitle();
      showDefaultBackButton();
    });
  }
};

/////// Back Button //////////////////////////////////////////
const showDefaultBackButton = () => {
  let moneySettingsToggle = document.getElementById("money-settings");
  let backButtonToggle = document.getElementById("back-button");
  // "money-settings-toggle has a display: none"
  if (moneySettingsToggle !== null) {
    moneySettingsToggle.id = "money-settings-toggle";
  }
  backButtonToggle.style.display = "block";
  // showDefaultHomeIcon();
};

const showDefaultSettingsTitle = () => {
  const moneySettingsId = document.getElementById("money-settings");
  moneySettingsId.setAttribute("href", "#!");
  moneySettingsId.innerHTML = "Default Settings";
};

const defaultSettingsBackButton = () => {
  const defaultBackButton = document.getElementById("back-button");
  defaultBackButton.addEventListener("click", () => {
    if (defaultSetttingsState.specialty.name !== "") {
      defaultSetttingsState.specialty.name = "";
      addSpecialtyTitle();
    } else {
      defaultSetttingsState.camera.name = "";
      hideDefaultBackButton();
      hideDefaultHomeIcon();
      showHtml();
    }
  });
};

const hideDefaultHomeIcon = () => {
  const homeIconDivShow = document.getElementById("home-icon-div-show");
  const homeIcontPTag = document.getElementById("home-icon-text");
  if (homeIconDivShow !== null) {
    homeIconDivShow.id = "home-icon-div-hide";
  }

  const menuContainer = document.getElementById("js-navbar-toggle-hide");
  menuContainer.id = "js-navbar-toggle";
};

const showDefaultHomeIcon = () => {
  // need to grab the js-navbar-toggle div, and insert the home icon
  let jsNavBarToggle = document.getElementById("js-navbar-toggle");
  let homeIconDiv = document.getElementById("home-icon-div-hide");
  // const homeIconText = document.createElement("p");
  // homeIconText.setAttribute("id", "home-icon-text");
  // homeIconText.innerHTML = "Money Settings";
  // "js-navbar-toggle-hide" display: none
  if (jsNavBarToggle !== null) {
    jsNavBarToggle.id = "js-navbar-toggle-hide";
  }
  if (homeIconDiv !== null) {
    homeIconDiv.id = "home-icon-div-show";
    // homeIconDiv.appendChild(homeIconText);
  }
  defaultHomeIconEventListener();
};

const defaultHomeIconEventListener = () => {
  let defaultHomeIcon = document.getElementById("home-icon-div-show");
  defaultHomeIcon.addEventListener("click", () => {
    location.href = "./index.html";
    const defaultSettingsTitleDiv = document.getElementById(
      "default-settings-title-div"
    );
  });
};

const hideDefaultBackButton = () => {
  let moneySettingsToggle = document.getElementById("money-settings-toggle");
  let backButtonToggle = document.getElementById("back-button");
  moneySettingsToggle.id = "money-settings";
  backButtonToggle.style.display = "none";
};

const addSpecialtyTitle = () => {
  const darkOverlayDiv = document.getElementsByClassName("dark-overlay")[0];
  darkOverlayDiv.innerHTML = "";
  const specialtyTitleDiv = document.createElement("div");
  specialtyTitleDiv.setAttribute("id", "default-settings-title-div");
  const specialtyTitleText = document.createElement("h1");
  specialtyTitleText.setAttribute("class", "default-settings-title-text");
  specialtyTitleText.innerText = "Select Specialty";
  specialtyTitleDiv.appendChild(specialtyTitleText);
  // Add CCU breadcrubms
  const ccuBreadCrumbsText = document.createElement("p");
  ccuBreadCrumbsText.setAttribute("class", "ccu-bread-crumbs-text");
  ccuBreadCrumbsText.innerText =
    "Selected CCU: " + defaultSetttingsState.camera.name;
  specialtyTitleDiv.appendChild(ccuBreadCrumbsText);
  // Add speciality buttons
  specialties.map((specialty) => {
    let specialtyDefaultDiv = document.createElement("div");
    let specialtyDefaultAnchor = document.createElement("p");
    specialtyDefaultDiv.setAttribute("class", "default-specialty-button-div");
    specialtyDefaultAnchor.setAttribute("class", "default-specialty-button");
    specialtyDefaultDiv.setAttribute("data-specialty", specialty);
    specialtyDefaultAnchor.appendChild(document.createTextNode(specialty));
    specialtyDefaultDiv.appendChild(specialtyDefaultAnchor);
    specialtyTitleDiv.appendChild(specialtyDefaultDiv);
  });
  darkOverlayDiv.appendChild(specialtyTitleDiv);
  addEventListenerToSpecialty();
};

const addEventListenerToSpecialty = () => {
  const defaultSpecialtyDiv = document.getElementsByClassName(
    "default-specialty-button-div"
  );
  for (let button of defaultSpecialtyDiv) {
    button.addEventListener("click", () => {
      defaultSetttingsState.specialty.name = button.dataset.specialty;
      const topDiv = document.getElementsByClassName("dark-overlay")[0];
      // Titile div
      topDiv.innerHTML = "";
      addDefaultSettingsTitle();
    });
  }
};

// settings/parameter container
const settingsContainerDiv = document.createElement("div");
settingsContainerDiv.setAttribute("class", "settings-container-div");

const addDefaultSettingsTitle = () => {
  // console.log(settingsContainerDiv);
  settingsContainerDiv.innerHTML = "";
  const defaultSettingsTitleDiv = document.createElement("div");
  defaultSettingsTitleDiv.setAttribute("class", "default-settings-title-div");
  // CCU/Specialty span
  const settingsTitleSpan = document.createElement("span");
  settingsTitleSpan.setAttribute("class", "settings-title-span");
  settingsTitleSpan.innerHTML =
    defaultSetttingsState.camera.name +
    " " +
    defaultSetttingsState.specialty.name;
  defaultSettingsTitleDiv.appendChild(settingsTitleSpan);
  settingsContainerDiv.appendChild(defaultSettingsTitleDiv);
  // P Tag 'default settings'//
  const settingsTitlePtag = document.createElement("p");
  settingsTitlePtag.setAttribute("class", "settings-title-ptag");
  settingsTitlePtag.innerHTML = "Default Settings";
  defaultSettingsTitleDiv.appendChild(settingsTitlePtag);
  addDefaultSettingsParameters();
};

// Settings container div
let ccuVariable = "";
const settingsParametersDiv = document.createElement("div");
settingsParametersDiv.setAttribute("class", "settings-parameters-div");
///////////////////
const addDefaultSettingsParameters = () => {
  // clear out previous html
  settingsParametersDiv.innerHTML = "";
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  // So I need two divs, parameters and settings, side by side
  // Parameters div
  const parametersDiv = document.createElement("div");
  parametersDiv.setAttribute("class", "default-parameters-div");
  PARAMETERS.map((parameter) => {
    const parameterDiv = document.createElement("div");
    parameterDiv.setAttribute("class", "default-parameter-div");
    const parameterPtag = document.createElement("p");
    parameterPtag.setAttribute("class", "default-parameter-ptag");
    parameterPtag.innerHTML = parameter;
    parameterDiv.appendChild(parameterPtag);
    parametersDiv.appendChild(parameterDiv);
  });
  settingsParametersDiv.appendChild(parametersDiv);
  settingsContainerDiv.appendChild(settingsParametersDiv);
  topDiv.appendChild(settingsContainerDiv);
  setCcuVariable();
};
const setCcuVariable = () => {
  console.log(defaultSetttingsState.camera.name);
  if (defaultSetttingsState.camera.name === "1688") {
    ccuVariable = SIXTEEN;
  } else if (defaultSetttingsState.camera.name === "1588") {
    ccuVariable = FIFTEEN;
  } else if (defaultSetttingsState.camera.name === "1488") {
    ccuVariable = FOURTEEN;
  } else if (defaultSetttingsState.camera.name === "Precision AC") {
    ccuVariable = PRECISION;
  } else if (defaultSetttingsState.camera.name === "1288") {
    ccuVariable = TWELVE;
  }
  addDefaultSettings();
};

const addDefaultSettings = () => {
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  // Settings div
  const settingsDiv = document.createElement("div");
  settingsDiv.setAttribute("class", "default-settings-div");

  for (const property in ccuVariable) {
    if (defaultSetttingsState.specialty.name === property) {
      ccuVariable[property].map((setting) => {
        const settingDiv = document.createElement("div");
        settingDiv.setAttribute("class", "default-setting-div");
        const settingPtag = document.createElement("p");
        settingPtag.setAttribute("class", "default-setting-ptag");
        settingPtag.innerHTML = setting;
        settingDiv.appendChild(settingPtag);
        settingsDiv.appendChild(settingDiv);
      });
    }
  }

  settingsParametersDiv.appendChild(settingsDiv);
  settingsContainerDiv.appendChild(settingsParametersDiv);
  topDiv.appendChild(settingsContainerDiv);
};
