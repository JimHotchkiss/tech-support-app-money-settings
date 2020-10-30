document.addEventListener("DOMContentLoaded", () => {
  storzLandingListener();
  storzCcuBtnListener();
  storzMonitorBtnListener();
});

// Need to add reps name in settings

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
    });
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
  strozRepDiv.innerText = storzSetttingsState.rep.name;
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
