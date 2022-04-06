

// Generates a new deck
function getDeck() {
    var suits = ["spades", "diams", "clubs", "hearts"];
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
let check = false;
let card1Sym;
let card1Val;
let card2Sym;
let card2Val;
let newerCardSym;
let newerCardVal;
let isAlive = true;
let counter = 0;

function startGame() {
    window.onerror = function () {
        location.reload();
    }
    if (isAlive === false) {
        location.reload();
    }
    else {

        if (check === true) {
            removeRow('card')
        }

        document.getElementById("two").disabled = false;
        card1 = drawRandomCard();
        card2 = drawRandomCard();

        if (card1['Value'] === 'A') {
            card1Sym = 'A'
            card1Val = 1
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '2') {
            card1Sym = '2'
            card1Val = 2
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '3') {
            card1Sym = '3'
            card1Val = 3
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '4') {
            card1Sym = '4'
            card1Val = 4
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '5') {
            card1Sym = '5'
            card1Val = 5
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '6') {
            card1Sym = '6'
            card1Val = 6
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '7') {
            card1Sym = '7'
            card1Val = 7
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '8') {
            card1Sym = '8'
            card1Val = 8
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '9') {
            card1Sym = '9'
            card1Val = 9
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === '10') {
            card1Sym = '10'
            card1Val = 10
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === 'J') {
            card1Sym = 'J'
            card1Val = 10
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === 'Q') {
            card1Sym = 'Q'
            card1Val = 10
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === 'K') {
            card1Sym = 'K'
            card1Val = 10
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card1['Value'] === 'j') {
            card1['Value'] === 'J'
            card1Sym = 'J'
            card1Val = 10
            addRow(card1['Value'], card1['Suit'], 'card')
        }
        if (card2['Value'] === 'A') {
            card2Sym = 'A'
            card2Val = 1
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '2') {
            card2Sym = '2'
            card2Val = 2
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '3') {
            card2Sym = '3'
            card2Val = 3
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '4') {
            card2Sym = '4'
            card2Val = 4
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '5') {
            card2Sym = '5'
            card2Val = 5
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '6') {
            card2Sym = '6'
            card2Val = 6
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '7') {
            card2Sym = '7'
            card2Val = 7
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '8') {
            card2Sym = '8'
            card2Val = 8
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '9') {
            card2Sym = '9'
            card2Val = 9
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === '10') {
            card2Sym = '10'
            card2Val = 10
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === 'J') {
            card2Sym = 'J'
            card2Val = 10
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === 'Q') {
            card2Sym = 'Q'
            card2Val = 10
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === 'K') {
            card2Sym = 'K'
            card2Val = 10
            addRow(card2['Value'], card2['Suit'], 'card')
        }
        if (card2['Value'] === 'j') {
            card2['Value'] === 'J'
            card2Sym = 'J'
            card2Val = 10
            addRow(card2['Value'], card2['Suit'], 'card')
        }

        renderGame()
        check = true
    }
}

function renderGame() {
    document.getElementById("Question").innerHTML = `Draw another card?`;
    document.getElementById("Cards").innerHTML = `Cards:  `;
    document.getElementById("Sum").innerHTML = `Sum: ${card1Val + card2Val}`;

}



function newCard() {

    window.onerror = function () {
        location.reload();
    }

    let newerCard = drawRandomCard();
    cards.push(newerCard['Value'])
    if (newerCard['Value'] === 'A') {
        newerCardSym = 'A'
        newerCardVal = 1
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '2') {
        newerCardSym = '2'
        newerCardVal = 2
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '3') {
        newerCardSym = '3'
        newerCardVal = 3
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '4') {
        newerCardSym = '4'
        newerCardVal = 4
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '5') {
        newerCardSym = '5'
        newerCardVal = 5
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '6') {
        newerCardSym = '6'
        newerCardVal = 6
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '7') {
        newerCardSym = '7'
        newerCardVal = 7
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '8') {
        newerCardSym = '8'
        newerCardVal = 8
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '9') {
        newerCardSym = '9'
        newerCardVal = 9
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === '10') {
        newerCardSym = '10'
        newerCardVal = 10
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === 'J') {
        newerCardSym = 'J'
        newerCardVal = 10
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === 'Q') {
        newerCardSym = 'Q'
        newerCardVal = 10
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === 'K') {
        newerCardSym = 'K'
        newerCardVal = 10
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    if (newerCard['Value'] === 'j') {
        newerCard['Value'] === 'J'
        newerCardSym = 'A'
        newerCardVal = 10
        addRow(newerCard['Value'], newerCard['Suit'], counter.toString())
    }
    let sum = document.getElementById("Sum").innerHTML;
    let sumL = sum.split(' ');
    console.log(sumL[1])
    document.getElementById("Sum").innerHTML = `Sum: ${parseInt(sumL[1]) + newerCardVal}`;
    if (parseInt(sumL[1]) + newerCardVal > 21) {
        document.getElementById("Question").innerHTML = `YOU LOST!`;
        document.getElementById("two").disabled = true;
        isAlive = false;
    }
    if (parseInt(sumL[1]) + newerCardVal === 21) {
        document.getElementById("Question").innerHTML = `BLACKJACK!`;
        document.getElementById("two").disabled = true;
        isAlive = false;
    }
    counter += 1
}



function addRow(_value, _suit, counter) {
    counter.toString()
    let classNam = `card rank-${_value} ${_suit}`;
    const div = document.createElement('div');

    div.id = counter
    div.className = classNam;

    div.innerHTML = `
    <span class="rank">${_value}</span>
    <span class="suit">&${_suit};</span>
    `;

    document.getElementById('CardSection').appendChild(div);
}

function removeRow(_string) {
    document.getElementById(_string).remove();
    document.getElementById(_string).remove();
}
