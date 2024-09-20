// innerHtml
function getAllInputFieldValueById (id){
// const amountInput= document.getElementById('amount-input').value

const findIdValue = parseFloat(document.getElementById(id).value);

return findIdValue;

}

// innerText
function getAllInnerTextById (id){
    const findIdValue = parseFloat(document.getElementById(id).innerText);
    return findIdValue;
}

// first btn 

function getTagsById(id){
    const findTags = document.getElementById(id)
    return findTags;
}