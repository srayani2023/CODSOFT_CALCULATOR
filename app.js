const display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let prevValue = null;
function updateDisplay() {
    display.textContent = currentInput;
}
function NumberClick(number) {
    if (currentInput === "0" || operator === "=") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}
function OperatorClick(op) {
    if (operator !== "=") {
        calculateResult();
    }
    operator = op;
    prevValue = currentInput;
    currentInput = "0";
}
function calculateResult() {
    const currentValue = parseFloat(currentInput);
    const prevVal = parseFloat(prevValue);

    if (operator === "+") {
        currentInput = (prevVal + currentValue).toString();
    } else if (operator === "-") {
        currentInput = (prevVal - currentValue).toString();
    } else if (operator === "*") {
        currentInput = (prevVal * currentValue).toString();
    } else if (operator === "/") {
        currentInput = (prevVal / currentValue).toString();
    }

    operator = "=";
    updateDisplay();
}
function ClearClick() {
    currentInput = "0";
    operator = null;
    prevValue = null;
    updateDisplay();
}
document.getElementById("clear").addEventListener("click", ClearClick);
document.getElementById("equals").addEventListener("click", calculateResult);
document.getElementById("zero").addEventListener("click", () => NumberClick("0"));
document.getElementById("subtract").addEventListener("click", () =>OperatorClick("-"));
document.getElementById("one").addEventListener("click", () => NumberClick("1"));
document.getElementById("two").addEventListener("click", () => NumberClick("2"));
document.getElementById("three").addEventListener("click", () => NumberClick("3"));
document.getElementById("divide").addEventListener("click", () => OperatorClick("/"));
document.getElementById("four").addEventListener("click", () => NumberClick("4"));
document.getElementById("five").addEventListener("click", () => NumberClick("5"));
document.getElementById("six").addEventListener("click", () => NumberClick("6"));
document.getElementById("multiply").addEventListener("click", () => OperatorClick("*"));
document.getElementById("seven").addEventListener("click", () => NumberClick("7"));
document.getElementById("eight").addEventListener("click", () => NumberClick("8"));
document.getElementById("nine").addEventListener("click", () => NumberClick("9"));
document.getElementById("add").addEventListener("click", () => OperatorClick("+"));
updateDisplay();