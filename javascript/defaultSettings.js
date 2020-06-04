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
};
