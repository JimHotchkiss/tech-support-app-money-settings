document.addEventListener("DOMContentLoaded", () => {
  selectDefaultSettings();
});

const selectDefaultSettings = () => {
  // Grab the default settings button
  let defaultButton = document.getElementById("default-settings-button");
  defaultButton.addEventListener("click", () => {
    const imageDiv = document.getElementById("image-div");
    imageDiv.classList.toggle("hide");
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
  ccuDefaultAnchor.setAttribute("data-display", "1688 CCU");
  ccuDefaultAnchor.appendChild(document.createTextNode("1688"));
  ccuDefaultDiv.appendChild(ccuDefaultAnchor);
  titleDiv.appendChild(ccuDefaultDiv);
  topDiv.appendChild(titleDiv);
  addEventListenerToCcus();
};

const addEventListenerToCcus = () => {
  const defaultButtonDiv = document.getElementsByClassName(
    "default-button-div"
  )[0];
  defaultButtonDiv.addEventListener("click", () => {
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
  console.log(specialties);
  specialties.map((specialty) => {
    let specialtyDefaultDiv = document.createElement("div");
    let specialtyDefaultAnchor = document.createElement("p");
    specialtyDefaultDiv.setAttribute("class", "default-specialty-button-div");
    specialtyDefaultAnchor.setAttribute("class", "default-specialty-button");
    specialtyDefaultAnchor.setAttribute("data-display", specialty);
    specialtyDefaultAnchor.appendChild(document.createTextNode(specialty));
    specialtyDefaultDiv.appendChild(specialtyDefaultAnchor);
    specialtyTitleDiv.appendChild(specialtyDefaultDiv);
  });

  darkOverlayDiv.appendChild(specialtyTitleDiv);
};
