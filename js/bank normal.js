document.getElementById('deposit-submit').addEventListener('click', function () {
    console.log('Deposit button clicked');

    //get input value
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const newDepositAmount = parseFloat(depositText);

    // get current deposit
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountText = depositAmount.innerText;
    const previousDepositAmount = parseFloat(depositAmountText);

    // total deposit value

    depositAmount.innerText = previousDepositAmount + newDepositAmount;

    //clear input field
    depositInput.value = '';

    //update balance field

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);

    // get total balance

    balance.innerText = previousBalance + newDepositAmount;
});

document.getElementById('withdraw-submit').addEventListener('click', function () {
    console.log('Withdraw button clicked');

    //get input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawText);

    // get current withdraw
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const previouswithdrawAmount = parseFloat(withdrawAmountText);

    // total withdrawal value

    withdrawAmount.innerText = previouswithdrawAmount + newWithdrawAmount;

    //clear input field
    withdrawInput.value = '';

    //update balance field

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);

    // get total balance

    balance.innerText = previousBalance - newWithdrawAmount;


});