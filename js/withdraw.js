/* 
1. add withdraw button event handler.
2. get withdraw amount by using getInputFieldValue function.
3. get previous withdraw amount by using getElementValueById function.
4. calculate new withdraw total and set the value.
4-5. set new withdraw total by using setTextElementValueById function.
5. get previous balnce total by getElementValueById function.


*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextELementValueById('withdraw-total');
    //calculate new balance total
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextELementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal)
})