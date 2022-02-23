"use strict";
const menuBtn = document.querySelector("header .navbar .brand .menu");
const categoryBtn = document.getElementById("category");
const megamenu = document.getElementById("megamenu");
const nextSlid = document.querySelector(".arrow-control .bx-chevron-right");
const previousSlid = document.querySelector(".arrow-control .bx-chevron-left");
const slids = document.querySelectorAll(".slider-wrapper .slid");
const slidControls = document.querySelectorAll(".slider .control li");
// const slider = document.querySelector(".slider-wrapper");

//show megamenu
menuBtn.addEventListener("click", () => megamenu.classList.toggle("active"));
categoryBtn.addEventListener("click", () =>
  megamenu.classList.toggle("active")
);

// slider arrow control
nextSlid.addEventListener("click", () => {
  let index = indexOfActiveSlid(slids);
  next(index, slids);
  index == slids.length - 1 ? (index = 0) : index++;
  activeSlidControl(index, slidControls);
});

previousSlid.addEventListener("click", () => {
  let index = indexOfActiveSlid(slids);
  previous(index, slids);
  index == 0 ? (index = slids.length - 1) : index--;
  activeSlidControl(index, slidControls);
});

// slider controls
slidControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    activeSlidControl(index, slidControls);
    slids.item(indexOfActiveSlid(slids)).classList.remove("active");
    slids.item(index).classList.add("active");
  });
});

function next(index, slidElements) {
  slidElements.item(index).classList.remove("active");
  if (slidElements.item(index).nextElementSibling)
    slidElements.item(index).nextElementSibling.classList.add("active");
  else slidElements.item(0).classList.add("active");
}

function previous(index, slidElements) {
  slidElements.item(index).classList.remove("active");
  if (slidElements.item(index).previousElementSibling)
    slidElements.item(index).previousElementSibling.classList.add("active");
  else slidElements.item(slidElements.length - 1).classList.add("active");
}

function indexOfActiveSlid(slids) {
  let indexElement = 0;
  slids.forEach((element, index) => {
    if (element.className.includes("active")) indexElement = index;
  });
  return indexElement;
}

function activeSlidControl(index, controls) {
  controls.forEach((control) => control.classList.remove("active"));
  controls.item(index).classList.add("active");
}
