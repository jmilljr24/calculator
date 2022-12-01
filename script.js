let currentNumber = 0;
let previousNumber = 0;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const numberButton = document.querySelectorAll("[data-number");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    return button;
  });
});
