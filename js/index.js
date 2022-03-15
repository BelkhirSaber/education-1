"use strict";
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("header .navbar .brand .menu");
const categoryBtn = document.getElementById("category");
const megamenu = document.getElementById("megamenu");

//show megamenu
menuBtn.addEventListener("click", () => megamenu.classList.toggle("active"));
categoryBtn.addEventListener("click", (event) => {
  event.preventDefault();
  megamenu.classList.toggle("active");
});

window.onscroll = () => {
  if (scrollY > navbar.offsetTop) {
    navbar.classList.add("fixed-top");
    if (screen.width < 992) navbar.parentElement.style.height = "120px";
  } else {
    navbar.classList.remove("fixed-top");
    if (screen.width > 992) navbar.parentElement.style.height = "150px";
  }

  if (location.pathname.includes("details")) {
    const action = document.querySelector(".details .action .info");
    if (screen.width >= 992) {
      if (scrollY > action.offsetTop) action.classList.add("fixed-top");
      else action.classList.remove("fixed-top");
    }
  }
};

window.onresize = () => {
  if (screen.width < 992) navbar.parentElement.style.height = "120px";
  else navbar.parentElement.style.height = "150px";

  // responsive slider where window resize
  if (location.pathname == "/" || location.pathname == "/index.html")
    setSliderPositionByIndex();
};
