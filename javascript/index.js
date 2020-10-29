document.addEventListener("DOMContentLoaded", () => {
  landingPageEventListener();
  msaEventListener();
  printerEventListener();
  defaultEventListener();
  shareSettingsEventListener();
  olympusEventListener();
  storzEventListener();
  ideaTileListener();
  contactTileListener();
});

const storzEventListener = () => {
  const storzDiv = document.getElementById("storz-card");
  storzDiv.addEventListener("click", () => {
    location.replace("./storz.html");
  });
};

const contactTileListener = () => {
  const contactCard = document.getElementById("contact-card");
  contactCard.addEventListener("click", () => {
    location.replace("./contact.html");
  });
};

const ideaTileListener = () => {
  const ideaCard = document.getElementById("idea-card");
  ideaCard.addEventListener("click", () => {
    window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=-7udTko5g0WIEFP4H4GeOyvF9t6kmYZAnEVeps1nibRUOERFMFdLWFgyWFZNVE9WUjRSWkFaTzc1VS4u"
    );
  });
};

const olympusEventListener = () => {
  const olympusDiv = document.getElementById("olympus-card");
  olympusDiv.addEventListener("click", () => {
    location.replace("./olympus.html");
  });
};

const landingPageEventListener = () => {
  const msaButton = document.getElementById("msa-button");
  if (msaButton) {
    msaButton.addEventListener("click", () => {
      location.replace("./msa.html");
    });
  }
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

const defaultEventListener = () => {
  const defaultDiv = document.getElementById("default-card");
  defaultDiv.addEventListener("click", () => {
    location.replace("./default-settings.html");
  });
};

const shareSettingsEventListener = () => {
  const shareSettingsDiv = document.getElementById("contribute-settings-card");
  shareSettingsDiv.addEventListener("click", () => {
    window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=-7udTko5g0WIEFP4H4GeOyvF9t6kmYZAnEVeps1nibRURUk3NEZXQ1lXUDRCMTZPMDZEVTFGTUhXOS4u"
    );
  });
};
