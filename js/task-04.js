let counterValue = 0;
const resultCounterValue = document.querySelector("#value");
function increment() {
  counterValue += 1;
  resultCounterValue.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  resultCounterValue.textContent = counterValue;
}
const btnIncrement = document.querySelector("button[data-action='increment']");
const btnDecrement = document.querySelector("button[data-action='decrement']");
btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
