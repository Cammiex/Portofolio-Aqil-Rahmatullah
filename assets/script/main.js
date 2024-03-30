var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.getElementById("header-container").offsetHeight;
var navbar = document.getElementById("header-container");

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;

  // Scroll down
  if (currentScroll > lastScrollTop + delta) {
    navbar.style.top = -navbarHeight + "px";
  }
  // Scroll up
  else if (currentScroll < lastScrollTop - delta) {
    navbar.style.top = 0;
  }

  lastScrollTop = currentScroll;
});
