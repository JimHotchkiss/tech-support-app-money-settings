document.addEventListener("DOMContentLoaded", function () {
  navToggle();
});
// Navbar functionality
function navToggle() {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.classList.toggle("change");
  });
}
