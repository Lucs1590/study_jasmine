var num1 = '';
var num2 = '';
var res = '';
var operation = '';
var txtInput = document.getElementById('result');
txtInput.value = '0';

function setOperation(value) {
    calc();
    operation = value;
}

function addNumber(numb) {
    if (operation === '') {
        num1 = getNumber(numb, num1);
    } else {
        num2 = getNumber(numb, num2);
    }
}

function getNumber(newNumb, currentNumb) {
    if (currentNumb.length == 10 || (newNumb === '.' && currentNumb.indexOf('.') >= 0)) {
        return;
    }
    if (newNumb === '.' && (txtInput.value === '0' || currentNumb === '')) {
        currentNumb = '0';
    }
    txtInput.value = currentNumb + newNumb;
    return txtInput.value;
}

function clear() {
    num1 = '';
    num2 = '';
    operation = '';
    txtInput.value = '0';
}

function calc() {
    if (num1 === '' || num2 === '' || operation === '') {
        return;
    }
    var res = '';
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operation) {
        case '+':
            res = Calculator.sum(num1, num2);
            break;
        case '-':
            res = Calculator.subtract(num1, num2);
            break;
        case '/':
            res = Calculator.divide(num1, num2);
            break;
        case '*':
            res = Calculator.multiply(num1, num2);
            break;
    }
    res = res.toString();
    txtInput.value = res.length <= 10 ? res : res.substr(0, 10);
    num1 = txtInput.value;
    num2 = '';
    operation = '';
}