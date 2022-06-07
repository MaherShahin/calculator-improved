const numberButtons = document.querySelectorAll('.num')
console.log(numberButtons);
const operButtons = document.querySelectorAll('.oper')
const deleteButton = document.querySelector('.delete')
const allclearbutton = document.querySelector('.all-clear')
const equalsButton = document.querySelector('.equals')

let previousOperand = document.querySelector('.previous-operand');
let currentOperand = document.querySelector('.current-operand');
let operator = document.querySelector('.operator');

// mathematical functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// functionality for adding the number to the current operand
numberButtons.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        if (currentOperand.innerText.includes('.') && numBtn.innerText == '.') return; 
        if (currentOperand.innerText == '0') currentOperand.innerText = numBtn.innerText;
        currentOperand.innerText += numBtn.innerText;
    });
});

// All Clear

function clear() {
    previousOperand.innerText = '';
    currentOperand.innerText = '';
    operator.innerText = '';
}
allclearbutton.addEventListener('click', clear);


// Delete Button

function deleteLastChar() {
    if (currentOperand.innerText == '0') return;
    currentOperand.innerText = currentOperand.innerText.slice(0,-1);
}
deleteButton.addEventListener('click' , deleteLastChar);



// Operator Button Section
operButtons.forEach(oper => {
    oper.addEventListener('click',()=>{
        operBtnLogic(oper);
    })   
});

function operBtnLogic(oper) {
    if (previousOperand.innerText !== '' && currentOperand.innerText !== '') {
        previousOperand.innerText = operate(operator.innerText,Number(previousOperand.innerText),Number(currentOperand.innerText));
        currentOperand.innerText = '';
        return;
    }
    if (currentOperand.innerText !== ''){
        previousOperand.innerText = currentOperand.innerText;
        currentOperand.innerText = '';  
    }
    operator.innerText = oper.innerText; 
}

function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '÷':
            return divide(num1,num2);
    }
}

// Equals Button Logic
equalsButton.addEventListener('click' , () => {
    if (!previousOperand.innerText || !currentOperand.innerText || !operator.innerText) return;
    equalsBtnLogic();
})

function equalsBtnLogic(){
    previousOperand.innerText = operate(operator.innerText,Number(previousOperand.innerText),Number(currentOperand.innerText));
    currentOperand.innerText = '';
    operator.innerText = '';
}


