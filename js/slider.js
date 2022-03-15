"use strict";
const arrowControls = document.querySelectorAll(".arrow-control"),
  sliderControls = document.querySelectorAll(".slider .control li"),
  slider = document.querySelector(".slider-wrapper"),
  slides = document.querySelectorAll(".slider-wrapper .slid");
// slidLenght = slider.querySelectorAll(".slid").length;

let isDragging = false,
  startPosition = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  currentIndex = 0,
  animationID = 0;

// add click event to arrow-control
arrowControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    if (event.currentTarget.id == "previous") {
      if (currentIndex != 0) {
        currentIndex--;
        setSliderPositionByIndex();
      }
    } else {
      if (currentIndex != slides.length - 1) {
        currentIndex++;
        setSliderPositionByIndex();
      }
    }
  });
});

// add click event to ol control
sliderControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    currentIndex = index;
    activeSlidControl(index);
    setSliderPositionByIndex();
  });
});

// add touch event to each slide
slides.forEach((slide, index) => {
  // touch event
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchmove", touchMove);
  slide.addEventListener("touchend", touchEnd);
});

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPosition = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex++;
  if (movedBy > 100 && currentIndex > 0) currentIndex--;
  slider.classList.remove("grabbing");
  setSliderPositionByIndex();
}

function getPositionX(event) {
  return event.type.includes("mouse")
    ? event.pageX
    : event.touches.item(0).clientX;
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPositionByIndex() {
  currentTranslate = currentIndex * -slides.item(0).clientWidth;
  prevTranslate = currentTranslate;
  activeSlidControl(currentIndex);
  setSliderPosition();
}

function activeSlidControl(index) {
  sliderControls.forEach((control) => control.classList.remove("active"));
  sliderControls.item(index).classList.add("active");
}

// function slidTransition(sw) {
//   activeSlidControl(slidIndex - 1, sliderControls);
//   currentTranslate += sw;
//   console.log(slidIndex, "=>", currentTranslate);
// }

// window.onresize = () => {
//   sliderWidth = slider.querySelector(".slid").clientWidth;
//   currentTranslate = (slidIndex - 1) * -sliderWidth;
//   slider.style.transform = `translateX(${currentTranslate}px)`;
// };
