document.addEventListener("DOMContentLoaded", () => {
  landingPageEventListener();
  msaEventListener();
  printerEventListener();
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

const printerEventListener = () => {
  const printerDiv = document.getElementById("printer-card");
  printerDiv.addEventListener("click", () => {
    location.replace("./printer.html");
  });
};
