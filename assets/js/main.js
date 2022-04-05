// Generates a new deck
function getDeck() {
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let deck = new Array();

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

// shuffle function used to shuffle our deck
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
}

// Saves new deck to a variable
let GameDeck = getDeck()

// shuffles our deck 5 times

// draws the last card from our deck
function drawRandomCard() {
    shuffle(GameDeck);
    return GameDeck.pop();
}

// saves our drawn card to variable
let card1;
let card2;
let cards = [];


function startGame() {
    window.onerror = function () {
        location.reload();
    }

    document.getElementById("two").disabled = false;
    card1 = drawRandomCard();
    card2 = drawRandomCard();

    if (card1['Value'] === 'J' || card1['Value'] === 'Q' || card1['Value'] === 'K') {
        card1['Value'] = 10;
    }
    if (card1['Value'] === 'A') {
        card1['Value'] = 1
    }
    if (card2['Value'] === 'J' || card2['Value'] === 'Q' || card2['Value'] === 'K') {
        card2['Value'] = 10;
    }
    if (card2['Value'] === 'A') {
        card2['Value'] = 1
    }
    renderGame()
}

function renderGame() {
    document.getElementById("Question").innerHTML = `Draw another card?`;
    document.getElementById("Cards").innerHTML = `Cards: ${card1['Value']} ${card2['Value']}`;
    document.getElementById("Sum").innerHTML = `Sum: ${parseInt(card1['Value']) + parseInt(card2['Value'])}`;
}



function newCard() {

    window.onerror = function () {
        location.reload();
    }

    let newerCard = drawRandomCard();
    cards.push(newerCard['Value'])
    document.getElementById("Cards").innerHTML += ` ${newerCard['Value']}`;
    if (newerCard['Value'] === 'J' || newerCard['Value'] === 'Q' || newerCard['Value'] === 'K') {
        newerCard['Value'] = 10;
    }
    if (newerCard['Value'] === 'A') {
        newerCard['Value'] = 1
    }
    if (newerCard['Value'] === 'J' || newerCard['Value'] === 'Q' || newerCard['Value'] === 'K') {
        newerCard['Value'] = 10;
    }
    if (newerCard['Value'] === 'A') {
        newerCard['Value'] = 1
    }
    let sum = document.getElementById("Sum").innerHTML;
    let sumL = sum.split(' ');
    console.log(sumL[1])
    document.getElementById("Sum").innerHTML = `Sum: ${parseInt(sumL[1]) + parseInt(newerCard['Value'])}`;
    if (parseInt(sumL[1]) + parseInt(newerCard['Value']) > 21) {
        document.getElementById("Question").innerHTML = `YOU LOST!`;
        document.getElementById("two").disabled = true;
    }
    if (parseInt(sumL[1]) + parseInt(newerCard['Value']) === 21) {
        document.getElementById("Question").innerHTML = `BLACKJACK!`;
        document.getElementById("two").disabled = true;
    }

}

