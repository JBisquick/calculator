const higherDisplay = document.querySelector('#higher');
const lowerDisplay = document.querySelector('#lower');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
let firstNumber = 0;
let secondNumber = 0;
let operatorValue = '';
let displayValue = '';

equals.addEventListener('click', () => {
  secondNumber = parseFloat(displayValue);
  lowerDisplay.textContent = operate(firstNumber, secondNumber, operatorValue);
  higherDisplay.textContent += ` ${secondNumber} =`
}); 

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    // Prevents display number from starting with a 0
    if (lowerDisplay.textContent === '0' && number.textContent === '0') {
      lowerDisplay.textContent = '0';
    } else {
      displayValue += number.textContent;
      lowerDisplay.textContent = displayValue;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    operatorValue = operator.textContent;
    higherDisplay.textContent = `${displayValue} ${operatorValue}`;
    firstNumber = parseFloat(displayValue);
    displayValue = ''
  });
});

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(a, b, operator) {
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
};
