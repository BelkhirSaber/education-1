"use strict";
const tabLinks = document.querySelectorAll(".tab-link li");
const tabs = document.querySelectorAll(".tab");
const filter = document.querySelector(".all-cours-content .filter");
const toggleFilter = document.querySelector(
  ".all-cours-content .all-cours-head .menu > button"
);
const btnFilters = document.querySelectorAll(
  ".all-cours-content .filter-item .filter-title"
);

// tab link
tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.className.includes("active")) {
      tabLinks.forEach((el) => el.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));
      target.classList.add("active");
      document.getElementById(target.dataset.id).classList.add("active");
    }
  });
});

// filter section
toggleFilter.addEventListener("click", () => filter.classList.toggle("active"));
btnFilters.forEach((filter) => {
  filter.addEventListener("click", (event) => {
    event.target
      .closest(".filter-item")
      .querySelector(".item-content")
      .classList.toggle("open");
  });
});
