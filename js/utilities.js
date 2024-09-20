// innerHtml
function getAllInputFieldValueById(id) {
    const findIdValue = parseFloat(document.getElementById(id).value);
    return findIdValue;
}

// innerText
function getAllInnerTextById(id) {
    const findIdValue = parseFloat(document.getElementById(id).innerText);
    return findIdValue;
}

// first btn 

function getTagsById(id) {
    document.getElementById('hidden-addMoney-btn').classList.add('hidden')
    document.getElementById('hidden-cash-out-btn').classList.add('hidden')
    document.getElementById('tranjection-text').classList.add('hidden')
    const findTags = document.getElementById(id).classList.remove('hidden');
    return findTags;
}