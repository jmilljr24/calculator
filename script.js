let currentOperand = "";
let previousOperand = "";
let operator = "";

const numberButton = document.querySelectorAll("[data-number");
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    multiDigit(button.textContent);
  });
});

const multiDigit = function (input) {
  currentOperand += input;
  console.log(currentOperand);
};

const operationButton = document.querySelectorAll("[data-operation");
operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    // document.getElementById(button.id).disabled = true;
    // operation(button.id, currentOperand, previousOperand);
    // document.getElementById(button.id).disabled = false;
    operator += button.id;
    previousOperand = currentOperand;
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
      computation = prev / cur;
      break;
  }
  currentOperand = computation;
  computation = undefined;
  previousOperand = "";
  operator = "";
  updateDisplay;
};

// const equalsButton = document.querySelectorAll("[data-equals");
// equalsButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     compute();
//   });
// });

let compute = function () {
  operation(operator, currentOperand, previousOperand);
};

document.getElementById("equals").onclick = compute;

const currentOperandText = document.querySelector("[data-current-operand]");
