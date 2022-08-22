//player name
let playerOne = document.getElementById('player-1');
let playerTwo = document.getElementById('player-2');
let playerThree = document.getElementById('player-3');
let playerFour = document.getElementById('player-4');
let playerFive = document.getElementById('player-5');
let playerSix = document.getElementById('player-6');
//player button
let playerButtonOne = document.getElementById('button-1');
let playerButtonTwo = document.getElementById('button-2');
let playerButtonThree = document.getElementById('button-3');
let playerButtonFour = document.getElementById('button-4');
let playerButtonFive = document.getElementById('button-5');
let playerButtonSix = document.getElementById('button-6');
//ul id
let playerListField = document.getElementById('player-list');

function playerTotalCost() {

}
let playerListString = playerListField.childElementCount;
let playerList = parseInt(playerListString);
document.getElementById('per-player-calculate').addEventListener('click', function () {

    //li countElement convert
    let playerListString = playerListField.childElementCount;
    let playerList = parseInt(playerListString);
    let previusPrePlayerAmount = getCalculateInputTotalCost('per-player-field');
    //li element multiflication per player amount
    let newPlayerAmountTotal = playerList * previusPrePlayerAmount; setElementValueById('player-expenses', newPlayerAmountTotal);


    //
});

document.getElementById('calculate-total').addEventListener('click', function () {
    let playerListString = playerListField.childElementCount;
    let playerList = parseInt(playerListString);
    let previusPrePlayerAmount = getCalculateInputTotalCost('per-player-field');

    //li element multiflication per player amount
    let newPlayerAmountTotal = playerList * previusPrePlayerAmount;

    let managerCost = getCalculateInputTotalCost('manager-amount');
    let coachCost = getCalculateInputTotalCost('coach-amount');
    let newTotalcost = managerCost + coachCost + newPlayerAmountTotal;
    setElementValueById('total', newTotalcost);
})



// //button disabled
