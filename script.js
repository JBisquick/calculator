const numbers = document.querySelectorAll('.number');
const lowerDisplay = document.querySelector('#lower');
let firstNumber = 12;
let secondNumber = 6;
let operator = '/';
let displayValue = '';

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

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (lowerDisplay.textContent === '0' && number.textContent === '0') {
      lowerDisplay.textContent = '0';
    } else {
      displayValue += number.textContent;
      lowerDisplay.textContent = displayValue;
    }
  });
});