const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let val = 0;

increase.addEventListener("click", () => {
  val += 1;
  counter.textContent = val;
});

decrease.addEventListener("click", () => {
  val -= 1;
  counter.textContent = val;
});

reset.addEventListener("click", () => {
  val = 0;
  counter.textContent = val;
});
