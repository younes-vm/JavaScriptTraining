let sum = 0;
let cards = [];
let cardsInfoNames = [];
let message = "";
let alert = document.getElementById("alert-message");
let cardsInfo = document.getElementById("cards-info");
let cardsSum = document.getElementById("cards-sum");
let cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
restartGame();

function restartGame() {
    sum = 0;
    cards = [];
    cardsInfoNames = [];
    cardsSum.textContent = sum;
    cardsInfo.innerHTML = "";
    message = "";
    cards.push(Math.floor(Math.random() * 13) + 1);
    cards.push(Math.floor(Math.random() * 13) + 1);
    sum += cardValues[cards[0] - 1] + cardValues[cards[1] - 1];
    cardsSum.textContent = sum;
    for (let i = 0; i < cards.length; i++) {
        cardsInfoNames.push(cardNames[cards[i] - 1]);
    }
    cardsInfo.innerHTML = cardsInfoNames;
    alert.style.transform = "scaleY(0)";
}

function newCard() {
    if (sum > 21) {
        alert.style.transform = "scaleY(1)";
        message = "You've already lost. Restart the game to play again";
        alert.textContent = message;
        return;
    } else if (sum === 21) {
        alert.style.transform = "scaleY(1)";
        message = "You've already won. Restart the game to play again";
        alert.textContent = message;
        return;
    }

    cards.push(Math.floor(Math.random() * 13) + 1);
    cardsInfoNames.push(cardNames[cards[cards.length - 1] - 1]);
    cardsInfo.innerHTML = cardsInfoNames;
    sum += cardValues[cards[cards.length - 1] - 1];
    cardsSum.textContent = sum;

    if (sum < 21) {
        alert.style.transform = "scaleY(1)";
        message = "You drew a " + cardsInfoNames[cardsInfoNames.length - 1];
    } else if (sum === 21) {
        alert.style.transform = "scaleY(1)";
        message = "Blackjack!";
    } else {
        alert.style.transform = "scaleY(1)";
        message = "Bust!";
    }
    alert.textContent = message;
}
