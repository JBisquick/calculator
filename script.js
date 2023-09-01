const higherDisplay = document.querySelector('#higher');
const lowerDisplay = document.querySelector('#lower');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let firstNumber;
let secondNumber = 0;
let operatorValue = '';
let displayValue = '';

equals.addEventListener('click', evaluate); 
clear.addEventListener('click', clearAll)

numbers.forEach((number) => {
  number.addEventListener('click', () => {appendNumber(number)});
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {appendOperator(operator)});
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

function appendNumber(number) {
  // Prevents display number from starting with a 0
  if (lowerDisplay.textContent === '0' && number.textContent === '0') {
    lowerDisplay.textContent = '0';
  } else {
    displayValue += number.textContent;
    lowerDisplay.textContent = displayValue;
  }
};

function appendOperator(operator) {
  operatorValue = operator.textContent;
  if (firstNumber === undefined && displayValue === '') {
    firstNumber = 0;
  } else if (firstNumber === undefined){
    firstNumber = parseFloat(displayValue);
  } else {
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(firstNumber, secondNumber, operatorValue);
  }
  higherDisplay.textContent = `${firstNumber} ${operatorValue}`;
  lowerDisplay.textContent = firstNumber;
  displayValue = '';
};

function evaluate() {
  if (displayValue != '' && firstNumber != undefined) {
    secondNumber = parseFloat(displayValue);
    lowerDisplay.textContent = operate(firstNumber, secondNumber, operatorValue);
    higherDisplay.textContent += ` ${secondNumber} =`;
  }};

  function clearAll() {
    firstNumber = undefined;
    displayValue = '';
    higherDisplay.textContent = '';
    lowerDisplay.textContent = '0';
  };