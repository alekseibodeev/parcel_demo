const countDisplay = document.querySelector("#count");
const countUpButton = document.querySelector("#count-up");

let count = 0;

const renderCount = (count) => {
  countDisplay.textContent = count;
};

const incrementCount = () => ++count;

countUpButton.addEventListener("click", () => {
  renderCount(incrementCount());
});
