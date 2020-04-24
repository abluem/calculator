// ADD DOM MANIPULATION TO MAKE CLEARING POSSIBLE:
// - Create element (create textbox?), apeend child and find a way to append numbers
// - Keep code or append user input???
// - CLear button removes child and clears arrays

let expressionArray = [];
let operatorArray = [];

let addition = (x, y) => x + y;

let subtraction = (x, y) => x - y;

let multiplication = (x, y) => x * y;

let division = (x, y) => x / y;

function operate(x, operator, y) {
    switch (operator) {
        case '+':
            return addition(x, y);
            break;
        case '-':
            return subtraction(x, y);
            break;
        case '*':
            return multiplication(x, y);
            break;
        case '/':
            return division(x, y);
            break;
        default:
            return "ERROR";
    }
}

let addToDisplay = (char) => document.querySelector('#display').value = char;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.value == '+' || button.value == '-' || button.value == '*' || button.value == '/') {
        addToDisplay(button.value);
        addToExpression(button.value);
        operatorArray.push(button.value);
    } else if (button.value != '=' && button.value != 'clear') {
        addToDisplay(button.value);
        addToExpression(button.value);
    } else if (button.value == '=') {
        let expressionValues = convertExpression(expressionArray);
        let answer = operate(expressionValues.x, expressionValues.operator, expressionValues.y);
        addToDisplay(answer);
    } else {
        addToDisplay(' ');
    }
  });
});

//document.querySelector('#clear').addEventListener('click', () => {
//    addToDisplay(' ');
//});

//document.querySelector('#equ').addEventListener('click', (e) => {
//    let solution = operate(x, operator, y);
//    addToDisplay(solution);
//});

let addToExpression = (num) => expressionArray.push(num);

function convertExpression(str) {
    let operatorSliceValue = expressionArray.indexOf(operatorArray[0]);
    let xArray = str.slice(0, operatorSliceValue);
    let yArray = str.slice((operatorSliceValue + 1));
    let x = parseInt(xArray.join(''));
    let y = parseInt(yArray.join(''));
    let operator = operatorArray[0];
    return {
        x: x,
        y: y,
        operator: operator
    };
}