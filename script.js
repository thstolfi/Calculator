function sNumber(number) {
    document.getElementById('display').value += number;
}

function sOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}