// get the fieldValues then return to their function
function fieldTextValue(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldText = field.innerText;
    const fieldValue = parseFloat(fieldText);
    return fieldValue;
}
// give input
function getInputValue(inputField) {
    const input = document.getElementById(inputField);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}
// print deposit-withdraw amount
function getTotal(amountField, inputValue) {
    const amountValue = fieldTextValue(amountField);
    const newTotal = amountValue + inputValue;
    document.getElementById(amountField).innerText = newTotal;
}
// calculate & print balance
function updateBalance(inputValue, isAdd) {
    const balanceValue = fieldTextValue('balance');
    let newBalance = 0;
    if (isAdd == true) {
        newBalance = balanceValue + inputValue;
    }
    else {
        newBalance = balanceValue - inputValue;
    }
    document.getElementById('balance').innerText = newBalance;
}
document.getElementById('deposit-submit').addEventListener('click', function () {
    const inputValue = getInputValue('deposit-input');
    if (inputValue > 0) {
        getTotal('deposit-amount', inputValue);
        updateBalance(inputValue, true);
    }
    else {
        alert('Invalid input! Please Enter a valid deposit amount');
    }
})
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const inputValue = getInputValue('withdraw-input');
    const balance = fieldTextValue('balance');
    if (inputValue > 0 && inputValue <= balance) {
        getTotal('withdraw-amount', inputValue);
        updateBalance(inputValue, false);
    }
    else if (inputValue > balance) {
        alert('Insufficent balance! You cannot withdraw');
    }
    else {
        alert('Invalid input! Please Enter a valid withdrawal amount');
    }
})