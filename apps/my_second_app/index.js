const countDisplay = document.querySelector("#count");
const countUpButton = document.querySelector("#count-up");

let count = 0;

const renderCount = (count) => {
  countDisplay.textContent = count;
};

const incrementCount = () => ++count;

renderCount(incrementCount());

countUpButton.addEventListener("click", () => {
  renderCount(incrementCount());
});
