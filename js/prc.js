document.getElementById('addMoney-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const addMouny = getAllInputValue('amount-input');
    const addMounyPin = getAllInputValue('addMoney-pin');
    console.log(addMouny, addMounyPin);
})