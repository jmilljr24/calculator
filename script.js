let currentOperand = "";
let previousOperand = "";
let operator = "";

//rounding function
Number.prototype.round = function (n) {
  const d = Math.pow(10, n);
  return Math.round((this + Number.EPSILON) * d) / d;
};

//take each digit input and create string
const multiDigit = function (input) {
  if (input === "." && currentOperand.includes(".")) return;
  currentOperand += input;
};

//Number input to string function and set display to current number
const numberButton = document.querySelectorAll("[data-number");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    multiDigit(button.textContent);
    currentOperandText.textContent = currentOperand;
  });
});

//Operation buttons will set operator and/or compute and set next operator
const operationButton = document.querySelectorAll("[data-operation");
operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      //Checks if operator is already selected
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
      // wont set previous operand is current is blank
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
  currentOperand = computation.round(10); //result rounded to 10 decimals
  computation = undefined;
  previousOperand = "";
  operator = "";
  currentOperandText.textContent = currentOperand;
};

let compute = function () {
  operation(operator, currentOperand, previousOperand);
};

const currentOperandText = document.querySelector("[data-current-operand]");
currentOperandText.textContent = "0"; //default number displayed

let clear = function () {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  currentOperandText.textContent = 0;
};

let posNeg = function () {
  if (currentOperand === "") return;
  currentOperand = Number(currentOperand) * -1;
  currentOperandText.textContent = currentOperand;
};

document.getElementById("clear").onclick = clear;
document.getElementById("equals").onclick = compute;
document.getElementById("posneg").onclick = posNeg;
