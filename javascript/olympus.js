document.addEventListener("DOMContentLoaded", () => {
  olympusLandingListener();
});

const olympusLandingListener = () => {
  const olympusHomeIcon = document.getElementById("olympus-home-icon");
  olympusHomeIcon.addEventListener("click", () => {
    location.replace("./index.html");
  });
};
