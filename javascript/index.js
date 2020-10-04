document.addEventListener("DOMContentLoaded", () => {
  landingPageEventListener();
});

const landingPageEventListener = () => {
  const msaButton = document.getElementById("msa-button");
  msaButton.addEventListener("click", () => {
    location.replace("./msa.html");
  });
};
