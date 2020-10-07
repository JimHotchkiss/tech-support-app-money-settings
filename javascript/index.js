document.addEventListener("DOMContentLoaded", () => {
  landingPageEventListener();
  msaEventListener();
});

const landingPageEventListener = () => {
  const msaButton = document.getElementById("msa-button");
  msaButton.addEventListener("click", () => {
    location.replace("./msa.html");
  });
};

const msaEventListener = () => {
  const msaDiv = document.getElementById("msa-card");
  msaDiv.addEventListener("click", () => {
    location.replace("./msa.html");
  });
};
