const itemsCount = document.querySelectorAll(".items-count");
// count totale article
itemsCount.forEach((count) => {
  count.innerHTML = document
    .querySelectorAll(".basket-details .items .item")
    .length.toString();
});
