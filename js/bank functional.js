function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const newAmount = parseFloat(inputText);
    input.value = '';
    return newAmount;
}
function updateTotalField(amountId, newAmount) {
    const amount = document.getElementById(amountId);
    const amountText = amount.innerText;
    const previousAmount = parseFloat(amountText);
    amount.innerText = previousAmount + newAmount;
}
function getCurrentBalance() {
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    return previousBalance;
}
function updateBalance(balanceId, newAmount, isAdd) {
    const balance = document.getElementById(balanceId);
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = previousBalance + newAmount;
    }
    else {
        balance.innerText = previousBalance - newAmount;
    }
}

document.getElementById('deposit-submit').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-amount', newDepositAmount);
        updateBalance('balance', newDepositAmount, true);
    }
    else {
        alert('Invalid Input! Please Enter valid amount to deposit');
    }
});
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        updateTotalField('withdraw-amount', newWithdrawAmount);
        updateBalance('balance', newWithdrawAmount, false);
    }
    else {
        if (newWithdrawAmount > currentBalance) {
            alert('Insufficient balance! Sorry you cannot withdraw');
        }
        else {
            alert('Invalid Input! Please Enter valid amount to withdraw');
        }
    }
});