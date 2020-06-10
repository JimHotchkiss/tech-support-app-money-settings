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

const addDefaultSettingsTitle = () => {
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  console.log(topDiv);
  // Main div
  const settingsMainDiv = document.createElement("div");
  settingsMainDiv.setAttribute("class", "settings-main-div");
  // Title div
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
  topDiv.appendChild(defaultSettingsTitleDiv);
  // P Tag 'default settings'//
  const settingsTitlePtag = document.createElement("p");
  settingsTitlePtag.setAttribute("class", "settings-title-ptag");
  settingsTitlePtag.innerHTML = "Default Settings";
  defaultSettingsTitleDiv.appendChild(settingsTitlePtag);
  addDefaultSettings();
};

const addDefaultSettings = () => {
  const topDiv = document.getElementsByClassName("dark-overlay")[0];
  // So I need two divs, parameters and settings, side by side
  // Parameters div
  const parametersDiv = document.createElement("div");
  parametersDiv.setAttribute("class", "default-settings-parameters-div");
  PARAMETERS.map((parameter) => {
    const parameterDiv = document.createElement("div");
    parameterDiv.setAttribute("class", "default-parameter-div");
    const parameterPtag = document.createElement("p");
    parameterPtag.setAttribute("class", "default-parameter-ptag");
    parameterPtag.innerHTML = parameter;
    parameterDiv.appendChild(parameterPtag);
    parametersDiv.appendChild(parameterDiv);
  });

  topDiv.appendChild(parametersDiv);
};
