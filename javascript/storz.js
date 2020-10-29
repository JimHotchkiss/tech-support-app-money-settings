document.addEventListener("DOMContentLoaded", () => {
  storzLandingListener();
  storzCcuBtnListener();
});

const storzSetttingsState = {
  ccu: { name: "" },
  monitor: { name: "" },
};

const storzCcuBtnListener = () => {
  const storzCcuBtn = document.getElementsByClassName("storz-ccu-button");
  for (let item of storzCcuBtn) {
    item.addEventListener("click", () => {
      let selectedCcu = item.dataset.ccu;
      updateStorzCcuState(selectedCcu);
      updateStorzTitle();
      hideStorzBtnDiv();
    });
  }
};

const hideStorzBtnDiv = () => {
  const storzBtnDiv = document.getElementById("storz-btn-div");
  storzBtnDiv.classList.add("storz-btn-div-hide");
};

const updateStorzTitle = () => {
  const storzTitleText = document.getElementById("storz-title-text");
  storzTitleText.innerText = storzSetttingsState.ccu.name;
};

const updateStorzCcuState = (selectedCcu) => {
  storzSetttingsState.ccu.name = selectedCcu;
  console.log(selectedCcu);
};

const storzLandingListener = () => {
  const storzHomeIcon = document.getElementById("storz-home-icon");
  storzHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
