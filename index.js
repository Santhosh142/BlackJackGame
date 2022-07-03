
let cards =[]

let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";


function getRandomCard() {
    let randomNumber = Math.ceil( Math.random() * 13)
    if(randomNumber === 1)
        return 11;
    else if(randomNumber >= 11 && randomNumber <= 13)
        return 10;
    return randomNumber;
}


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    document.getElementById('cards-el').textContent="Cards :";
    document.querySelector('#sum-el').textContent="Sum :"+sum;
    
    for(let i=0;i<cards.length;i++) {
        document.getElementById('cards-el').textContent += cards[i] + " ";
    }
    if(sum < 21) {
        message = "do you want to draaw new card ? ";
    }
    else if(sum === 21) {
        message = "you have won blackjack!!";
        hasBlackJack = true;
    }
    else {
        message = "alas you are out of the game";
        isAlive = false;
    }
    document.getElementById('message-el').innerHTML = message;
}

function newCard() {
    if(isAlive == true && hasBlackJack == false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
    
}


