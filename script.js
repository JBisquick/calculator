const higherDisplay = document.querySelector('#higher');
const lowerDisplay = document.querySelector('#lower');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#delete');
const negative = document.querySelector('#negative');
const decimal = document.querySelector('#decimal');
let firstNumber;
let secondNumber = 0;
let operatorValue = '';
let displayValue = '';
let solved = false;

window.addEventListener('keydown', keydownInputs)
equals.addEventListener('click', evaluate); 
clear.addEventListener('click', clearAll);
remove.addEventListener('click', reduce);
negative.addEventListener('click', multiplyNegative);
decimal.addEventListener('click', addDecimal);

numbers.forEach((number) => {
  number.addEventListener('click', () => {appendNumber(number.textContent)});
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {appendOperator(operator.textContent)});
});

function add(a, b) {
  return Math.round((a + b) * 1000) / 1000;
};

function subtract(a, b) {
  return Math.round((a - b) * 1000) / 1000;
};

function multiply(a, b) {
  return Math.round((a * b) * 1000) / 1000;
};

function divide(a, b) {
  return Math.round((a / b) * 1000) / 1000;
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
      if (b === 0) {
        alert('You can\'t divide by a negative number!!!');
        return firstNumber;
      }
        return divide(a, b);
  }
};

function appendNumber(number) {
  // Prevents display number from starting with a 0
  if ((lowerDisplay.textContent === '0' || displayValue === '') && number === '0') {
    lowerDisplay.textContent = '0';
  } else {
    displayValue += number;
    lowerDisplay.textContent = displayValue;
  }
};

function appendOperator(operator) {
  solved = false;
  if (firstNumber === undefined && displayValue === '') {
    firstNumber = 0;
  } else if (firstNumber === undefined){
    firstNumber = parseFloat(displayValue);
  } else {
    if (displayValue === '') displayValue = 0;
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(firstNumber, secondNumber, operatorValue);
  }
  operatorValue = operator;
  higherDisplay.textContent = `${firstNumber} ${operatorValue}`;
  lowerDisplay.textContent = firstNumber;
  displayValue = '';
};

function evaluate() {
  if (lowerDisplay.textContent === '0' && operatorValue === '/') {
    alert('You can\'t divide by a negative number!!!');
    return;
  } else if (solved === true) {
    return;
  } else if (displayValue != '' && firstNumber != undefined) {
    secondNumber = parseFloat(displayValue);
    displayValue = ''
    lowerDisplay.textContent = operate(firstNumber, secondNumber, operatorValue);
    higherDisplay.textContent += ` ${secondNumber} =`;
    solved = true;
  }
};

function clearAll() {
  firstNumber = undefined;
  displayValue = '';
  higherDisplay.textContent = '';
  lowerDisplay.textContent = '0';
};

function reduce() {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  if (displayValue === '' || displayValue === '-') {
    displayValue = '';
    lowerDisplay.textContent = 0;
  } else {
    lowerDisplay.textContent = displayValue;
  }
};

function multiplyNegative() {
  if (displayValue === '' || displayValue === '0') {
    return;
  } else if (displayValue.includes('-')) {
    displayValue = displayValue.slice(1, displayValue.length);
  } else {
    displayValue = '-' + displayValue;
  }
  lowerDisplay.textContent = displayValue;
};

function addDecimal() {
  if (displayValue === '') {
    displayValue = '0.';
    lowerDisplay.textContent = displayValue;
  } else if (displayValue.includes('.')) {
    return;
  } else {
    displayValue += ".";
    lowerDisplay.textContent = displayValue;
  }
};

function keydownInputs(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === '*' || e.key === '/' || e.key === '+' || e.key === '-') appendOperator(e.key);
  if (e.key === 'Enter' || e.key === '=') evaluate();
  if (e.key === 'c') clearAll();
  if (e.key === 'd') reduce();
  if (e.key === 'n') multiplyNegative();
  if (e.key === '.') addDecimal();
};