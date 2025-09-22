const cardEl = document.querySelectorAll(".card");

console.log(buttonEl, cardEl);

cardEl.forEach(function (card) {
  console.log(card);
  const buttonEl = document.querySelector(".qustion");
  buttonEl.addEventListener("click", () => {
    card.classList.toggle("hidden-card");
  });
});
