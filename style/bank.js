
// diposited js

document.getElementById('diposite-btn').addEventListener('click', function () {
    // get the current diposite
    const dipositeTotal = document.getElementById('diposited');
    let diposited = dipositeTotal.innerText;


    const total = document.getElementById('total-balance');
    const totalMoney = total.innerText;


    // get the inputed value
    const dipositeField = document.getElementById('dipositing-money');
    const dipositeMoney = dipositeField.value;

    if (dipositeMoney <= 50) {
        alert('Please add money more then 50')
    } else {
        // add the money with previous money
        totalBalance = parseInt(totalMoney) + parseInt(dipositeMoney)
        total.innerText = totalBalance;


        // add the money and show on diposite box
        totalDiposite = parseInt(diposited) + parseInt(dipositeMoney)
        dipositeTotal.innerText = totalDiposite;

        // clear the diposited field
        dipositeField.value = ''
    }


})


// withdrawing the money 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // take previous withdrawed money
    const withdrawedMoney = document.getElementById('withdrawed')
    const withdrawed = parseInt(withdrawedMoney.innerText)

    // take amount from widthdrawed field
    const withdrawField = document.getElementById('withdrawing-money');
    const widthdraw = withdrawField.value;

    // account the total balance
    const totalBalance = document.getElementById('total-balance');
    const total = totalBalance.innerText


    if (total > parseFloat(widthdraw)) {
        withdrawedMoney.innerText = withdrawed + parseInt(widthdraw);


        let substraction = total - widthdraw;
        totalBalance.innerText = substraction


        withdrawField.value = ''
    } else {
        alert('You dont have enough money')
    }

})


// reset button
document.getElementById('reset-btn').addEventListener('click', function () {
    const diposited = document.getElementById('diposited')
    const withdrawed = document.getElementById('withdrawed')
    const totalBalance = document.getElementById('total-balance')
    alert('It will remove your all data')
    diposited.innerText = '00'
    withdrawed.innerText = '00'
    totalBalance.innerText = '00'
})