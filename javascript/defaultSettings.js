document.addEventListener("DOMContentLoaded", () => {
  selectDefaultSettings();
});

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

  let ccuDefaultDiv = document.createElement("div");
  let ccuDefaultAnchor = document.createElement("p");
  ccuDefaultDiv.setAttribute("class", "default-button-div");
  ccuDefaultAnchor.setAttribute("class", "default-button");
  ccuDefaultDiv.setAttribute("data-ccu", "1688");
  ccuDefaultAnchor.appendChild(document.createTextNode("1688"));
  ccuDefaultDiv.appendChild(ccuDefaultAnchor);
  titleDiv.appendChild(ccuDefaultDiv);
  topDiv.appendChild(titleDiv);
  addEventListenerToCcus();
};

const addEventListenerToCcus = () => {
  // when the list of ccus become more than one, we can drop the [0] index
  const defaultButtonDiv = document.getElementsByClassName(
    "default-button-div"
  )[0];
  defaultButtonDiv.addEventListener("click", () => {
    defaultSetttingsState.camera.name = defaultButtonDiv.dataset.ccu;
    addSpecialtyTitle();
  });
};

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

const SIXTEEN = [
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
];

const addSpecialtyTitle = () => {
  const darkOverlayDiv = document.getElementsByClassName("dark-overlay")[0];
  darkOverlayDiv.innerHTML = "";
  const specialtyTitleDiv = document.createElement("div");
  specialtyTitleDiv.setAttribute("class", "default-specialty-title-div");
  const specialtyTitleText = document.createElement("h1");
  specialtyTitleText.setAttribute("class", "default-specialty-title-text");
  specialtyTitleText.innerText = "Select Specialty";
  specialtyTitleDiv.appendChild(specialtyTitleText);
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
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
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
const settingsParametersDiv = document.createElement("div");
settingsParametersDiv.setAttribute("class", "settings-parameters-div");
///////////////////
const addDefaultSettingsParameters = () => {
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
  addDefaultSettings();
};

const addDefaultSettings = () => {
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  // Settings div
  const settingsDiv = document.createElement("div");
  settingsDiv.setAttribute("class", "default-settings-div");
  SIXTEEN.map((setting) => {
    const settingDiv = document.createElement("div");
    settingDiv.setAttribute("class", "default-setting-div");
    const settingPtag = document.createElement("p");
    settingPtag.setAttribute("class", "default-setting-ptag");
    settingPtag.innerHTML = setting;
    settingDiv.appendChild(settingPtag);
    settingsDiv.appendChild(settingDiv);
  });
  settingsParametersDiv.appendChild(settingsDiv);
  settingsContainerDiv.appendChild(settingsParametersDiv);
  topDiv.appendChild(settingsContainerDiv);
};
