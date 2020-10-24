document.addEventListener("DOMContentLoaded", () => {
  contactNavLandingListener();
});

const contactNavLandingListener = () => {
  const contactHomeIcon = document.getElementById("contact-home-icon");
  contactHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
