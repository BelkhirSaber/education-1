"use strict";
const pay1 = document.getElementById("pay1");
const pay2 = document.getElementById("pay2");
// show payment method
pay1.addEventListener("click", () => {
  addPaymentActive(0);
});

pay2.addEventListener("click", () => {
  addPaymentActive(1);
});

function addPaymentActive(index) {
  const payments = document.querySelectorAll(".payment");
  payments.forEach((pay) => pay.classList.remove("active"));
  if (payments.length > index) payments.item(index).classList.add("active");
}
