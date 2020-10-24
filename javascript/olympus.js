document.addEventListener("DOMContentLoaded", () => {
  olympusLandingListener();
  olympusBtnListener();
});

const olympusSetttingsState = {
  specialty: { name: "" },
};

const olympusBtnListener = () => {
  const olympusSpecialtyButton = document.getElementsByClassName(
    "olympus-specialty-button"
  );
  for (let item of olympusSpecialtyButton) {
    item.addEventListener("click", () => {
      console.log(item.dataset.specialty);
      let selectedSpecialty = item.dataset.specialty;
      updateSpecialtyState(selectedSpecialty);
      updateSpecialtyTitle();
      hideTitleBtn();
      showBackArrow();
      centerLogoDiv();
      showSettings();
    });
  }
};

const showSettings = () => {
  const olympusSettingsContainer = document.getElementById(
    "olympus-settings-container"
  );
  olympusSettingsContainer.classList.add("olympus-settings-container-show");
};

const centerLogoDiv = () => {
  const olympusLogoDiv = document.getElementById("olympus-logo-div");
  olympusLogoDiv.classList.add("olympus-logo-div-center");
};

const showBackArrow = () => {
  const backArrow = document.getElementById("olympus-back-btn-div");
  backArrow.classList.add("olympus-back-btn-div-show");
};

const hideTitleBtn = () => {
  const olumpusBtnDiv = document.getElementById("olympus-btn-div");
  olumpusBtnDiv.classList.add("olympus-btn-div-hide");
};

const updateSpecialtyState = (selectedSpecialty) => {
  olympusSetttingsState.specialty.name = selectedSpecialty;
};
const updateSpecialtyTitle = () => {
  const olympusSpecialtyTitleSpan = document.getElementById(
    "olympus-specialty-title-span"
  );
  olympusSpecialtyTitleSpan.innerText = olympusSetttingsState.specialty.name;
};

const olympusLandingListener = () => {
  const olympusHomeIcon = document.getElementById("olympus-home-icon");
  olympusHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
