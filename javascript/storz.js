document.addEventListener("DOMContentLoaded", () => {
  storzLandingListener();
  // olympusBtnListener();
  // olympusBackBtnListener();
});

const storzLandingListener = () => {
  const storzHomeIcon = document.getElementById("storz-home-icon");
  storzHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
