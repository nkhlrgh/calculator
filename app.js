const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let value;
let calculation = [];
let accumulatedCalculation;

function calculate(button) {
    value = button.textContent;
    if(value === "CLEAR") {
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumulatedCalculation);
    } else {
        calculation.push(value);
        accumulatedCalculation = calculation.join('')
        screenDisplay.textContent = accumulatedCalculation;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));