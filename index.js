let numbers = document.getElementsByClassName("number");
let submitBtn = document.getElementById("submit");
let cards = document.querySelectorAll(".card");

[...numbers].forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    [...numbers].map((btn) => btn.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  let selected = document.querySelector(".number.selected");
  if (!selected) {
    alert("Select a rating!");
    return;
  }
  document.getElementById(
    "selected-text"
  ).innerText = `You selected ${selected.innerText} out of ${numbers.length}`;

  [...cards].map((card) => card.classList.toggle("hidden"));
});
