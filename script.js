const higherDisplay = document.querySelector('#higher');
const lowerDisplay = document.querySelector('#lower');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#delete');
let firstNumber;
let secondNumber = 0;
let operatorValue = '';
let displayValue = '';
let solved = false;

equals.addEventListener('click', evaluate); 
clear.addEventListener('click', clearAll);
remove.addEventListener('click', reduce);

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
  solved = false;
  operatorValue = operator.textContent;
  if (firstNumber === undefined && displayValue === '') {
    firstNumber = 0;
  } else if (firstNumber === undefined){
    firstNumber = parseFloat(displayValue);
  } else {
    if (displayValue === '') {
      displayValue = 0;
    }
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(firstNumber, secondNumber, operatorValue);
  }
  higherDisplay.textContent = `${firstNumber} ${operatorValue}`;
  lowerDisplay.textContent = firstNumber;
  displayValue = '';
};

function evaluate() {
  if (solved === true) {
    return;
  } else if (displayValue != '' && firstNumber != undefined) {
    secondNumber = parseFloat(displayValue);
    lowerDisplay.textContent = operate(firstNumber, secondNumber, operatorValue);
    higherDisplay.textContent += ` ${secondNumber} =`;
    solved = true;
}};

  function clearAll() {
    firstNumber = undefined;
    displayValue = '';
    higherDisplay.textContent = '';
    lowerDisplay.textContent = '0';
    console.log('hi');
  };

  function reduce() {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    if (displayValue === '') {
      displayValue = '0';
    } 
    lowerDisplay.textContent = displayValue;
  };