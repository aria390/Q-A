const cardEl = document.querySelectorAll(".card");

cardEl.forEach(function (card) {
  const buttonEl = card.querySelector(".qustion");
  const loremEl = card.querySelector(".lorem0");
  buttonEl.addEventListener("click", () => {
    card.classList.toggle("hidden-card");
    loremEl.classList.toggle("lorem0");
    if (buttonEl.textContent === "-") {
      buttonEl.textContent = "+";
    } else {
      buttonEl.textContent = "-";
    }
  });
});
