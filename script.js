let currentOperand = "";
let previousOperand = "";
let operator = "";
const operatorArray = ["add", "subtract", "multiple", "divide"];

const numberButton = document.querySelectorAll("[data-number");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    multiDigit(button.textContent);
    currentOperandText.textContent = currentOperand;
  });
});

const multiDigit = function (input) {
  currentOperand += input;
};

const operationButton = document.querySelectorAll("[data-operation");
operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      operator === "add" ||
      operator === "subtract" ||
      operator === "multiply" ||
      operator === "divide"
    ) {
      compute();
      operator = "";
    }

    operator += button.id;
    if (currentOperand != "") {
      previousOperand = currentOperand;
    }
    currentOperand = "";
  });
});

const operation = function (mathFunction, current, previous) {
  let computation;
  if (current === "" || previous === "") return;
  const prev = Number(previous);
  const cur = Number(current);

  switch (mathFunction) {
    case "add":
      computation = prev + cur;
      break;
    case "subtract":
      computation = previous - current;
      console.log(computation);
      break;
    case "multiply":
      computation = prev * cur;
      break;
    case "divide":
      if (cur === 0) {
        alert("Error! Not defined");
        clear();
        return;
      } else {
        computation = prev / cur;
      }
      break;
    default:
      return;
  }
  currentOperand = computation;
  computation = undefined;
  previousOperand = "";
  operator = "";
  currentOperandText.textContent = currentOperand;
};

let compute = function () {
  operation(operator, currentOperand, previousOperand);
};

const currentOperandText = document.querySelector("[data-current-operand]");
currentOperandText.textContent = "0";
// let updateDisplay = function () {
//   currentOperandText.textContent = currentOperand;
// };

let clear = function () {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  currentOperandText.textContent = 0;
};

document.getElementById("clear").onclick = clear;
document.getElementById("equals").onclick = compute;
