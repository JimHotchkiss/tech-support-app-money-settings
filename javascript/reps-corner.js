document.addEventListener("DOMContentLoaded", function () {
  initialRatingFetch();
  repsCornerHomeEventListener();
  selectRepSetting();
  starRatingFunction();
});

const repsCornerHomeEventListener = () => {
  const repsHomeIcon = document.getElementById("reps-corner-home-div");
  repsHomeIcon.addEventListener("click", () => {
    window.open("./index.html", "_self");
  });
};

const initialRatingFetch = () => {
  fetch("http://localhost:3000/api/v1/settings")
    .then((response) => response.json())
    .then((data) => getRatings(data));
};

const rcState = {
  settingId: "here",
};

// 1688 Parameters
const SIXTEENPARAMETERS = [
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
];

const rcSettings = [
  {
    rep: "james.hotchkiss@stryker.com",
    name: "laparoscopy 1",
    setting: [
      "james lap 1",
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
    ],
  },
  {
    rep: "james.hotchkiss@stryker.com",
    name: "laparoscopy 2",
    setting: [
      "james lap 2",
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
    ],
  },
  {
    rep: "james.hotchkiss@stryker.com",
    name: "laparoscopy 3",
    setting: [
      "james lap 3",
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
    ],
  },
  {
    rep: "john.doe@stryker.com",
    name: "arthroscopy 1",
    setting: [
      "john",
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
    ],
  },
  {
    rep: "john.doe@stryker.com",
    name: "laparoscopy 2",
    setting: [
      "john lap 2",
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
    ],
  },
  {
    rep: "jane.doe@stryker.com",
    name: "hysteroscopy 1",
    setting: [
      "jane hyst 1",
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
    ],
  },
  {
    rep: "jane.doe@stryker.com",
    name: "ENT 1",
    setting: [
      "jane ent 1",
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
    ],
  },
  {
    rep: "jane.doe@stryker.com",
    name: "ENT 2",
    setting: [
      "jane ent 2",
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
    ],
  },
];

// Total starts
const starsTotal = 5;
function getRatings(data) {
  if (data) {
    data.map((setting) => {
      const settingId = setting.specialty + setting.id;
      // Get percentage
      const starPercentage = (setting.rating / starsTotal) * 100;
      // // Round to the nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      // // Set width of stars inner to percentage
      const starsInner = document.querySelector(`.${settingId}  .stars-inner`);
      if (starsInner !== null) {
        starsInner.style.width = starPercentageRounded;
      }
    });
  }
}

const selectRepSetting = () => {
  const anchorTag = document.getElementsByClassName("specialty-title");
  for (let item of anchorTag) {
    rcState.settingId = item.dataset.id;
    item.addEventListener("click", () => {
      showRCSettingsTitle();
      showStarRatingFunction();
      hideRCTitle();
      hideRepsCornerBody();
    });
  }
};

const showStarRatingFunction = () => {
  const repsRatings = document.getElementById("reps-ratings");
  repsRatings.classList.toggle("show");
};

// Star Rating
let index;
let ratingsValue = 0;
const starRatingFunction = () => {
  const stars = document.querySelector(".ratings").children;
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", () => {
      for (let j = 0; j < stars.length; j++) {
        stars[j].classList.remove("fas");
        stars[j].classList.add("far");
      }
      for (let j = 0; j <= i; j++) {
        stars[j].classList.remove("far");
        stars[j].classList.add("fas");
      }
    });
    stars[i].addEventListener("click", () => {
      ratingsValue = i + 1;
      const rcCcuSettingTitleDiv = document.getElementById("rc-ccu-title-div");
      console.log(rcCcuSettingTitleDiv.childNodes[0]);
      const email = rcCcuSettingTitleDiv.childNodes[0].innerHTML;
      const specialty = rcCcuSettingTitleDiv.childNodes[2].innerHTML;
      updateRating(email, specialty, ratingsValue);
      index = i;
    });
    stars[i].addEventListener("mouseout", () => {
      for (let j = 0; j < stars.length; j++) {
        stars[j].classList.remove("fas");
        stars[j].classList.add("far");
      }
      for (let j = 0; j <= index; j++) {
        stars[j].classList.remove("far");
        stars[j].classList.add("fas");
      }
    });
  }
};

