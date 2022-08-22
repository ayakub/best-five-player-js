
function addPlayerList(player) {
    if (playerListField.childElementCount < 5) {
        let addList = document.createElement('li');
        addList.appendChild(document.createTextNode(player.innerText));
        playerListField.appendChild(addList);
    } else {
        alert("con't select 5 then more");
        return;

    }
}

//player price
function getCalculateInputTotalCost(elementId) {
    let field = document.getElementById(elementId);
    let perPlayerAmountString = field.value;
    let perPlayerAmount = parseInt(perPlayerAmountString);
    return perPlayerAmount;
}

//function element text 
function getElementTextValueById(elementId) {
    let previousPlayerExpense = document.getElementById('player-expenses');
    let previousPlayerExpenseString = previousPlayerExpense.innerText;
    let previousPlayerExpenseTotal = parseInt(previousPlayerExpenseString);
    return previousPlayerExpenseTotal;
}
function setElementValueById(elementId, value) {
    let totalAmoutSet = document.getElementById(elementId);
    totalAmoutSet.innerText = value;
}

//disabled btn
function disabledButton(playerButton) {
    if (playerListField.childElementCount < 5) {
        playerButton.disabled = 'true';
    }
}
