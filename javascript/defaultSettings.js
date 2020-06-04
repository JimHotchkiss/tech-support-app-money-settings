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
  });
};

function closeNavBar() {
  let mainNav = document.getElementById("js-menu");
  let jsNavBarToggle = document.getElementById("js-navbar-toggle");
  mainNav.className = "main-nav";
  jsNavBarToggle.className = "container";
}

const ccuButtons = () => {
  const ccuTopDiv = document.getElementById("top-camera-div");
  console.log(ccuTopDiv);
};