const updateRating = (email, specialty, ratingsValue) => {
  // console.log(email, specialty, ratingsValue);

  fetch("http://localhost:3000/api/v1/settings/1", {
    method: "PATCH",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: rcState.settingId,
      rep_email: email,
      rating: ratingsValue,
      specialty: specialty,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

function capitalizeLetters(str) {
  // this function return the string with the first letter of each word capitalized
  const strArray = str.toLowerCase().split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  }
  return strArray.join(" ");
}

const showRCSettingsTitle = () => {
  const rcSettingsContainer = document.getElementById(
    "reps-corner-settings-container"
  );
  const rcSettingsCcuTitleDiv = document.createElement("div");
  rcSettingsCcuTitleDiv.setAttribute("class", "rc-ccu-title-div");
  rcSettingsCcuTitleDiv.setAttribute("id", "rc-ccu-title-div");
  for (let item of rcSettings) {
    if (
      item.rep === event.currentTarget.dataset.rep &&
      item.name === event.currentTarget.dataset.setting
    ) {
      const rcSettingsCcuPTag = document.createElement("div");
      rcSettingsCcuPTag.setAttribute("class", "rc-setting-title-div");

      const rcSettingEmailDiv = document.createElement("div");
      rcSettingEmailDiv.setAttribute("class", "rc-setting-email-div");
      const rcSettingNameDiv = document.createElement("div");
      const rcSettingCcuDiv = document.createElement("div");
      rcSettingCcuDiv.setAttribute("class", "rc-setting-ccu-div");
      const rcSettingCcuPTag = document.createElement("p");
      rcSettingCcuPTag.setAttribute("class", "rc-ccu-ptag");
      rcSettingNameDiv.setAttribute("class", "rc-setting-name-div");
      const rcEmailPTag = document.createElement("p");
      rcEmailPTag.setAttribute("class", "rc-email-ptag");
      rcEmailPTag.innerHTML = item.rep;
      rcSettingCcuPTag.innerHTML = "1688 CCU";
      rcSettingsCcuTitleDiv.appendChild(rcEmailPTag);
      rcSettingCcuDiv.appendChild(rcSettingCcuPTag);
      rcSettingsCcuTitleDiv.appendChild(rcSettingCcuDiv);
      const rcNamePTag = document.createElement("p");
      rcNamePTag.setAttribute("class", "rc-name-ptag");

      rcNamePTag.innerHTML = capitalizeLetters(item.name);
      rcSettingsCcuTitleDiv.appendChild(rcNamePTag);
      rcSettingsContainer.appendChild(rcSettingsCcuTitleDiv);

      item.setting.map((value) => {});
    }
  }
  showRCSettingsParameters(rcSettingsContainer);
};

const settingsParametersContainer = document.createElement("div");
settingsParametersContainer.setAttribute(
  "class",
  "settings-parameters-container"
);

const showRCSettingsParameters = (rcSettingsContainer) => {
  const settingsParameterDiv = document.createElement("div");
  settingsParameterDiv.setAttribute("class", "settings-parameter-div");
  const paramsDiv = document.createElement("div");
  paramsDiv.setAttribute("class", "params-div");
  SIXTEENPARAMETERS.map((param) => {
    const paramDiv = document.createElement("div");
    paramDiv.setAttribute("class", "param-div");
    const paramPTag = document.createElement("p");
    paramPTag.setAttribute("class", "param-ptag");
    paramPTag.innerHTML = param;
    paramDiv.appendChild(paramPTag);
    settingsParameterDiv.appendChild(paramDiv);
    settingsParametersContainer.appendChild(settingsParameterDiv);
    rcSettingsContainer.appendChild(settingsParametersContainer);
  });
  showRCSettings(
    rcSettingsContainer,
    settingsParameterDiv,
    settingsParametersContainer
  );
};

const showRCSettings = (rcSettingsContainer, settingsParameterDiv) => {
  const rcSettingsDiv = document.createElement("div");
  rcSettingsDiv.setAttribute("class", "settings-div");
  for (let item of rcSettings) {
    if (
      item.rep === event.currentTarget.dataset.rep &&
      item.name === event.currentTarget.dataset.setting
    ) {
      item.setting.map((value) => {
        const settingDiv = document.createElement("div");
        settingDiv.setAttribute("class", "setting-div");
        const settingPTag = document.createElement("p");
        settingPTag.setAttribute("class", "setting-ptag");
        settingPTag.innerHTML = value;
        settingDiv.appendChild(settingPTag);
        rcSettingsDiv.appendChild(settingDiv);
        settingsParametersContainer.appendChild(rcSettingsDiv);
        rcSettingsContainer.appendChild(settingsParametersContainer);
      });
    }
  }
};

const hideRepsCornerBody = () => {
  const repsCornerBody = document.getElementById("reps-corner-container");
  repsCornerBody.classList.toggle("hide");
};

const hideRCTitle = () => {
  const repsCornerTitleDiv = document.getElementById("reps-corner-title-div");
  repsCornerTitleDiv.classList.toggle("hide");
  showRCBackButton();
};

const showRCBackButton = () => {
  const rcBackButtonDiv = document.getElementById("reps-corner-back-button");
  rcBackButtonDiv.classList.toggle("show");
};
