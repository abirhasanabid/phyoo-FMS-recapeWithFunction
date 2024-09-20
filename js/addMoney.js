// add money btn
document.getElementById('addMoney-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const addMoney = getAllInputFieldValueById('amount-input');
    const addMoneyPin = getAllInputFieldValueById('addMoney-pin');
    let mainBalance = getAllInnerTextById('main-balance');


    if (addMoneyPin === 5555) {
        const newMainBalance = mainBalance + addMoney;
        document.getElementById('main-balance').innerText = newMainBalance;
    } else {
        alert('full fuill all the requriments')
    }
})

// first add money btn
document.getElementById('first-addMoney-btn').addEventListener('click', function () {
    const hiddenAddMoneySection = getTagsById('hidden-addMoney-btn')
})

// cash out btn
document.getElementById('cashOut-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmmount = getAllInputFieldValueById('CashOutamount-input');
    const cashOutPin = getAllInputFieldValueById('cashOut-pin');
    const mainBalance = getAllInnerTextById('main-balance');

    if (cashOutPin === 5555) {
        const newBalance = mainBalance - cashOutAmmount;
        document.getElementById('main-balance').innerText = newBalance;
        if (newBalance < 0) {
            document.getElementById('main-balance').innerText = 'Invalid Number';
            document.getElementById('balance-text-id').innerHTML = '';
        }
    } else {
        alert('ful-fill all the requriements');
    }
})

// first cash out btn
document.getElementById('first-cashOut-btn').addEventListener('click', function () {
    const hiddenCashOutSection = getTagsById('hidden-cash-out-btn')
})

// tranjection
document.getElementById('tranjection-btn').addEventListener('click', function () {
    const tranjectionText = getTagsById('tranjection-text');

})