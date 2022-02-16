
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    const depositOutput = document.getElementById('deposit-output');
    

    // deposit update

    const previousDepositAmount =  depositOutput.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositOutput.innerText = newDepositTotal;
    depositInput.value = '';

    // Balance update
    const totalBalance = document.getElementById('total-Balance');
    const previousTotalBalance =  totalBalance.innerText;
    const newTotalBalance = parseFloat(previousTotalBalance) + parseFloat(newDepositAmount);
    totalBalance.innerText = newTotalBalance;
    depositInput.value = '';
})


const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const newwithdrawAmount = withdrawInput.value;
    const totalWithdraw = document.getElementById('total-withdraw');
    

    // Withdraw update

    const previousWithdrawAmount =  totalWithdraw.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newwithdrawAmount);
    totalWithdraw.innerText = newWithdrawTotal;
    withdrawInput.value = '';

    // Balance update
    const totalWithdrawBalance = document.getElementById('total-Balance');
    const previousTotalBalanceWithdraw =  totalWithdrawBalance.innerText;
    const newTotalBalanceWithdraw = parseFloat(previousTotalBalanceWithdraw) - parseFloat(newwithdrawAmount);
    totalWithdrawBalance.innerText = newTotalBalanceWithdraw;
    withdrawInput.value = '';
})