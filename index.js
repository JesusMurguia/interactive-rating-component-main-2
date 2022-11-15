let form = document.getElementById("form");
let selected = document.getElementById("selected-text");
let steps = document.getElementsByClassName("step");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  value = evt.target.rating.value;
  if (!value) return;
  selected.innerText = `You selected ${value} out of 5`;
  [...steps].map((step) => step.classList.toggle("hidden"));
});
